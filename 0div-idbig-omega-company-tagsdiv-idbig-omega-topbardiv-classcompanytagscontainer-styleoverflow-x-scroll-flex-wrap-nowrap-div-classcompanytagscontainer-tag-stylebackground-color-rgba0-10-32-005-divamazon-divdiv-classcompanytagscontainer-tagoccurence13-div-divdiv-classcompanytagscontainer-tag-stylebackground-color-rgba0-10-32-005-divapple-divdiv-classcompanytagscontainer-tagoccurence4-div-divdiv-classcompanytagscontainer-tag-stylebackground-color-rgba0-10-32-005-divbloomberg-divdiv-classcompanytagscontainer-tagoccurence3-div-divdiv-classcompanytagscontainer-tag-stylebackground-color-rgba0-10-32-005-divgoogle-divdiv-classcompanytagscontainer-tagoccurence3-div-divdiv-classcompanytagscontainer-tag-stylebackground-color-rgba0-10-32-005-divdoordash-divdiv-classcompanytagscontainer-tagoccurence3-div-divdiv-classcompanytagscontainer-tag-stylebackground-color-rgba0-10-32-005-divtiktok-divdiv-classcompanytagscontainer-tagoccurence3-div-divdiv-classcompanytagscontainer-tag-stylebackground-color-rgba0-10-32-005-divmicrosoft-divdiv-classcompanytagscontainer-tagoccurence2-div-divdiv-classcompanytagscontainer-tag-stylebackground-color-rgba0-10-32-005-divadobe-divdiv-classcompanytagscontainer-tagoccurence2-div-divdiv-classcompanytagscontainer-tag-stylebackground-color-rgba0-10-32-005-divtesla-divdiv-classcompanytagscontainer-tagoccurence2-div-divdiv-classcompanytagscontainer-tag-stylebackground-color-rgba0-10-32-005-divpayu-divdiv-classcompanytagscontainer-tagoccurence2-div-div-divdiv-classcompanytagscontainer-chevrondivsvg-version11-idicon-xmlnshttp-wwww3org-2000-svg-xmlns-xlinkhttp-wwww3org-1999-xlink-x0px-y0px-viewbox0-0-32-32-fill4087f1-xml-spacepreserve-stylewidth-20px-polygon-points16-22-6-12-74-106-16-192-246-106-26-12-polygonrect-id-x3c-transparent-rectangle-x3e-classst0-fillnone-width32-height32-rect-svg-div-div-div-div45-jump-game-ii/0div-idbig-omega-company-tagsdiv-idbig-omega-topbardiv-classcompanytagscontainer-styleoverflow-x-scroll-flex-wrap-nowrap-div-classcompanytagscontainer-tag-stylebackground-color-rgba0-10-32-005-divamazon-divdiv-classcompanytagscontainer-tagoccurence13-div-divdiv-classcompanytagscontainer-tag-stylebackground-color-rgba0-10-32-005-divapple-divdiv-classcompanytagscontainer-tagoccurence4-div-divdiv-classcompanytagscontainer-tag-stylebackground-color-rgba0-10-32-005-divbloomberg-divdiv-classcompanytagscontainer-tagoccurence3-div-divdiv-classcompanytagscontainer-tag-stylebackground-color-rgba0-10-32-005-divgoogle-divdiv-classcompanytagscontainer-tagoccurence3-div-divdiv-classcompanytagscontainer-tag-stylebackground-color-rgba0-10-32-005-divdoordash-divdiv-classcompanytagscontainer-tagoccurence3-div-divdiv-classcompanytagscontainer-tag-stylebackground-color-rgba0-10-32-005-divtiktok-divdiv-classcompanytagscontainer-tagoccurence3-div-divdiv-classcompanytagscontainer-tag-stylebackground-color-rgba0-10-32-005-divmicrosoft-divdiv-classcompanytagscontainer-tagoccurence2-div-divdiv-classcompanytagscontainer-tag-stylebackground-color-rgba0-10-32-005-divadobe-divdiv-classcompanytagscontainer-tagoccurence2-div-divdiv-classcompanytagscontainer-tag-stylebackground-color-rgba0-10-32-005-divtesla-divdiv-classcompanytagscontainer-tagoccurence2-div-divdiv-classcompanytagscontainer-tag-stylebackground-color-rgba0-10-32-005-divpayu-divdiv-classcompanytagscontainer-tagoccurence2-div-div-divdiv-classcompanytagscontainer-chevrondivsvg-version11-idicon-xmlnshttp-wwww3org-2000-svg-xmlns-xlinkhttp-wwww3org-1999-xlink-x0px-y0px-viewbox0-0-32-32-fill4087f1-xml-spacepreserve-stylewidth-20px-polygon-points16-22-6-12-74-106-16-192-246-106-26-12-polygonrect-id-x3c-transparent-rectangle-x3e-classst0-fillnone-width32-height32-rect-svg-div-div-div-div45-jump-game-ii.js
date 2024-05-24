/**
 * @param {number[]} nums
 * @return {number}
 */
//we will take the first element and then see all the jumps(jump to first, second or third) it could make and which one would be the farthest and based on the farthest, we will take the decision of which path we will take and increase the number of jumps, we will follow this until we reach the last element.the eventual farthest would be the current to show where we've reached.
var jump = function(nums) {
    let jumps=0;
    let farthest=0;
    let current=0;
    for(let i=0;i<nums.length-1;i++)
        {
            farthest=Math.max(farthest,nums[i]+i);
            if(i==current)
                {
                    current=farthest;
                    jumps++;
                }
        }
    return jumps;
};