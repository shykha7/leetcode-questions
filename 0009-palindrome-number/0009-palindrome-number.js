/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const  toStr = x.toString() 
  const reversingX =  toStr.split('').reverse().join('')
  if(toStr === reversingX){
    return true
  }else{
    return false
  }
};