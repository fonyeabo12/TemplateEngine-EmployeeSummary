const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const util = require('util');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)




const team = [];
function employeeInfo() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select employee type:',
            name: 'name',
            choices: ['Manager', 'Engineer', 'Intern', 'Show Summary'],
        },
    ])
    .then(item => {
        if (item.name === 'Manager') {
            managerInfo();
        } else if (item.name === 'Engineer') {
            engineerInfo()
        } else if (item.name === 'Intern') {
            internInfo();
        } else if (item.name === 'Show Summary') {
            generateHTML(outputPath, render(team));
        };
    });
};
function managerInfo() {
    return inquirer.prompt([
        {
        
            message: "What is your name?",
            name: 'name'
        },
        {
            
            message: "What is your id?",
            name: 'id'
        },
        {
            
            message: "What is your email?",
            name: 'email'
        },
        {
            
            message: "What is your office number?",
            name: 'number'
        },
    ]).then(function(response) {
        let manager = new Manager(response.name, response.id, response.email, response.number)
        team.push(manager);
        employeeInfo();
    });
};
function engineerInfo() {
    return inquirer.prompt([
        {
            
            message: "what is your name?",
            name: "name"
        },
        {
            
            message: "What is your ID?",
            name: "ID"
        },
        {
           
            message: "What is your email?",
            name: "email"
        },
        {
            
            message: "What is your GitHub username",
            name: "GitHub",
        },
    ]).then(function(response) {
        let engineer = new Engineer(response.name, response.id, response.email, response.GitHub)
        team.push(engineer);
        employeeInfo();
    });
};
function internInfo() {
    return inquirer.prompt([
      {
        
        message: "what is your name?",
        name: "name"
      },
      {
        
        message: "What is your ID",
        name: "id",
      },
      {
        
        message: "What is your email?",
        name: "email"
      },
      {
        
        message: "What is the name of your school?",
        name: "school",
      },
    ]).then(function(answer) {
      let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
      team.push(intern);
      employeeInfo()
    })
  };
  function generateHTML(fileName, data) {
      fs.writeFile(fileName, data, "utf8", function (err) {
          if (err) {
              throw err;
          }
          console.log("Employee Summary");
      });
  };
  employeeInfo();




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
