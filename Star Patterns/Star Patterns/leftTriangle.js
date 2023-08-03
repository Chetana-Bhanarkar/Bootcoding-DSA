const leftTrrowangle = (n) => {
    let star = ""
    for(let row=1 ; row<=n ; row++){
        for(let col=1 ; col <= row ; col++){
            star += "*"
        }
        star += '\n'
    }
    return star ; 
}


console.log(leftTrrowangle(7));