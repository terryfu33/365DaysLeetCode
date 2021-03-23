My personal goal to complete at least one LeetCode Coding Challenge a day, for a year!


669. Trim a Binary Search Tree
    Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

    Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.

231. Power of Two

    Given an integer n, return true if it is a power of two. Otherwise, return false.
    An integer n is a power of two, if there exists an integer x such that n == 2x.


448. Find All Numbers Disappeared in an Array

    Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
    Find all the elements of [1, n] inclusive that do not appear in this array.
    Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

1487. Making File Names Unique

    Given an array of strings names of size n. You will create n folders in your file system such that, at the ith minute, you will create a folder with the name names[i].
    Since two files cannot have the same name, if you enter a folder name which is previously used, the system will have a suffix addition to its name in the form of (k), where, k is the smallest positive integer such that the obtained name remains unique.
    Return an array of strings of length n where ans[i] is the actual name the system will assign to the ith folder when you create it.

    Memory Usage: 27 MB, less than 79.84% of Python3 online submissions for Making File Names Unique.

179. Largest Number

    Given a list of non-negative integers nums, arrange them such that they form the largest number.
    Note: The result may be very large, so you need to return a string instead of an integer.
    
    Runtime: 72 ms, faster than 99.15% of JavaScript online submissions for Largest Number.
    Memory Usage: 40.7 MB, less than 54.93% of JavaScript online submissions for Largest Number.

910. Smallest Range II

    Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).
    After this process, we have some array B.
    Return the smallest possible difference between the maximum value of B and the minimum value of B.

  
    
1769. Minimum Number of Operations to Move All Balls to Each Box

    You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
    In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one         ball in some boxes.
    Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
    Each answer[i] is calculated considering the initial state of the boxes.

    Runtime: 88 ms, faster than 100.00% 
    Memory Usage: 42.6 MB, less than 100.00% 

151. Reverse Words in a String

    Given an input string s, reverse the order of the words.
    A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
    Return a string of the words in reverse order concatenated by a single space.
    Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

    Runtime: 32 ms, faster than 74.08% 
    Memory Usage: 14.5 MB, less than 43.34% 

98. Validate Binary Search Tree

    Given the root of a binary tree, determine if it is a valid binary search tree (BST).

    Runtime: 88 ms, faster than 78.93% 
    Memory Usage: 42.5 MB, less than 76.13% 


4. Median of Two Sorted Arrays 

    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    Example:
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

268. Missing Number  

    Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

    Example:
    Input: nums = [3,0,1]
    Output: 2
    Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

287. Find the Duplicate Number  

    Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.There is only one repeated number in nums, return this repeated number.

    Example:
    Input: nums = [1,3,4,2,2]
    Output: 2
