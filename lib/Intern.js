// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(school,name,id,email,role){
        super(name,id,email);
        this.school = school;
        this.role = role;
    }
    getSchool = function(){
        return this.school;
    }
    getRole = function(){
        return this.role;
    }
}