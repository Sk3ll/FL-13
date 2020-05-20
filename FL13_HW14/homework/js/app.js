// Your code goes here
'use strict';

//============ Task_1 ============ 


function Student(name, email) {
    const _name = Symbol('name');
    const _email = Symbol('email');


    this[_name] = name;
    this[_email] = email;
    this._topic;
    this._success;

    this.getName = () => {
        return this[_name];
    }
    this.getEmail = () => {
        return this[_email];
    }
    this.addHomeworkResult = (topic, success) => {
        this._topic = String(topic);
        this._success = Boolean(success);
    }
    this.getHomeworkResults = () => {
        return [{
            topic: this._topic,
            success: this._success
        }]
    }
}

// const student = new Student('John', 'john@gmail.com');
// console.log(student.getName());
// console.log(student.getEmail());
// console.log(student.addHomeworkResult('HTML', true));
// console.log(student.getHomeworkResults())

//============ Task_2 ============ 


function FrontendLab(students, failedLimit) {
    this._studentsList = students;
    this._failedHomeworksLimit = failedLimit;
    this._homeworkResult = [];

    this.addHomeworkResult = (homeworkResults)=> {
        this._homeworkResult.push(homeworkResults);
        //console.log(this._homeworkResult[0].results)
    }

    this.printStudentsList = () => {
        for (let i = 0; i < this._failedHomeworksLimit; i++){
            console.log(` Name: ${this._studentsList[i].name} Email: ${this._studentsList[i].email}`);
            console.log([this._homeworkResult[i].topic, this._homeworkResult[i]])
        }
        
    }
}

let lab = new FrontendLab(listOfStudents, 2);
lab.addHomeworkResult(homeworkResults[0])
lab.addHomeworkResult(homeworkResults[1])
lab.printStudentsList()
