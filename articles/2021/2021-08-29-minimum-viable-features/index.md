---
title: Feature Development Lifecycle with minimum viable features
date: 2021-08-30 21:00:00 +0400
cover: pink-mac.jpg
credit: DESIGNECOLOGIST
creditLink: https://unsplash.com/photos/Pmh0UoG1vlE
creditSource: unsplash
tags:
  - Technical
  - Continuous Delivery
---

> Successful features are in small bite-sized chunks that are released iteratively and regularly
> through the Feature Development Lifecycle.

I just rewrote my [blog](/blog/what-i-did-to-build-a-high-performing-and-seo-happy-gatsby-blog/).
It took a while because I was pedantic about getting numerous features live.
I think I tried to get too much done in one go.

The problem was that my former blog - the one that was in production at the time - didn't work.
For some reason the click events stopped working and starting throwing errors. Every button was broken! :cry:
I needed to hurry the hell up as it didn't leave a healthy impression. It may also inspire me to write again.

I know what an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) (minimum viable product) is but when
it came to delivering my blog, I fell victim to blurred lines between what a necessary feature and what a
desired feature was. When I released my blog, I started working on smaller and simpler features and
that's when I started noticing my mindset shift.

> Let's get something out that works now and then streamline and improve it in the next round.
> Logical right?

In this article, I explore what I believe a minimum viable feature is and I introduce the concept
of the Feature Development Lifecycle.

## Waterfall :umbrella: features

To me, this is a feature **with ALL the bells and whistles**
that get worked on in its entirety and then is released to the market. The problem with this approach
is that the pieces of work falls victim to:

| Factors                                    | Results                                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Blurred lines of when it's is finished** | "Let's just add one more feature to it!"                                                       |
| **Too many moving parts**                  | Harder to test                                                                                 |
| **Delayed time to market**                 | Risk of becoming irrelevant                                                                    |
| **Increased complexity**                   | Harder to reason about and maintain                                                            |
| **Higher possibility of** :bug:            | Unhappy people                                                                                 |
| **Outdated dependencies**                  | Security risks, falling too far behind and can't upgrade                                       |
| **Stops other work from getting done**     | The pipeline is blocked until this piece of work is done                                       |
| **Liability**                              | If the feature fails, a lot of time can be lost                                                |
| **Reverting is tricky**                    | Either have to revert one commit - EVERYTHING or paddle through and revert many atomic commits |

## Minimum viable :rocket: features

> A minimum viable feature release should include the bare necessities, and nothing more.

A feature with the minimum amount of work put in to create a feature that is
good enough to go to market and satisfy the needs of the user. This means less code and more agility
in terms of testing and rectifying (patching and reverting) when something goes wrong.

> Focus on getting the important things up and running and then reach for the stars :sparkles: afterwards.

With every feature that you tackle consider the following process and see if it helps you release
better software. As I mentioned earlier successful features can lie in working in small bite-sized
chunks and releasing iteratively and regularly.

Here are a few questions I have with my own interpretations of the answers that all ring the same sentiment of "it depends":

### How small should the feature be?

This depends on the things like what the feature is, the project you are working on, the urgency of it to be release, the technical
capacity available for getting the job done.

Size is relative and it all depends on what is humanly and technically possible within your team to yield great results.

### How long is a reasonable time-frame to work on it?

The time-frame should be estimated based on the feature. I don't think there is a one size fits all but
I would boldly say that I believe a week max is ideal.

If a feature takes longer than the estimated time to complete and assuming the developer is well oriented with the
system and the new feature then the requirements are either too big or too complex to complete and should be chunked down further
or fleshed out.

### What if it is already in its smallest form?

If you are absolutely sure then you have most likely reached the last step of the process for that given
feature.

## Feature Development Lifecycle

Introducing the **Feature Development Lifecycle** where you:

1. **Learn**: Know what the user needs
2. **Chunk**: Break down your requirements into bite-sized chunks
3. **Analyze**: Analyze the technicalities
4. **Deliver**: Deliver what is important, relevant and feasible
5. **Repeat**: Take the remaining (and if there are new) features and repeat the process

### Example time

To illustrate each step of the process, let's follow the example of building a search feature on a website.

#### 1. Learn

> Know what the user needs.

Work on the user journey to get a better understanding of what the user needs. This means that you need to
fully understand the concept around the feature. You can also picture the different scenarios and options a user can
have that could be implemented as part of this feature. In this step you can be creative and think BIG :mountain:!

- How would the user provide input to the system?
- What data are we offering search for?
- Will there be an auto-complete feature?
- What will the results look like?

#### 2. Chunk

> Break down your requirements into bite-sized chunks.

What is the bare minimum that is needed to build this feature in order to function in the wild?
It takes some thinking as lines can blur between necessity and desire.

These are features that cannot be compromised on and are small enough to release in a reasonable amount of time.
For the purposes of our example, let's say that we decided that the following points apply:

- The user needs to type into a search box
- Search will take place when the user clicks on the search button
- A title, description and a link to the page will be returned in the results

#### 3. Analyze

> Analyze the technicalities.

Throw some technical questions at the feature and answer to get an idea of the implications involved in building the feature.

- Is there authentication and the concept of a session required?
- How will the user interface render the feature?
- Will the feature require 3rd party integration?
- What database type will we need to use?
- Where are we getting the data from?
- What will the caching strategy be?
- What are the hosting requirements?
- Do we need to keep track of usage and other analytics?
- How is this going to be tested?
- What components or software can we reuse instead of rolling it out by hand?

#### 4. Deliver

> Deliver what is important, relevant and feasible.

- Pick the most important features that are still relevant and feasible to implement and work on them first.
- Try to work in [vertical slices](https://en.wikipedia.org/wiki/Vertical_slice) which is development across all components
  of the project relating to the feature.
- Ensure that the feature works well as intended. Test, test, and test.
- Release the feature as soon as you can.
- Iterative development offers:

| Benefits                   | Results                                                    |
| -------------------------- | ---------------------------------------------------------- |
| **Living code**            | Can be optimized and kept up to date                       |
| **Easier to reason about** | There is less code and smaller parts of the system to test |
| **Simpler to revert**      | Rolling back one commit vs many                            |
| **Mitigated risk**         | Risk can be managed during each iteration                  |

#### 5. Repeat

> Take the remaining (and if there are new) features and repeat the process.

Decide what features are still relevant. Note that feature requirements that pop up
after deployment may take priority. Break these requirements down from the beginning.

Our next set of features we can start processing could include:

- Auto-complete
- Richer results (has categories and pictures etc)
- Exits search when certain keys are pressed
- Indicator showing when results are loading
- Search keywords are highlighted

## It's an art

It takes discipline to break down a feature, honestly note what is essential and to work on it
without touching other areas - as tempting as it can be.

I believe that successful features are small bite-sized chunks that are released iteratively and
regularly through the Feature Development Lifecycle.

## Collaboration

:pray: Thanks to [Fabrice Madré](https://www.linkedin.com/in/fabrice-madre-3365382a) for
collaborating with me on this article.
