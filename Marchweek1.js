//4. Median of two Sorted Arrays
var findMedianSortedArrays = function(nums1, nums2) {

    var nums = [...nums1, ...nums2];
    nums.sort(function(a, b){return a - b});
    console.log(nums);
    if(nums.length ===1){
        return nums[0];
    }
    if(nums.length %2 != 0){
        var half = nums.length +1 ;
        half = half/2;
       
        return nums[half-1];
    }
    else{
        
        var half = nums.length/2;
        
        var out = nums[half]+nums[half-1];
        
        return out/2;
    }
    
};

//287.Find the Duplicate Number
var findDuplicate = function(nums) {
    nums.sort(function(a, b){return a - b});
    console.log(nums);
    var size = nums.length;
    var i;
    var current;
    for(i = 0;i<size;i++){
        current = nums[i];
        
        if(i === 0){
            continue;
        }
        else if(i < size - 1){
            if(current === nums[i-1]){
                return current;
            }
            if(current === nums[i+1]){
                return current;
            }
        }
        else{
            return current;
        }
    }
    return 0;
};

//286.Missing Number
var missingNumber = function(nums) {
    
    nums.sort(function(a, b){return a - b});
    console.log(nums);
    var i;
    var size = nums.length;
    var expected = 0;
    for(i = 0;i<size;i++){
        if(expected === nums[i]){
            expected ++;
            continue;
        }
        else{
            return expected;
        }
    }
    
    return size;
};

