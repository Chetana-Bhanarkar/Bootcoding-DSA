var reverse = function(num){
        let reversed_num = 0;
        while (num !== 0) {
          reversed_num = reversed_num * 10 + num % 10;
          num = Math.floor(num / 10);
        }
        return reversed_num;
};


console.log ((reverse(2347)));
