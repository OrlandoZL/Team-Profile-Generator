const inquirer = require('inquirer');
const fs =  require('fs');


function startUp() {
    inquirer.prompt([
        {
            name: 'startUp',
            message: 'Would you like to start a team?',
            type: 'confirm',
        },
    ])
}

function addManager() {
    inquirer.prompt([
        {
            name: 'name',
            message: "Enter the Manager's name:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add a Manager's name!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Manager's id:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add a Manager's id!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Manager's office number:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add a Manager's office number!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Manager's email address:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add a Manager's email address!");
                    return false;
                }
            },
        },
        {
            name: 'addEmployee',
            message: "Want to add another employee?",
            type: 'confirm'
        },
    ])
    
}