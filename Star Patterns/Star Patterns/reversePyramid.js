const reversePyramid = (n) => {
    let star = "";
    for(let row=1; row<=n ; row++){
        for(let spc=1 ; spc<row ; spc++){
            star += " "
        }
        star += "\n";
    }
    return star ; 
}


console.log(reversePyramid(4));