const Employee = require("./Employee.js")
class Engineer extends Employee{

    constructor(name, email, id, github){
            super (name, email, id);
            if (typeof github !== "string" || !github.trim().length) {
                throw new Error("expected parameter 'github' to be a non-empty string");
            }
            this.github = github;
        }
        getGithub() {
            return `https://www.github.com/${this.github}`;
        }
        getRole() {
            return 'Engineer';
        }
    
}

module.exports = Engineer;


