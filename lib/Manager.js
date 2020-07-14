// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

var Manager = function(officeNumber){
    this.officeNumber = officeNumber;
    this.getRole = function(){
        return this;
    }
}