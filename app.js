const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let memberSelected = [];
inquirer.prompt([{
    type: "input",
    name: "projectName",
    message: "Please enter the project name?",
    default: "Project Name"
}]).then(async function (projectName) {
    //let addEmployee = await(askToAddEmployee());
    //while(addEmployee){
        //memberSelected.push(await (promptEmployeeDetail()));
        //addEmployee = await(askToAddEmployee());
    //}

    askToAddEmployee();

});


function promptEmployeeDetail() {
    let employeeDetail = {};
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select the team member you want to add to project",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            name: "employeeName",
            message: "What's employee name?"
        },
        {
            name: "employeeEmail",
            message: "What's the employee email id?"
        },
        {
            name: "employeeId",
            message: "What's the employee id?"
        }
    ]).then((employee) => {
        let name = employee.employeeName;
        let role = employee.role;
        let email = employee.employeeEmail;
        let id = employee.employeeId;
        if (employee.role == 'Manager') {
            let moreDetails = inquirer.prompt([
                {
                    name: "officeNumber",
                    message: "Please provide your office number"
                }
            ]);
            let officeNumber = moreDetails.officeNumber;
            //name,id,email
            employeeDetail = new Manager(officeNumber, name, id, email, role)
            memberSelected.push(employeeDetail);
            askToAddEmployee();

        }
        else if (employee.role == 'Engineer') {
            let moreDetails = inquirer.prompt([{
                name: "github",
                message: "Provide github usename."
            }]);
            let github = moreDetails.github;
            employeeDetail = new Engineer(github, name, id, email, role);
            memberSelected.push(employeeDetail);
            askToAddEmployee();
        }
        else {
            let moreDetails = inquirer.prompt([{
                name: "school",
                message: "What's your school name?"
            }]);
            let school = moreDetails.school;
            employeeDetail = new Intern(school, name, id, email, role);
            memberSelected.push(employeeDetail);
            askToAddEmployee();
        }

        //return employeeDetail;
    });

}

function askToAddEmployee(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "addMember",
            message: "Do you want to add members to the team?",
            default: false
        }
    ]).then((add)=>{
        //return add.addMember;   
        if(add.addMember){
            promptEmployeeDetail();
        }
    });
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
