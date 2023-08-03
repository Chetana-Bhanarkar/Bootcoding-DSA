const leftTriangle = (n) => {
    let star = ""
    for(let i=1 ; i<=n ; i++){
        for(let col=1 ; col <= i ; col++){
            star += "*"
        }
        star += '\n'
    }
    return star ; 
}


console.log(leftTriangle(5));