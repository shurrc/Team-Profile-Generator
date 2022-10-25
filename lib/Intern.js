const Employee = require("./Employee.js")
class Intern extends Employee{

    constructor(name, email, id, school){
            super (name, email, id);
            if (typeof school !== "string" || !school.trim().length) {
                throw new Error("expected parameter 'school' to be a non-empty string");
            }
            this.school = school;
        }
        getSchool() {
            return this.school;
        }
        getRole() {
            return 'Intern';
        }
    
}

module.exports = Intern;






