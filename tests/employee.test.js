const Employee = require("../lib/Employee.js");

describe("employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name id, and email if provided valid arguments", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const employee = new Employee(name, email, id);

      expect(employee.name).toEqual(name);
      expect(employee.email).toEqual(email);
      expect(employee.id).toEqual(id)
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
      const name = ""
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const cb = () => new Employee(name, email, id);
      const err = new Error("expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'not provided an email", () => {
      const name = "Sarah"
      const email = ""  
      const id = "003"
      const cb = () => new Employee(name, email, id);
      const err = new Error("expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = ""
      const cb = () => new Employee(name, email, id);
      const err = new Error("expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    
  });
});
describe("getRole()", () => {
  it("should always return type 'Employee'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const employee = new Employee(name, email, id);

    expect(employee.getRole()).toEqual('Employee')
  })
})
describe("getName()", () => {
  it("should always return type 'name'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const employee = new Employee(name, email, id);

    expect(employee.getName()).toEqual(name);
  })
})
describe("getemail()", () => {
  it("should always return type 'email'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const employee = new Employee(name, email, id);

    expect(employee.getEmail()).toEqual(email);
  })
})
describe("getId()", () => {
  it("should always return type 'id'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const employee = new Employee(name, email, id);

    expect(employee.getId()).toEqual(id)
  })
})