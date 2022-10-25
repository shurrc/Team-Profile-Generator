const { getRandomValues } = require("crypto");
const { getSystemErrorName } = require("util");

class Employee {
    // name;
    // id;
    // email;

    constructor(name, email, id){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("expected parameter 'name' to be a non-empty string")
        }
        
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("expected parameter 'email' to be a non-empty string")
        
        }

        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("expected parameter 'id' to be a non-empty string")
        }
        this.name = name;
        this.id = id;
        this.email = email;
           
    }
    getRole() {
        return 'Employee';
    };

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }

}









module.exports = Employee;