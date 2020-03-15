// 1. Understanding merge sort
// Given the following list of numbers 
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive 
// calls to mergesort?

// [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
// 1 => 
//      input: [21, 1, 26, 45, 29, 28, 2, 9] 
//      resulting lists: [21, 1, 26, 45] [29, 28, 2, 9] 
// 2 => 
//      input: [16, 49, 39, 27, 43, 34, 46, 40]
//      resulting lists: [16, 49, 39, 27] [43, 34, 46, 40]
// 3 => 
//      input: [21, 1, 26, 45]
//      resulting list: [21, 1] [26, 45]

// What is the resulting list that will be sorted after 16 recursive 
// calls to mergesort?

// [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
// 1, 2 => [21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
// 3, 4, 5, 6 => [21, 1, 26, 45] [29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]
// 7, 8, 9, 10, 11, 12, 13, 14 => [21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]
// 15, 16 => [21] [1]

// What are the first 2 lists to be merged?
// [21] [1]

// Which two lists would be merged on the 7th merge?
// first merge => [21] [1]
// second merge => [26] [45]
// third merge => [21, 1] [26, 45]
// fourth merge => [29] [28]
// fifth merge => [2] [9]
// sixth merge => [28, 29] [2, 9]
// seventh merge => [1, 21, 26, 45] [2, 9, 28, 29]