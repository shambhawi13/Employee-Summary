// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(officeNumber){
        super();
        this.officeNumber = officeNumber;
    }

    getRole = function(){
        return this;
    }
}