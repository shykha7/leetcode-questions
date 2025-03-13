/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0
    const unique = nums.filter((num) =>{
        if(nums.indexOf(num)==nums.lastIndexOf(num)){
            sum+=num
        }
    } )
    return sum
};