class Student {
    #country;

    constructor() {
        this.name = "himanshu";
        this.level = 101;
        this.#country = "India";
    }

    country() {
        console.log(this.#country);
    }

    static a = 10
    add(){
        console.log(Student.a+10)
    }

    sub(){
        console.log(Student.a-10);
        
    }
}

let s1 = new Student();
console.log(s1.country());    // himanshu
console.log(s1.level);   // 101
s1.country();            // India
s1.add();  //20
s1.sub();  //0