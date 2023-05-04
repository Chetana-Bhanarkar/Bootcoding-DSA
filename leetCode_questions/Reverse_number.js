var reverse = function(num){
        if(num < 0 ){
          let reversed_num = 0;
        while (num !== 0) {
          reversed_num = reversed_num * 10 + num % 10;
          num = Math.floor(num / 10);
        }
        return (-(-(reverse(num))));
        }
        else{
          let reversed_num = 0;
        while (num !== 0) {
          reversed_num = reversed_num * 10 + num % 10;
          num = Math.floor(num / 10);
        }
        return ((reverse(num)));
        }
};


console.log (reverse(2347));