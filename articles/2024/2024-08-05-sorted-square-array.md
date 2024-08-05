---
title: Interview question: The sorted square array algorithm
cover: bernoulli-numbers.jpg
creditSource: Wikipedia
date: 2024-08-05
creditLink: https://en.wikipedia.org/wiki/Algorithm#/media/File:Diagram_for_the_computation_of_Bernoulli_numbers.jpg
tags:
  - Technical
  - Algorithms
  - Arrays
  - Coding Challenges
  - Interviews
---

I was tasked to write an O(n) time and O(n) space complexity - where _n_ is the length of the given input array - algorithm to solve the following problem:

**You are given a few non-empty arrays of integers and they are always sorted in ascending order. Return a new array of the same length containing the squares of the original integers also sorted in ascending order.**

For example, given the array `[-7, -3, -1, 4, 8, 12]`, the output should be `[1, 9, 16, 49, 64, 144]`.

## Brute-force solution

My initial solution was to iterate over the input array, square each number, and create a new array. Then, I sorted the new array and returned it. This was not the optimal solution.

```javascript
return array
    .map(i => i * i)
    .sort((a, b) => a - b)
```

### Time Complexity

The `map` function iterates through each element of the array exactly once, applying the squaring operation. This operation is O(n), where _n_ is the number of elements in the array.

However, the `sort` function in JavaScript - which typically uses a hybrid sorting algorithm - has an average time complexity of O(n log n).

Combining these two steps results in Time Complexity of

```plaintext
O(n) + O(n log n) = O(n log n)
```

### Space Complexity

The space complexity is O(n) because we are creating a new array of the same length as the input array.

The `map` function only creates an array of the same size so O(n) additional space is required.

The `sort` requires O(n) additional space in the worst case (based on JavaScript's Timsort).

Combining these two steps, the overall space complexity is:

```
O(n) + O(n) = O(n)
```

## Expected Optimal Solution

By using two pointers, we can solve this problem in O(n) time complexity and O(n) space complexity by keeping track of the smallest and larges values.

- Traverse the array from right to left.
- Compare the absolute values of the smallest and largest element values.
- Square the larger absolute value and place the square at the end of the output array.
- Fill the array from right to left.
- Move the pointers and repeating each step until finished.

```javascript

const sortedSquares = new Array(array.length).fill(0);
let leftPointer = 0;
let rightPointer = array.length - 1;

for (let i = array.length - 1; i >= 0; i--) {
  const leftAbs = Math.abs(array[leftPointer]);
  const rightAbs = Math.abs(array[rightPointer]);

  if (leftAbs > rightAbs) {
    leftPointer += 1;
    sortedSquares[i] = leftAbs * leftAbs;
  } else {
    rightPointer -= 1;
    sortedSquares[i] = rightAbs * rightAbs;
  }
}
```

This approach ensures an O(n) time complexity since each element is processed once. O(n) remains the space complexity since we are still creating a new array of the same length as the input array.

There are no nested loops or redundant comparisons, ensuring that the overall complexity remains linear. The additional space used is for this output array, which is necessary to store the squared values. There is no excessive use of extra space beyond what's required for the output.

## Interesting Observations

- The `sort` function in JavaScript uses the Timsort algorithm, which is a hybrid sorting algorithm derived from merge sort and insertion sort.
- The array is already sorted but it includes both negative and positive numbers. When squared, all numbers are positive and the order of the array is disrupted. By comparing the absolute values of the smallest and largest elements, we can determine the order of the squared values.
- The **two-pointer technique** uses the left and right pointers which start from the beginning of the array moving rightwards and the end of the array moving leftwards.
- This technique efficiently scans and compares values from both ends, leveraging the fact that the largest squared value must come from either the largest positive or the largest absolute negative number.
- By placing the largest squared values at the end of the result array and working backwards, we avoid the need for additional shifts or reordering. This ensure s a clean O(n) complexity.
- This approach showcases the elegance of the algorithm design where understanding the problem's properties (sorted input, absolute values) and applying the right technique (two-pointer) can lead to an optimal solution - both simple and highly efficient.
- It avoids unnecessary computations and leverages direct comparisons, making it a beautify example of optimal algorithmic problem-solving.

## Applicable Scenarios

- **Signal processing**: A field of engineering and applied mathematics that focuses on the analysis, modification, and synthetics of signals. They are functions that convey information about phenomena, and they come in various forms, such as electrical, audio, visual, biological, etc. In this application, you might need to square the amplitude values of a signal (which could be positive or negative) and then sort them for further analysis or visualization.
- **Financial data analysis**: When analyzing financial data, such as stock price changes, which can be positive or negative. Squaring these changes (to analyze volatility or variance) and sorting them efficiently can be useful for various analytical models.
- **Physics simulations**: In simulations that involve quantities that can have both positive and negative values (like velocity), squaring these values to calculate kinetic energy or other derived quantities and sorting them efficiently is often required.
- **Data normalization**: In machine learning preprocessing steps, where data normalization might involve squaring values (e.g., L2 normalization) and then sorting them for feature scaling or other transformations.
- **Square distances in geometry**: Calculating squared distances from a reference point in a multi-dimensional space and then sorting these distances can be efficiently done using this approach.
- **Optimized search algorithms**: In search algorithms that involve transformed data, such as nearest neighbor search in a squared distance metric space.

## Unsuitable Scenarios

- **Unsorted input**: If the input array is not sorted, this approach would not work. The two-pointer technique relies on the sorted nature of the input to make efficient comparisons.
- **Non-numeric data**: If the input data is not numeric, this approach would not be applicable. The algorithm relies on the ability to square the values and compare them based on their absolute magnitudes.
- **In-place sorting**: If you are working in a memory-constrained environment where in-place sorting is required (no extra space for another array), this method may not be suitable.
- **Large data sets with low memory**: If you have a massive array and very limited memory, you might prefer an in-place sorting algorithm that uses less auxiliary space.

## Conclusion

While the two-pointer sorting approach is powerful for specific cases like sorting the squares of a sorted array, it is not a one-size-fits-all solution. Understanding the limitations and the context in which it can be applied is crucial for choosing the right algorithm for a given problem. For more complex, unsorted, multi-dimensional, or non-numeric data, other sorting algorithms and techniques may be more appropriate.

Examples of sorting algorithms include:

- Bubble sort
- Selection sort
- Insertion sort
- Merge sort
- Quick sort
- Heap sort
- Counting sort
- Radix sort
- Bucket sort
- TimSort
- Shell sort

Choosing the right sorting algorithm depends on the specific requirements of your application, such as the size of the data, whether stability is important, memory constraints, and the nature of the data itself.

| Scenario                                    | Algorithms                              |
|---------------------------------------------|-----------------------------------------|
| Small Datasets or Nearly Sorted Data        | Insertion Sort, Bubble Sort, Selection Sort |
| Large Datasets with Stability Requirement   | Merge Sort, TimSort                     |
| General Purpose with Good Average-Case Performance | QuickSort, TimSort                       |
| In-Place Sorting with Guaranteed Performance | Heap Sort, Shell Sort                   |
| Specialized Numeric Data                    | Counting Sort, Radix Sort, Bucket Sort  |


## Resources

- [How JavaScript sorts? TimSort algorithm](https://dev.to/bekmurzintimur/how-arrayprototypesort-works-3kcn)



