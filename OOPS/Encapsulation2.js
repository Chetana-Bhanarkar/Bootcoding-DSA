//school bag :- tiffin or books;
//Bouquet :- Flower or leaves ; 
//Class :- Students or teaching_Accessories;

class school{
    constructor()
    {
        let Students , teaching_Accessories;
    }

    getStudents(){
        return this.Students;
    }
    setStudents(Students){
        this.Students = Students;
    }
    getTeachingAccessories(){
        return this.teaching_Accessories;
    }
    setTeachingAccessories(teaching_Accessories){
        this.teaching_Accessories = teaching_Accessories;
    }

}

let schl = new school();
schl.setStudents(40);
schl.setTeachingAccessories("board");

console.log(schl.getTeachingAccessories(),schl.getStudents());


