/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let t = 0; t < nums.length; t += 1) {
    for (let t2 = 0; t2 < nums.length; t2 += 1) {
      if (t !== t2 && nums[t] + nums[t2] === target) {
        return [t, t2];
      }
    }
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15], 9));
