// Demonstrate Abstraction on Book as parent with TextBook, AudioBook and EBook as childs

abstract class Book{
    constructor(private bookname:string){};
     getBookname():string{
        return `${this.bookname}`
     } ; 
     abstract getReleaseDate():string;     
}   


class TextBook extends Book{
    constructor(bookname:string , private releaseDate:string){
        super(bookname)
    }
    getReleaseDate(): string {
        return `${ this.releaseDate}`
    }
}

class AudioBook extends Book{
    constructor(bookname:string , private releaseDate:string){
        super(bookname)
    };

    getReleaseDate(): string {
        return `${this.releaseDate}`
    }
}

class EBook extends Book{
    constructor(bookname:string , private releaseDate : string){
        super(bookname)
    }
    getReleaseDate(): string {
        return `${this.releaseDate}`
    }
}


let t = new TextBook('Alchemish','10-July-1998')
console.log(t);
