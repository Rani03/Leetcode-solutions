/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
//here the array might have dublicates.
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true; // Found the target element then return true instead of the index.
    }
      //if we have dublicates (this portion is extra from the question number 33)
      if(nums[left]===nums[mid] && nums[mid]===nums[right])
          {
              left++;
              right--;
          }
      

   else if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (target >= nums[left] && target < nums[mid]) {
        // Target lies in the left half
        right = mid - 1;
      } else {
        // Target lies in the right half
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > nums[mid] && target <= nums[right]) {
        // Target lies in the right half
        left = mid + 1;
      } else {
        // Target lies in the left half
        right = mid - 1;
      }
    }
  }

  return false; // Target not found
   
    
};