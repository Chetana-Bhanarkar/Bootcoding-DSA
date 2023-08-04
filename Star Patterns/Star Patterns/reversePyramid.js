const reversePyramid = (n) => {
    let star = "";
    for(let row=1; row<=n ; row++){
        for(let spc=1 ; spc<row ; spc++){
            star += " "
        }
        for(let col=1;col<=2*(n-row)-1;col++){
            star += "*"
        }
        star += "\n";
    }
    return star ; 
}


console.log(reversePyramid(10));