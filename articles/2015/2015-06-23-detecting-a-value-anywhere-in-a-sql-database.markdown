---
title:  "Detecting a value anywhere in a SQL database"
cover: 'https://picsum.photos/1600/800/?image=532'
date:   2015-06-23
tags:
  - TSQL
---

> (Ported from my old blog called _Thinky_)

This is a post that I have ported from an old blog (Published on: Jul 24, 2012): Life is good when I can help someone out with a problem, their code, or finding a needle in a haystack (among other things of course). Thanks to the lovely catalog views jam-packed with all the descriptive goodness of metadata pertaining to any database available to my very own fingertips, I was able to help out – and life is good :)

I needed to help a colleague find the table (and column) containing a specific value. About 6 years ago or so I was stuck with a similar need to such a script – I had a null value that broke my web application due to a third party tool not having the ability to fathom a null value. Trying to track down this null would be a tedious task and my understanding of SQL back then was shockingly non-existent. I had a database administrator as a boyfriend that passed on a script to me that I have long since then lost in the virtual realm of cyber storage. I understood the just of the script but never the inner workings – until I needed to find the needle in the haystack again not so long ago and I had to do it without his help. This is when the sys.* views and I become good friends.

- sys.databases
- sys.tables
- sys.columns
- sys.types
- sys.procedures
- sys.views

For a full list of views, check out [MSDN Catalog Views][msdn-catalog-views] or the actual view objects in the master database using the object explorer.

The cool thing about these catalog views is that you can query them. (Well obviously so, because they are views). There is so much you can do with the metadata at hand but to attend to my solution to the problem I needed to solve today, I will focus on just that: finding a column in a table of a specific database containing a known value.

To start this approach we need to know what tables are in the database and map each column to its respective table. To do so, I wrote the simple script below:

{% highlight sql %}
SELECT * FROM sys.tables t
INNER JOIN sys.columns c ON c.object_id = t.object_id
{% endhighlight %}

Now we need to generate scripts which we will manually run to find our value’s location(s). The script below will generate a bunch of scripts which we can simply copy and paste into our query execution window and run as a whole.

{% highlight sql %}
SELECT 'SELECT ''' + t.name + ''' AS [Table], [' + c.name + '] FROM [' + t.name + '] WHERE [' + c.name + ']=''MyValue''' FROM sys.tables t
INNER JOIN sys.columns c ON c.object_id = t.object_id
{% endhighlight %}

Note:  MyValue is the known value you are looking for.

Our script is almost done but notice how running the generated script now generates a SELECT statement per column per table (in a specific database). The problem with the above script (in this case) is that we are looking for a string value so if we had to run this script and execute the generated scripts, we’d get a bunch of errors with date, integer, bit, uniqueidentifier and other data fields that do not accept the string value we are searching for. We could either cast the column in the where clause to a varchar or we can simply filter on specific system types. For the purpose of this post, I have decided to filter on system types as below:

{% highlight sql %}
SELECT 'SELECT '''+ t.name + ''' AS [Table], [' + c.name + '] FROM [' + t.name + '] WHERE [' + c.name + ']=''MyValue''' FROM sys.tables t
INNER JOIN sys.columns c ON c.object_id = t.object_id AND c.system_type_id IN (SELECT system_type_id FROM sys.types WHERE name IN ('varchar','nvarchar','char','nchar'))
{% endhighlight %}

Running this script will return less rows than before assuming your database does not only consist of string values. It also filters on the sys.types catalog view which will result in only searching for text, varchar, nvarchar, char and nchar types as explicilty scripted for.

The generated scripts can result to a lot of SELECT statements depending on how big your database is; trying to find the result in the array of results returned will be just as tedious as searching for the value in the first place. To make life easier for us, we can amend the code as follows:

{% highlight sql %}
SELECT 'IF EXISTS(SELECT [' + c.name + '] FROM [' + t.name + '] WHERE [' + c.name + ']=''MyValue'') PRINT ''' + t.name + ': ' + c.name + '''' FROM sys.tables t
INNER JOIN sys.columns c ON c.object_id= t.object_id AND c.system_type_id IN (SELECT system_type_id FROM sys.types WHERE name IN ('varchar','nvarchar','char','nchar'))
{% endhighlight %}

The above code first checks if the value exists and if it exists it will simply print out the table and column name for the specific value you are searching for thus simply and quickly solving our tedious haystack and needle problem in two lines of T-SQL. Life is good! :)

Finding your way around the catalog views is extremely helpful and you will never regret it. I hope this helps you in some way.

Happy scripting!

For information relating to the permissions for catalog views, please check out the [Metadata Visibility Configuration][metadata-visibility-configuration] (MSDN) post.

##Script Variations:

{% highlight sql %}
--Get a column with a specific date, only filtering on datetime system types
SELECT 'SELECT '''+ t.name + ''' AS [Table], [' + c.name + '] FROM [' + t.name + '] WHERE [' + c.name + ']=''1900-01-01''' FROM sys.tables t
INNER JOIN sys.columns c ON c.object_id = t.object_id AND c.system_type_id IN (SELECT system_type_id FROM sys.types WHERE name IN ('datetime'))
{% endhighlight %}

{% highlight sql %}
--Get a column between a specific date and GETDATE(), only filtering on datetime system types: Nice for created and modified dates
SELECT 'SELECT '''+ t.name + ''' AS [Table], [' + c.name + '] FROM [' + t.name + '] WHERE [' + c.name + '] BETWEEN ''2000-01-01'' AND GETDATE()' FROM sys.tables t
INNER JOIN sys.columns c ON c.object_id = t.object_id AND c.system_type_id IN (SELECT system_type_id FROM sys.types WHERE name IN ('datetime'))
{% endhighlight %}

{% highlight sql %}
--Example of casting the where column and value being searched for
SELECT 'SELECT '''+ t.name + ''' AS [Table], [' + c.name + '] FROM [' + t.name + '] WHERE CAST([' + c.name + '] AS VARCHAR(50))=CAST(1 AS VARCHAR(50))' FROM sys.tables t
INNER JOIN sys.columns c ON c.object_id = t.object_id AND c.system_type_id IN (SELECT system_type_id FROM sys.types WHERE name IN ('int', 'varchar'))
{% endhighlight %}

UPDATE on 26 July 2012:
Another interesting approach to this solution would be to dynamically build a query and execute it automatically. This approach is nicely illustrated in Madhivanan’s blog (Beyond Relational) in a post titled [Search a value in character column of all tables][madhivanan's post].

[msdn-catalog-views]: https://msdn.microsoft.com/en-us/library/ms174365.aspx
[metadata-visibility-configuration]: https://msdn.microsoft.com/en-us/library/ms187113.aspx
[madhivanan's post]: http://beyondrelational.com/modules/2/blogs/70/posts/10883/search-a-value-in-character-column-of-all-tables.aspx
