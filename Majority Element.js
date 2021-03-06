// 169. Majority Element

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var map={};
    
    for(var i=0;i<nums.length;i++){
        if(map[nums[i]])
            map[nums[i]]++;
        else
            map[nums[i]]=1;
    }
    for(var key in map){
        if(map[key] > (nums.length/2))
             return parseInt(key) ;
    }
};