/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
// const output={};
// for(let i=0;i<nums.length;i++)
// {
// const num= nums[i];
// if(output[num])
// {
//     return true;
// }
// else 
// {
//     output[num]=1;
// }
// }
// return false;
    
// };

var containsDuplicate = function(nums) {
const seen=new Set();
for(let num of nums)
{
if(seen.has(num))
{
    return true;
}
seen.add(num);
}
return false;
    
};


