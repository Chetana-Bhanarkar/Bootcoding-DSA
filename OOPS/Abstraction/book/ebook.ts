import { Book } from "./Book";

class EBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname);
    }
    getReleaseDate(): string {
        return "EBook " + this.bookname + " released on " + this.releaseDate ; 
    }
}

export default EBook ; 