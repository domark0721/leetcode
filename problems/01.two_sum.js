/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function a(nums, target) {
  for (let temp = 0; temp < nums.length; temp += 1) {
    for (let temp2 = 0; temp2 < nums.length; temp2 += 1) {
      if (temp !== temp2 && nums[temp] + nums[temp2] === target) {
        return [temp, temp2];
      }
    }
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15], 9));
