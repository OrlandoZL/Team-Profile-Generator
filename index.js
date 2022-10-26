const inquirer = require('inquirer');
const fs =  require('fs');

const workGroup = [];

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

function addEngineer() {
    inquirer.prompt([
        {
            name: 'name',
            message: "Enter the Engineer's name:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add the Engineer's name!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Engineer's id:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add an Engineer's id!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Engineer's office number:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add the Engineer's office number!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Engineer's email address:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add a Engineer's email address!");
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

function addIntern() {
    inquirer.prompt([
        {
            name: 'name',
            message: "Enter the Intern's name:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add the Intern's name!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Intern's id:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add an Intern's id!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Intern's office number:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add the Intern's office number!");
                    return false;
                }
            },
        },
        {
            name: 'name',
            message: "Enter the Intern's email address:",
            type: 'input',
            validate: (input) => {
                if (input){
                    return true;
                }
                else {
                    console.log("Please add a Intern's email address!");
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

startUp();