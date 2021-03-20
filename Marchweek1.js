

console.log(isRectangleOverlap([2,17,6,20],[3,8,6,20]));

var shortestToChar = function(s, c) {
    
    var i;
    var output = [];
    var count = 10000000000;
    for(i=0;i<s.length;i++){
        var current = s.charAt(i);
        if(current === c){
            output[i] = 0;
            count = 1;
        }
        else{
            output[i] = count;
            count++;
        }
    }
    var j;
    var count = -1;
    var size  = output.length-1;
    console.log(size);
    for(j= size;j>=0;j--){
        console.log(j);
        if(count > 0){
            if(output[j]>count){
                output[j] = count;
                count ++;
            }
        }
        if(output[j] === 0){
            count = 1;
            console.log("a");
        }
    }
    return output;
};

//98. Validate Binary Search Tree
var isValidBST = function(root) {
    
    return isValid(root,null,null);
};

var isValid = function(root,low,high){
    if(root == null){
        return true;
    }
     if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
            return false;
    }
     return isValid(root.right, root.val, high) && isValid(root.left, low, root.val);
}

//420. Strong Password Checker
var strongPasswordChecker = function(password) {
    
    if(password.length < 6){
        return 6-password.length;
    }

};


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

