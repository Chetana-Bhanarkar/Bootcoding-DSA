import { Book } from "./Book";

class TextBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return "TextBook " + this.bookname + " released on " + this.releaseDate ; 
    }
}


export default TextBook ; 