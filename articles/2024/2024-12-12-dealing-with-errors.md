---
title: 'Owning the Chaos: A Simple Guide to Tackling Obscure Errors'
cover: errors.webp
featured: true
date: 2024-12-12
tags:
  - Communication
  - Continuous Learning
  - Problem Solving
  - Mindset
  - Technical
creditSource: GPT-4o
creditLink: https://chatgpt.com/
abstract: It is important to know how errors get prioritized and responded to, as well as what steps would be taken to address them effectively while minimizing disruptions.
---

> **AUTHOR'S NOTE**:\
> When something is obscure it means that it is not clear or is difficult to understand.
> This implies that something is vague, hidden, or lacking in detail.
> Cryptic indicates that something is mysterious or puzzling.
> Some errors are both **obscure** and **cryptic** so feel free to use the terms interchangeably in this articles.

Ping! A slack message. You wake up. Oh look, it's `#errors`.
"What's broken now?" you think to yourself.
You go to the channel and see an automated message rendered on the screen.
It reads something like `Error: Something disastrous happened`.
It's obscure and it makes you pull a perplexed face.
You scroll up to see more errors from the night before.
This forms a deepening sickening pit in your stomach.
Some errors make sense. Others are just as baffling as the original.

Adding to the challenge, you're juggling the complexity of multiple environments like development, feature spin-offs, staging and production.
So, the errors that come in are from numerous contexts in the domain, applications, services and said environments.
This impacts the decision on which errors to prioritize and respond to first.

What a way to wake up—and all before breakfast :disappointed:

With no immediate response from others, you need to decide what to do.
It's still early.
Do you roll over and sleep some more?
Wait for someone with more experience?
Rely on the expert in that part of the domain?
Just jump and figure it out?

Well, it depends actually.

1. The severity of the errors. If they are blocking users, you need to act fast. If they are not, you have a bit more time.
1. Familiarity with the domain, applications, services and infrastructure. You may need to ask a few questions.
1. Experience with the tools and technologies.
1. Confidence in your ability to resolve errors.
1. Availability and bandwidth. If you are not mentally ready, spread too thin, burned out or have other commitments, you may need to ask for help.

This is an extreme but common scenario where there are floods of errors coming in from various sources.
Sometimes errors storm in like a tsunami or trickle in like a leaky tap.
Either way, they need to be addressed.

> In moments like these, someone needs to seriously step up and **take ownership**, ensuring these errors don’t fall through the cracks.
> Good team habits are critical to ensure the code is written in a maintainable and supportable way, that errors are resolved in a timely manner and that team member burn-out is avoided.

This dreaded scenario is no stranger to me.
I've seen some pretty weird things pop up.
Therefore, this topic is hot on my radar because I care deeply about the quality and integrity of systems.
To me, the answer here is that you should care. Even if you don't know how to solve it.

So, how do you tackle these challenges head-on? Let’s break it down.

## Triage

Understanding the domain, the applications & services and parts of the infrastructure is important.
If you are a new hire or new to that domain, chances are that you'd know less that the seasoned engineers.
As you may be ramping up, don't hesitate to speak up and ask questions.
You are not expected to know everything because, in reality, no-one does.
Even seasoned engineers don't know everything—experience doesn’t make you omniscient.

1. **Read** through the errors in the channel carefully.

1. **Identify** the critical environments (example production vs staging), the applications, services & jobs that are affected and how often the errors are occurring.

1. **Triage** by spotting common or related errors. Can you identify patterns, are errors originating from the same source? Is there a trend in timing or frequency? Which errors are blocking or affecting the users and how?

1. **Mark** them by the level of urgency based on the impact you have determined. Do this to the best of your abilities:

   - 🚨: Critical (affects core functionality or many users)
   - ⚠️: High (significant, but not blocking)
   - 🟡: Medium (minor but recurring issues)
   - 🔵: Low (cosmetic or non-urgent)
   - ⁉️: Unknown (you are not sure)

1. **Communicate** by starting a thread for each error:

   - Share a summary of your findings to help others understand the context.
   - Give a brief summary of the error, if you know what it is.
   - Provide links to articles, resources, wikis, code where applicable.
   - Suggest an acceptable turn around time for the error to be resolved depending on what you have learned and the urgency of the error.

1. **Focus** on the highest-priority error that you can address and resolve it before moving to the next.
1. If you can't handle the error, **allocate** or **escalate** it but be the nagging kid in the toy store or that parent who's always probing about the homework.
   Follow up to ensure progress—it’s better to be persistent than to let issues fall through the cracks.

## Investigate

When you are in a good position to get your hands dirty, use an emoji 🕵️ (like the detective one) to **indicate** that you have started.
**Document** what you uncover. Add it to the thread.
The more information you add, the better the outcome and aid for future dilemmas.
If you are stuck, **ask for help**! Again, it's okay to not know everything.

By following these steps, you can systematically unravel even the most obscure errors and contribute to a more resilient system.

I'm going to outline what I typically do. These are not in a particular order and they are often revisited multiple times.

> These steps relate to me currently using GCP (Google Cloud Platform), GKE (Google Kubernetes Engine), Error Reporting and the Logging modules.

### Error Messages

- Look for the error code, message, data identifier, raw stack trace and anything else that stands out.
- Examine the samples.
- See the occurrences, when they started, when the latest occurrence was.
- See the pods that were affected.

### Logs

Logs are a goldmine of real-time system information, whether the error is clear or obscure.
There can be a lot of noise so filter out the nonsense.

- Filter the logs by the pod name.
- Filter the logs by log type - examples include verbose, info, warn, error - (sometimes I am unlucky with this) but it's a good starting point to choose warning or error and above over the default.
- Hone in on a specific date and time range.
- Search on specific keywords.

### Search

Once you've mined the logs for clues, your next step is to search for broader context or existing solutions.
Search through the rich history in your text communications channel like Slack, your wiki, emails, and the internet like Stack Overflow, GitHub issues, ask AI, etc. for the error message or stack trace.
Give as much context and information as possible.

If you are really stuck, reach out on forums or other communities like on Slack or Discord.

### Reproduce

Try to reproduce the error with the information you have gathered.
Do this in a lower environment, if possible (locally, development, staging, etc).
This is often the fastest way to identify or confirm the root cause.
It also protects the affected environment from further damage by not causing more chaos like with data corruption, downtime, warped analytics or user impact.

### Code

Go to the code and see if you can identify the source of the error.
Recreate the conditions or data that triggered the error to understand its context.
Analyze the section for logical errors, typos, edge cases, or potential misconfigurations.

If you don't have the stack trace or the error is not in the logs, you may need to add more logging to the code to get more information.

### Document

Document your findings in the thread.
This is important for the next person who may experience something similar.

- Include the root cause analysis, if you identified it.
- Include the steps you took to investigate the error.
- Include information that you found useful and what you found to be irrelevant.

## Resolve or Escalate

Now it is time to either fix the error or give it to someone else who can–hopefully–fix it.
The baton may be passed to another team member, but ensure clear handover and follow-up to maintain accountability.
Just ensure that the ownership is clear and that the error is not forgotten.

### Resolve the Error

Whoo-hoo! You found the root cause, or a potential issue (sometimes multiples), and you know how to fix it, sometimes sort-of. Great job!

1. Apply the fix in the appropriate place to the best of your ability.
1. Ensure you have added some sort of test (or more) to confirm the error has been fixed as to mitigate it from breaking again in the future.
1. Test it thoroughly with the same steps you took to reproduce the error.
1. Use **systems thinking** to mitigate regression to other flows, users, applications, services and/or jobs. (Maximum effort!)
1. Get this fix tested by your colleagues or peers.
1. Deploy the fix to the environment where the error occurred.
1. Mark the error as resolved in GCP so that if the error occurs again, it will be a new error and you will be alerted.
1. Use an emoji :white_check_mark: in Slack to acknowledge that you have resolved the error and remove the other emojis.

### Escalate the Error

So you got unlucky this time round and you can't resolve the error. It's okay. Mark the error in Slack as escalated using the emoji :arrow_up:, remove other emojis and allocate the error to someone else.

Try to be included in the investigation process by pairing with the person who picks it up, assuming you have capacity.
Be a sponge to learn as much as you can from this experience and how the person tries to resolve the error.
Your presence is beneficial because of your investigation and findings, the learning opportunity and the potential to contribute to the resolution.
Ensure the issue is thoroughly documented and shared, fostering transparency and team learning.

## Tips

By following these tips, you can build a resilient system and a strong, collaborative team.

- **Be brave**: Don't be afraid to pick up errors. It's a great learning opportunity and you are not solely responsible for it.
- **Dig deep**: Search for and identify the root cause of the problem. Don't just fix the symptoms. Look at the data, code, logs, and the environment.
- **Reduce the noise**: Identify and reduce the noise in the system, such as overly verbose health checks or misclassified log levels.
- **Create visibility**: A good mental model of your systems, data and code is beneficial to solving for errors so create tangible mind maps or documentation for the whole team to benefit from. [Miro](https://miro.com/) and [Docusaurus](https://docusaurus.io/) are excellent tools for this.
- **Work together**: Foster a culture of collaboration and sharing. You don't have to be the sole gatekeeper of errors. Create a round-robin system where everyone gets a chance to pick up errors. Hold regular error triage meetings or pair programming sessions to share insights.
- **Prioritize**: Allocate specific blocks of time to address errors while reserving uninterrupted time for your regular tasks. Prioritize errors based on urgency and impact.
- **Process**: Formulate a process that works for you and your team. It's important to have a process that is flexible and can be adapted as you learn more about the errors that are occurring.

## Conclusion

Strong team habits are the foundation for addressing errors promptly and writing maintainable, supportable code.

1. Take ownership to strengthen your systems, support your team, and grow as a professional.
1. Write code that reports errors meaningfully, making debugging easier.
1. Communicate transparently with peers and leaders to secure the support you need and emphasize the impact of errors.

Embrace errors as opportunities to learn, grow, and build a stronger, more resilient system—and a more capable you.
So, put your curiosity gloves on, flick fear on the ear and grab those errors no matter how obscure.
