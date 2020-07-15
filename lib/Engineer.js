// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(github){
        super();
        this.github = github ;
    }

    getGithub = function(){
        return this.github;
    }
    getRoles = function(){
        return this;
    }
}