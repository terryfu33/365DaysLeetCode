//287.Find the Duplicate Number
var findDuplicate = function(nums) {
    
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

