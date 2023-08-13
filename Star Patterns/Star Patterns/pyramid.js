const pyramid = (n) => {
    let star = "";
        for(let row=1; row <=n ; row++){
            for(let spc=1;spc<=n-row ; spc++){
                star += " ";
            }
            for(let col=1;col<=row ; col++){
                star += "*"
            }
            for(let col=2;col<=row;col++){
                star+="*"
            }
            star += "\n"
        }
        return star ; 
}

console.log(pyramid(9));
