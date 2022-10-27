const {writeFile} = require('fs')
const promptInput = require('./src/promptInput')
const promptList = require('./src/promptList')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const employeesList = []


async function startPrompts()  {
    const name = await promptInput("What is the manager's name?", true)
    const iD = await promptInput("What is your employee ID?", true)
    const email = await promptInput("What is your email", true)
    const officeNumber = await promptInput("What is the office number?", true)
    const newManager = new Manager(name, iD, email, officeNumber);
    employeesList.push(newManager);
    continuePrompts()
}
async function continuePrompts() {
    const next = await promptList('What would you like to do next?', ['Create Intern', 'Create Engineer', "I'm done"])
    console.log(next)
    switch (next) {
        case 'Create Intern':
            internPrompts()
            break;
        case 'Create Engineer':
            engineerPrompts()
            break;
        case "I'm done":
            createHTML()
            break;
        default:
            console.error('Your switch statement is broken please check continue prompts')
    }
        
}


startPrompts();
async function internPrompts() {
    const name = await promptInput("What is the interns's name?", true)
    const iD = await promptInput("What is your employee ID?", true)
    const email = await promptInput("What is your email", true)
    const school = await promptInput("What school do you go to?", true)
    const newIntern = new Intern(name, email, iD, school);
    employeesList.push(newIntern);
    continuePrompts()
}
async function engineerPrompts() {
    const name = await promptInput("What is the engineer's name?", true)
    const iD = await promptInput("What is your employee ID?", true)
    const email = await promptInput("What is your email", true)
    const github = await promptInput("What is your github username?", true)
    const newEngineer = new Engineer(name, email, iD, github);
    employeesList.push(newEngineer);
    continuePrompts()
}

function createHTML() {
const html = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Team-Profile</title>
</head>
<body>
<div class="container-fluid bg-danger text-center text-white ">
<h1>My Team</h1>
</div>  
    <div class= "row justify-content-center">
   ${employeesList.map(employee => createCard(employee)).join('')} 
   </div>
</body>
</html>`
writeFile('index.html', html, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('File Successfully written!')
    }
})
}
function createCard(employee) {
    let extraProperty;
    switch (employee.getRole()) {
        case 'Intern':
            extraProperty = `<li class="list-group-item">School: ${employee.school}</li>`
            break;
        case 'Engineer':
            extraProperty = `<a href="https://www.github.com/${employee.github}"><li class="list-group-item">Github: https://www.github.com/${employee.github}</li></a>`
            break;
        case "Manager":
            extraProperty = `<li class="list-group-item">School: ${employee.officeNumber}</li>`
            break;
        default:
            console.error('fix switch statement in render HTML')
        }
    const card = `
    <div class="card col-4" style="width: 18rem;">
  <div class="card-body bg-primary text-white">
    <h5 class="card-title">${employee.name}</h5>
    <p class="card-text">${employee.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
   <a href="mailto:${employee.email}"><li class="list-group-item">Email: ${employee.email}</li></a>
    ${extraProperty}
  </ul>
</div>`
return card
}