import { Book } from "./Book";

class AudioBook extends Book{
    constructor(bookname:string , private releaseDate : string) {
        super(bookname); 
        
    }
    getReleaseDate(): string {
        return "AudioBook " + this.bookname + " released on " + this.releaseDate ; 
    }
}

export default AudioBook ; 