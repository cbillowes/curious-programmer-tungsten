---
title: "The Power of Metrics and Lean Six Sigma in the Training Phase"
cover: training.webp
date: 2025-01-10 00:00:00
tags:
  - Mindset
  - Problem Solving
  - Technical
  - Lean Six Sigma
  - Process
creditSource: GPT-4o
creditLink: https://chatgpt.com/
---

In my [previous](/blog/optimizing-software-delivery-the-power-of-metrics-and-lean-six-sigma/) article, we conducted the beginning of my thought experiment for a team working in serious chaos. We'll refer to the team as Extreme Z.

John joins and is immediately drowning in the a swirl of perpetual chaos. Onboarding is an afterthought, the code is in bits and pieces here and there with no (or at least, outdated) documentation, and the team is too busy to help effectively. He is left to fend for himself, trying to piece together the system and the processes.

Little by little, we attempt to chip away at the challenges Extreme Z faces and try to bring order to the chaos using the bits we know about Lean Six Sigma.

A quick recap though. We outlined 7 phases of their entire end-to-end software delivery process:

1. Training
2. Design
3. Development
4. Quality Assurance
5. Release
6. Monitoring
7. Support

In this article, we’ll zoom into the metrics dedicated to the training phase. We’ll explore how to reduce waste, build clarity, and measure impact.

> **Crucially important.** I'm no expert on this. I'm simply curious about the process and how to get to the juicy data bits so that we can measure improvements. This thought experiment is my way of exploring the possibilities - not a conclusive guide to solving these complex problems. Your input is very much welcomed.

## Training as a Process

It might sound strange that training is a process on its own but it is an essential step to build and invest in skills, share knowledge with the team and onboard new talent. This phase forms part of the life cycle of new hires and people in the team who wish to up-skill or revise their skills.

We want to empower talent in the team to obtain & retain skills, invest in them so they can do better in their jobs, work autonomously, eliminate key-person dependencies and reduce the time it takes for new hires to become productive. This is a constructive and healthy part of the culture that directly delivers value to the team and business.

## The Problem

The problem is that Extreme Z is not doing this effectively. They are not investing in training, onboarding is a mess, and the team is too busy to help. This is leading to high churn rates, low productivity, high defect rates and complete burn out.

## Waste

Waste refers to any activity, process, or resource that consumes time, effort, or money but does not add value to the customer or the business. In Lean Six Sigma (LSS), there are 8 types of waste (referred to as **TIMWOODS** or **DOWNTIME**). Let's break each category into pieces associated with our training context:

### Transportation

> The unnecessary movement of materials, tools, or information between locations.

Think of the jagged experience of hopping between tools or platforms like email, Jira, GitHub, Slack, Teams etc to access information. It takes time to remember or figure out where things are and how to access them. It can also be overwhelming and disorienting, especially during onboarding.

Why not consolidate everything into a single entry point with easy access? Even if it's just a simple "Getting Started" page with a list of links to start off with.

### Inventory

> Accumulation of materials, information and resources that are not actively used or processed.

Imagine all the effort you have put into onboarding a new hire but over time the documentation is not kept up to date, or there is so much information that it's too overwhelming to maintain or process.

Consider a clear learning path focusing on essential skills and requirements. You can create Wikis, READMEs, internal documentation developed using tools like [Docusaurus](https://docusaurus.io/), [road maps](https://roadmap.sh) and media-rich training material using platforms like [Teachify](https://teachify.com/) but have a consolidated place to access it all.

Audit the documentation regularly. Fix what is outdated or irrelevant. Bake changes to documentation into user stories to keep the documentation living. Be sure to have described the domain, system, architecture, and processes. Define a glossary of ubitiquous language.

### Motion

> The unnecessary movement of people or processes during a task.

Moving a new hire to a task that is more complicated than they can handle could be a recipe for disaster. Why not move people in the team around to focus on cross-pollination of skills instead? Pair or mob programming is process where two or more people work on the same feature or bug together. This is excellent for knowledge sharing, learning and new hires.

Systems can get complex and it's important to have more than one person who understands how it works. You can pair up more "senior" team members with "junior" team members to guide them through the process. The level of seniority can be loosely based on experience in the system, not necessarily age or experience in the field.

### Waiting

> Idle time when a person, process, or task is delayed due to dependencies or inefficiencies.

Reduce key person dependencies by sharing knowledge and skills across the team.

### Overproduction

Streamline your material catering only for essential skills to the team.


### Over-processing

### Defects

### Skills

Quality control documentation.



### Pay as You Go

Formal course material like certified training courses, like Google Cloud Certifications, or courses with completion certificates, like [Udemy](https://www.udemy.com) or [Pluralsight](https://pluralsight.com) courses show an investment in individual skills and is also nice to add to a resume - which should be encouraged.

Subscription-based learning can lead to high volumes of waste as people's schedules fill up. Work and life get in the way and the courses get put on the back burner. This leads to course incompletion.

### Dedicated Learning Blocks

Dedicate learning time for each person a day. This could be in the form of a "learning hour" or "learning day" where the person can focus on their training without interruptions.

### Pair/Mob Program on Features



### Run Informal Sessions

"Brown bags" or "Show and Tells" are informal training sessions where team members can present on a topic they are passionate about or for sharing knowledge of a skill they're recently picked up or need to share within the team. This can be in the form of a conversation, presentation, a demo, or a workshop.


## Metrics

Based on the outcome of the thought experiment team, I know we need to make drastic changes to the process as a whole. These changes can be done in increments in the form of small adjustments, experiments, and simple improvements that add up over time. But how is the impact measured? We need quantifiable data which we must continuously and consistently gather over time. This data will help us understand the impact of the changes we make and guide us in the right direction.

Having the data allows you to truly scrutinize and understand each step as the data is evidence that tells a story. Let's dive in.

### Time to Productivity

Track every release, end-to-end, per person in the team:

- **Cycle Time:** a productivity factor indicating speed to market. A slow release cycle could be indicative of high complexity, strict quality control, bottlenecks, inefficiencies, or a lack of skills. A fast release cycle could be because of automation but also a result of low quality work or working on low value-adds.
- **Type:** (feature, defect/bug, chore, refactor) high defect rates indicates low quality. Refactoring is a good sign of technical debt being paid off. If there are more refactors than features then there is low value-add to the customer and this needs to be addressed. Code is a liability and features are assets. The more assets you have, the more value you bring to the business.
- **Size:** (small, medium, large) gauge the complexity of the work being delivered and find the trend over time per person. Smaller releases are faster to market but could be indicative of low value-adds.
- **Difficulty:** (straightforward, complex) more complex work lead to higher risk of defects and longer cycle times. This could be also be because of a lack of skills or experience in the team. This data can also reflect the levels of autonomy of individual contributors.
- **Value:** knowing the purpose of the release and its value to the business, customers or developers is essential as it helps quantify impact, prioritize work and distribute work in a balanced way.

Tracking the data can be done using tools like [Fibery](https://fibery.io/), [Jira](https://www.atlassian.com/software/jira) or [Trello](https://trello.com). You could also use a spreadsheet or a database to track this data. It is exceptionally important to create visibility within the team. People need to work with the data towards a common goal. You're only as fast as your weakest link. The visuals should help adjust, recourse, and improve the process.

### Skills Matrix

Determine what skills (language, tools, principles, practices) are in the team and at what level (experienced vs just started) each person is at. You could do so with scored quizzes or by determining a skill level using judgement based on experience with that person. Use this matrix to identify skills that are lacking. Keep tracking this data over time as skills get acquired and lost during churn. Keep track of the reason behind the change (eg. Alex left the team and Sarah joined 5 weeks later with a lot less experience). Reasons help when scrutinizing and understanding variation.

### Training

- **Completion Rate:** Track the completion rate of courses. This can be done by tracking the number of courses completed per person over time. This can be done using the platform that hosts the courses or by using a spreadsheet.
- **Quiz Scores:** Track the quiz scores of each person. This can be done by tracking the quiz scores per person per course over time. This can be done using the platform that hosts the courses or by using a spreadsheet.
- **Time Spent:** Track the total time each person spends on a course. This can be done by tracking the time spent per person per course over time. This can be done using the platform that hosts the courses or by using a spreadsheet.
- **Cost:** Track how much the course costs per person. This can be done by tracking the cost per person per course over time. This can be done using the platform that hosts the courses or by using a spreadsheet.
- **Productivity:** Compare historical productivity data per person. Not everyone responds to training in the same way so we need to ensure our methods are variable and target different types of personas. You need to find out why the approaches are not working and which approach would.
- **Course Quality:** Track subjective ratings such as satisfaction scores to gauge if the content is engaging, stimulating and relevant.

### Retention

- **Churn Rate:** Track the churn rate of the team. This can be done by tracking the number of people who leave the team over time. This can be done using a spreadsheet.
- **Reasons:** Track the reasons why people leave the team. This can be done by tracking the reasons per person over time. This can be done using a spreadsheet.
- **Impact:** Track the impact of people leaving the team. This can be done by tracking the impact per person over time. This can be done using a spreadsheet.
- **Feedback:** Track the feedback of people who leave the team. This can be done by tracking the feedback per person over time. This can be done using a spreadsheet.
- **Retention Rate:** Track the retention rate of the team. This can be done by tracking the number of people who stay in the team over time. This can be done using a spreadsheet.

## Conclusion

