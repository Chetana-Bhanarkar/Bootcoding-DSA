class persons{

    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    getfullname(){
        console.log("my fullname is " + this.firstname + " " + this.lastname + "and my age is " + this.age );
        
    }

}

const prsn = new persons("chetana" , "bhanarkar" , 22) ; 

prsn.getfullname();