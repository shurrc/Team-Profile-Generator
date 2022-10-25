const Manager = require("../lib/Manager.js");

describe("manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name id, email and office number if provided valid arguments", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const officeNumber = "123"
      const manager = new Manager(name, email, id, officeNumber);

      expect(manager.name).toEqual(name);
      expect(manager.email).toEqual(email);
      expect(manager.id).toEqual(id)
      expect(manager.officeNumber).toEqual(officeNumber)
      
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Manager();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
      const name = ""
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const officeNumber = "123"
      const cb = () => new Manager(name, email, id, officeNumber);
      const err = new Error("expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'not provided an email", () => {
      const name = "Sarah"
      const email = ""  
      const id = "003"
      const officeNumber = "123"
      const cb = () => new Manager(name, email, id, officeNumber);
      const err = new Error("expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = ""
      const officeNumber = "123"
      const cb = () => new Manager(name, email, id, officeNumber);
      const err = new Error("expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an office number", () => {
        const name = "Sarah"
        const email = "Jimmy@Deans.com"  
        const id = "003"
        const officeNumber = ""
        const cb = () => new Manager(name, email, id, officeNumber);
        const err = new Error("expected parameter 'officeNumber' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    
  });
});
describe("getRole()", () => {
  it("should always return type 'Manager'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const officeNumber = "123"
    const manager = new Manager(name, email, id, officeNumber);

    expect(manager.getRole()).toEqual('Manager')
  })
})
describe("getName()", () => {
  it("should always return type 'name'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const officeNumber = "123"
    const manager = new Manager(name, email, id, officeNumber);

    expect(manager.getName()).toEqual(name);
  })
})
describe("getemail()", () => {
  it("should always return type 'email'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const officeNumber = "123"
    const manager = new Manager(name, email, id, officeNumber);

    expect(manager.getEmail()).toEqual(email);
  })
})
describe("getId()", () => {
  it("should always return type 'id'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const officeNumber = "123"
    const manager = new Manager(name, email, id, officeNumber);

    expect(manager.getId()).toEqual(id)
  })
})
