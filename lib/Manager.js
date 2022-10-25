const Employee = require("./Employee.js")
class Manager extends Employee{

    constructor(name, email, id, officeNumber){
            super (name, email, id);
            if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
                throw new Error("expected parameter 'officeNumber' to be a non-empty string");
            }
            this.officeNumber = officeNumber;
        }
        getOfficeNumber() {
            return this.officeNumber;
        }
        getRole() {
            return 'Manager';
        }
    
}

module.exports = Manager;






module.exports = Manager;

