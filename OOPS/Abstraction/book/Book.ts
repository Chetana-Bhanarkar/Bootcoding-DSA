export abstract class Book{
    protected bookname :string

    constructor(bookname:string){ 
        this.bookname = bookname
    }

    abstract getReleaseDate():string ; 

    getBookname():string{
        return `${this.bookname}`
    }
}






