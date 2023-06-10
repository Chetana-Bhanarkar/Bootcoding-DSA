abstract class Book{
    constructor(bookname:string){ }
    bookname():string{
        return `${this.bookname}`
    }

    abstract getReleaseDate():string ; 
}


class TextBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return `${this.releaseDate}`
    }
}
class AudioBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return `${this.releaseDate}`
    }
}
class EBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return `${this.releaseDate}`
    }
}


let tbook = new TextBook('Alchemist','10-July-1998') 
console.log(tbook);
