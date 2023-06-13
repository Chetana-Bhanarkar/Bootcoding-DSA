import AudioBook from "./audiobook";
import  EBook from "./ebook";
import TextBook from "./textbook";



let tbook = new TextBook('Alchemist','10-July-1998') 
console.log(tbook.getReleaseDate());

let Abook = new AudioBook('Alchemist','19-April-2001')
console.log(Abook.getReleaseDate());

let Ebook = new EBook('Alchemist','18-Dec-2010')
console.log(Ebook.getReleaseDate());
