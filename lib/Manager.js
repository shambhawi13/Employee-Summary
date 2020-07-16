// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name,id,email,officeNumber,role="Manager"){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getRole(){
        return this.role;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;