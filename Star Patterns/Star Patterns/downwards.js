const downwards = (n) => {
    let star = ""
    for(let row=0; row <=n ; row++){
        for(let col=1; col<= n-row ; col++){
            star += "*"
        }
        star += "\n"
    }
    return star ; 
}

console.log(downwards(7));