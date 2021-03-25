var heightChecker = function(heights) {
    var copy = [...heights];
    copy.sort(function(a, b){return a - b});
    var output = 0;
    for(var i= 0;i<copy.length;i++){
        if(copy[i] != heights[i]){
            output++;
        }
    }
    console.log(copy);
    console.log(heights);
    return output;
    
};

var isPowerOfTwo = function(n) {
    
    var count  = 0;
    var current = 0;
    while(current <= n){
        current = Math.pow(2,count);
        if(current==n){
            return true;
            
        }
        count++;
    }
    return false;
};

var findDisappearedNumbers = function(nums) {
    var result = [];
    for (var i = 0;i<nums.length;i++) {
         var index = Math.abs(nums[i])-1;
         if (nums[index] > 0) {
             nums[index] = -nums[index];
         }
     }

     for (var i = 0; i < nums.length; i++) {
         if (nums[i] > 0) {
             result.push(i+1);
         }
     }
     
     return result;
};


var largestNumber = function(nums) {
    let out = "";
    nums.sort(comparator);
    for (const num of nums) {
        out += num;
    }
    return out == 0 ? "0" : output;
};

var comparator = function(a, b) {
    const s1 = "" + a + b,
        s2 = "" + b + a;
    return s2 - s1;
};



var smallestRangeII = function(A, K) {

    A.sort(function(a, b){return a - b});
    var ans = A[A.length-1] - A[0];

    for (var i = 0; i < A.length - 1; ++i) {
        var a = A[i], b = A[i+1];
        var high = Math.max(A[A.length-1] - K, a + K);
        var low = Math.min(A[0] + K, b - K);
        ans = Math.min(ans, high - low);
    }
    return ans;
};

var minOperations = function(boxes) {
    var output = [];
    var sum = 0;
    var afterN = 0;
    var prevN = 0;
    for(var i = 0;i<boxes.length;i++){        
        
        if(boxes[i]== 1){                
            sum+= Math.abs(i);
            afterN ++;
        }
        
        output[0] = sum;
    }
    for(var j = 1;j<boxes.length;j++){
        if(boxes[j-1] === "1"){
            prevN += 1;
            afterN -= 1;
        }
        sum = sum-afterN+prevN;
        output[j] = sum;
    }
    return output;
};

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

