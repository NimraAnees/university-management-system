"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    id;
    courses = [];
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }
    registerForcourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assigncourses(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    Instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(instructor) {
        this.Instructor = instructor;
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("Nimra", 20, 1234);
const std2 = new Student("Rafia", 23, 1235);
const instructor1 = new Instructor("Hamzah", 30, 300000);
const instructor2 = new Instructor("Ali", 25, 500000);
const course1 = new Course(1, "Blockchain");
const course2 = new Course(2, "Metaverse");
const d1 = new Department("Computer science");
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
console.log(std1.getName()); //Output Nimra
console.log(std1.courses); //Output [course]
console.log(instructor1.courses); //Output [course]
console.log(d1.courses); //Output [course, course]
