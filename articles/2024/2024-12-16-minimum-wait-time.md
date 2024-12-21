---
title: 'Minimum Waiting Time: A Greedy Algorithm Explained with Candy'
cover: candy.webp
date: 2024-12-16
tags:
  - Technical
  - Algorithms
  - Problem Solving
  - Continuous Learning
creditSource: GPT-4o
creditLink: https://chatgpt.com/
abstract:
---

Unhealthy life choices aside, let's imagine that you're a small kid standing in a candy store 🍬 and the candy is stacked wall to wall 🤤 ranging from different types of chocolates, hard candies, soft candies, marshmallows, licorice, and a whole lot more. You're with your best friends and you only have a bit of time before your parents drag you back home, potentially empty handed.

## The Challenge

In this less-than-optimal simplified hypothetical scenario, there is a ladder and one store assistant. Everyone wants different types of candy and is in a queue in the centre of the store. The child next-in-line will ask the assistant for candy and the assistant leaves from the centre to the place where the candy is stored, with or without the ladder, depending.

You close your eyes to visualize the problem. Soon, you will have your parents towering over you, shielding you from your sweet desires to take you home. You need to act fast. You need to be smart. You need to be... **greedy**.

## The Solution

You've got it! You've found that everyone knows what they want so you all line up for candy to be collected from one to the other side of the walls in the store. The store assistant will collect the candy in the order you all stand in line. This way, you minimize the time spent in the store and maximize the number of candy you can get. **Sorted**!

## The Algorithm

The algorithm is a greedy algorithm, always making the choice that looks best at the moment, without worrying about the bigger picture. It chooses the option that seems like the fastest, easiest, or most beneficial.

Let's say that there are 5 kids in the store. Based on the preferences for the requests, the store assistant would have to get on the ladder and spend an arbitrary time to get each kiddie's sweets. Example: 3 minutes for custard cookies, 2 minutes for chocolate licorice, 1 minute for marshmallows, 2 minutes for hazelnut chocolate and 6 minutes for gummy bears.

Now we have an array of 5 elements: `[ 3, 2, 1, 2, 6 ]`.

1. We are going to sort the array first. This is the greedy part of the algorithm. We sort the array in ascending order: `[ 1, 2, 2, 3, 6 ]` to let the fastest person go first. This keeps the total waiting time as small as possible.

1. Next, we iterate through the sorted array and calculate the waiting time for each kiddie.
   - Kiddie 1 waits 0 minutes.
   - Kiddie 2 waits 1 minute (time for Kiddie 1).
   - Kiddie 3 waits 1 + 2 = 3 minutes (time for Kiddies 1 and 2).
   - Kiddie 4 waits 1 + 2 + 2 = 5 minutes (time for Kiddies 1, 2, and 3).
   - Kiddie 5 waits 1 + 2 + 2 + 3 = 8 minutes (time for Kiddies 1, 2, 3, and 4).

## Code Implementation

```javascript
function minimumWaitingTime(times) {
    // Step 1: Sort the array in ascending order
    // The arrays are sorted in ascending order to
    // ensure that the smaller tasks are handled first.
    times.sort((a, b) => a - b);

    // Step 2: Calculate the total waiting time
    // As each task is handled, the cumulative
    // waiting time increases.
    let cumulativeTime = 0;
    // The cumulative times are added together to
    // compute the total waiting time.
    let totalWaitingTime = 0;

    for (let i = 0; i < times.length - 1; i++) {
        cumulativeTime += times[i];
        totalWaitingTime += cumulativeTime;
    }

    return totalWaitingTime;
}

// Example usage
const waitingTimes = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(waitingTimes)); // Output: 17
```

## Big O Notation

The time complexity of this algorithm is $O(n\ log\ n)$ due to the sorting step. The space complexity is $O(1)$ as the algorithm uses a constant amount of space.

## Conclusion

If you always grab the closest candy first, you’re being greedy—choosing the easiest option in the moment. Greedy algorithms work well for problems where making the best choice step-by-step actually leads to the best overall result. However, they don’t always work for every problem because sometimes the best solution requires thinking ahead or looking at the bigger picture.
