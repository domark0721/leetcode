// one-pass hash table
// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15], 9));
