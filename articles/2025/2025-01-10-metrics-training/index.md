---
title: "The Power of Metrics and Lean Six Sigma in the Training Phase"
cover: training.webp
date: 2025-01-18 00:00:00
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

John joins and is immediately drowning in a swirl of perpetual chaos. Onboarding is an afterthought, the code is in bits and pieces here and there with no (or at least, outdated) documentation, and the team is too busy to help effectively. He is left to fend for himself, trying to piece together the system and the processes.

Sarah, on the other hand, has been part of the team for some time now. Due to her poor onboarding and lack of training, she is struggling to keep up with understanding the domain and the system, let alone the pace and pressure.

Edward is the team lead and he knows his stuff. Problem is, he is a key-person dependency and is stagnating in his career. He is too busy to trying to help where he can in the team and is constantly firefighting.

Everyone means well and is definitely trying. Where can they improve? So, in this serious, little by little, we attempt to chip away at the challenges that Extreme Z are facing to try bring order to the chaos.

> **Crucially important.** I'm no expert on this. This thought experiment is my way of exploring potential improvements using what I am learning in my Lean Six Sigma courses - not a conclusive guide to solving these complex problems.

A quick recap though. We outlined 7 phases of their entire end-to-end software delivery process:

1. Training
2. Design
3. Development
4. Quality Assurance
5. Release
6. Monitoring
7. Support

In this article, we’ll zoom into the training "phase" (I use this term loosely because it is actually an ongoing parallel by nature). We’ll explore potential ways to reduce waste, build clarity, and measure impact. In Lean Six Sigma, we are to reduce variation and eliminate waste.

## Goals

Training will comprise of the following sub-processes, each with their own goals:

1. **Onboarding new hires**: The goal here is to get hires to become productive as soon as possible. The team needs to get them up to speed with the business, domain, system, processes, and tools.

2. **Learning new skills and knowledge**: The goal here is to enable and empower innovation, creativity, and autonomy. Invest to build skills and knowledge to grow the different parts of the system.

3. **Sharing knowledge and skills within the team**: The goal here is to reduce key-person dependencies, increase collaboration, and build a culture of learning and sharing. This is about cross-pollination of skills and knowledge.

4. **Training on new features**: The goal here is to fill in any gaps there might be in the team members' knowledge and skills prior to working on a task.

## Focus Areas

## Problem

The problem is that Extreme Z is not doing this effectively. They are not investing in training, onboarding is a mess, and the team is too busy to help. This is leading to high churn rates, low productivity, low morale, high defect rates and burn out.

## Understand Waste

In Lean Six Sigma, there are 8 types of waste (referred to as **TIMWOODS** or **DOWNTIME**). They mean the same but with differently phrased words.
Waste refers to anything (activity, process, or resource) that consumes time, effort, or money but does not add value to the customer or the business.

The categories are:

1. **Transportation**: The unnecessary movement of materials, tools, or information between locations.
2. **Inventory**: Accumulation of materials, information and resources that are not actively used or processed.
3. **Motion**: The unnecessary movement of people or processes during a task.
4. **Waiting**: Idle time when a person, process, or task is delayed due to dependencies or inefficiencies.
5. **Overproduction**: Producing more than what is needed or producing too early.
6. **Over-processing (Excessive processing)**: Doing more work than what is required to complete a task.
7. **Defects**: Errors, rework, or mistakes that require additional time, effort, or resources to fix.
8. **Skills (Non-utilized talent)**: Under-utilization of skills, knowledge, or experience within the team.

## Reduce Waste

### Consolidate the User Experience

Reduce the jagged experience of hopping between tools, platforms and asking people to get information when onboarding or trying to find information for up-skilling. Create a single entry point that is easily accessible and points to different places where information is stored if you can't host everything on the same platform.

### Create Clear Learning Paths

Know what you want people to learn about the system and the skills they need to work on the system.

### Keep Living Documentation

This is not a one-person job. This requires team effort. Everyone should be responsible for keeping documentation up to date. You can choose to create Wikis, READMEs, internal documentation developed using tools like [Docusaurus](https://docusaurus.io/), [road maps](https://roadmap.sh) and media-rich training material using platforms like [Teachify](https://teachify.com/). Whatever you choose, keep it simple and easy to maintain.

Audit the documentation regularly. Fix what is outdated or irrelevant. Bake changes to documentation into user stories to keep the documentation living. Be sure to have described the domain, system, architecture, and processes. Define a glossary of ubitiquous language.

### Cross-Pollinate Skills

Move people around to focus on cross-pollination of skills. Pair or mob programming is a process where two or more people work on the same feature or bug together. This is excellent for knowledge sharing, learning, and new hires.

This gives people with younger skill levels a chance to learn from more experienced (in domain or skill) team members. It also helps to reduce key person dependencies by sharing knowledge and skills across the team.

## Create Visibility

It's hard to cram a complex system in one head so it's essential to have visibility into all the things in the system. This includes process charts, system diagrams, and data flow diagrams. This can be done using tools like [Lucidchart](https://www.lucidchart.com/), [Draw.io](https://draw.io/), [Miro](https://miro.com/) or [Whimsical](https://whimsical.com/). They will form part of the documentation you create and keep watering.

### Pay as You Go Training

Subscription-based learning can lead to high volumes of waste as people's schedules fill up. Work and life get in the way and the courses get put on the back burner. This leads to course incompletion. Yet, formal courses like certified training with Google Cloud Certifications, or courses with completion certificates with [Udemy](https://www.udemy.com) is very rewarding.

### Dedicated Learning Blocks

Dedicate learning time for each person a day. This could be in the form of a "learning hour" or "learning day" where the person can focus on their training without interruptions.

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
