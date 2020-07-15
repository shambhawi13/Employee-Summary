// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(school){
        super();
        this.school = school;
    }
    getSchool = function(){
        return this.school;
    }
    getRole = function(){
        return this;
    }
}