const rectangle = (n) => {
    let star = ""
    for(let row=1 ; row<= n ; row++){
        for(let col=1 ; col<=n ; col++){
            star += "*"
        }
        star += "\n"
    }
    return star ; 
}


console.log(rectangle(7));