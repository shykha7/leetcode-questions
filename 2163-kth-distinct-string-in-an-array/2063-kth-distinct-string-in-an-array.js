/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const unique = arr.filter((a)=>arr.indexOf(a)==arr.lastIndexOf(a))

    if(unique.length<k){
        return ""
    }else{
       return unique[k-1]
    }
};
