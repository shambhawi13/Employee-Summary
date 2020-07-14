// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

var Intern = function(school){
    this.school = school;
    this.getSchool = function(){
        return this.school;
    }
    this.getRole = function(){
        return this;
    }
}