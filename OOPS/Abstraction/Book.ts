abstract class Book{
    protected bookname :string

    constructor(bookname:string){ 
        this.bookname = bookname
    }

    abstract getReleaseDate():string ; 

    getBookname():string{
        return `${this.bookname}`
    }
}

class TextBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return "TextBook " + this.bookname + " released on " + this.releaseDate ; 
    }
}

class AudioBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return "AudioBook " + this.bookname + " released on " + this.releaseDate ; 
    }
}

class EBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return "EBook " + this.bookname + " released on " + this.releaseDate ; 
    }
}


let tbook = new TextBook('Alchemist','10-July-1998') 
console.log(tbook.getReleaseDate());

let Abook = new AudioBook('Alchemist','19-April-2001')
console.log(Abook.getReleaseDate());

let Ebook = new EBook('Alchemist','18-Dec-2010')
console.log(Ebook.getReleaseDate());



