function containsUppercase(str) {
    str = str.split('');
    let count = 0
    for(let i=0 ; i<str.length ; i++){
        let word = str[i]
        if(word.toLocaleUpperCase() === word){
            count++
        }
        else{
            count--
        }; 
    }
    let capital = count === str.length ? true : false

    return capital
}
// return /^[A-Z]+$/.test(str);


console.log(containsUppercase('USA'));