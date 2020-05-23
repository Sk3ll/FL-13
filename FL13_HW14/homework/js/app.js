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
    const _studentsList = Symbol('studentsList');
    const _failedHomeworksLimit = Symbol('failedHomeworksLimit');

    this[_studentsList] = students;
    this[_failedHomeworksLimit] = failedLimit;
    let arr2 = []
    let arr3 = []
    this.addHomeworkResult = (homeworkResults) => {

        let subject;
        let arr = [];

        for (let i = 0; i < homeworkResults.results.length; i++) {
            subject = {
                'email': homeworkResults.results[i].email,
                'topic': homeworkResults.topic,
                'success': homeworkResults.results[i].success
            }
            arr.push(subject)

        }
        arr2.push(arr)

        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr2[i].length; j++) {
                if (arr2[i + 1] !== undefined) {
                    arr3[j] = [arr2[i][j], arr2[i + 1][j]];
                }
            }

        }

    }

    this.printStudentsList = () => {
        for (let i = 0; i < this[_studentsList].length; i++) {
            console.log(` Name: ${this[_studentsList][i].name} Email: ${this[_studentsList][i].email}`);
            console.log(arr3[i])
            //console.log([arr2[0][i], arr2[1][i]])
        }

    }
    this.printStudentsEligibleForTest = () => {
        let failedArr = []
        for (let i = 0; i < this[_studentsList].length; i++) {
            failedArr.push(0);
        }


        for (let i = 0; i < arr3.length; i++) {
            for (let j = 0; j < arr3[i].length; j++) {
                if (arr3[i][j].success === false) {
                    failedArr[i]++;
                }

            }
        }
        for (let i = 0; i < this[_studentsList].length; i++) {
            if (failedArr[i] < this[_failedHomeworksLimit]) {
                console.log(` Name: ${this[_studentsList][i].name} Email: ${this[_studentsList][i].email}`)
            }
        }
    }

}

// let lab = new FrontendLab(listOfStudents, 1);
// lab.addHomeworkResult(homeworkResults[0])
// lab.addHomeworkResult(homeworkResults[1])
// //lab.addHomeworkResult(homeworkResults[2])
// // lab.addHomeworkResult(homeworkResults[3])
// lab.printStudentsList()
// lab.printStudentsEligibleForTest()