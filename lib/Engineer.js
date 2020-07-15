// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(github,name,id,email,role){
        super(name,id,email);
        this.github = github ;
        this.role = role;
    }

    getGithub = function(){
        return this.github;
    }
    getRoles = function(){
        return this.role;
    }
}

module.exports = Engineer;