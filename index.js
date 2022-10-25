const {prompt: myPrompt} = require('inquirer')
const {writeFile} = require('fs')


myPrompt([
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'man-name',
    },
    {
        type: "input",
        message: "What is your employee ID?",
        name: "ID"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "number",
    },
    {
        type: 'input',
        message: "What is your first employees's name?",
        name: 'name1',
    },
    {
        type: 'input',
        message: "What is your first employee's ID number?",
        name: 'number1',
    },
    {
      type: 'list',
      message: 'What role does this employee have?',
      name: 'role',
      choices: ['Engineer 🥽', 'intern 🎓'],
    }
])
if (answers.choices === 'Engineer 🥽') {
    myPrompt([
        {
            type: "input",
            message: "What is your employee's GitHub Username",
            name: "emp-name1",
        },
        {
            type: 'input',
            message: "What is your first employee's email?",
            name: "email1"
        }

    ])
}