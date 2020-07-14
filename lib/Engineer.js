// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee.js');

var Engineer = function(github){
    this.github = github ;
    this.getGithub = function(){
        return this.github;
    }
    this.getRoles = function(){
        return this;
    }
}