// 1295. Find Numbers with Even Number of Digits


var findNumbers = function(nums) {
    let count = 0 ; 
    nums.forEach(num =>{
        let digit = 0 ;
        while(Math.floor(num)!=0){
            digit++;
            num = num/10;

        }

        if(digit % 2 == 0){
            count++
        }
    })
    return count;
}
        


console.log(findNumbers([555,901,482,1771]));