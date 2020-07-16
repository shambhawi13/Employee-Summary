// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name,id,email,school,role="Intern"){
        super(name,id,email);
        this.school = school;
        this.role = role;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Intern;