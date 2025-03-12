/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    let set1= new Set(nums1)
    let set2 = new Set(nums2)
    const difference1 = [...set1].filter(element => !set2.has(element))
    const difference2 = [...set2].filter(element => !set1.has(element))
    
    return [difference1,difference2]
};