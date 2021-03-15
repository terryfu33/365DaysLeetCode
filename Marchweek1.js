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

