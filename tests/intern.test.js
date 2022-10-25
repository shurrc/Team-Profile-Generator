const Intern = require("../lib/Intern.js");

describe("intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name id, email and office number if provided valid arguments", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const school = "St. Johns"
      const intern = new Intern(name, email, id, school);

      expect(intern.name).toEqual(name);
      expect(intern.email).toEqual(email);
      expect(intern.id).toEqual(id)
      expect(intern.school).toEqual(school)
      
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Intern();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
      const name = ""
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const school = "St. Johns"
      const cb = () => new Intern(name, email, id, school);
      const err = new Error("expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'not provided an email", () => {
      const name = "Sarah"
      const email = ""  
      const id = "003"
      const school = "St. Johns"
      const cb = () => new Intern(name, email, id, school);
      const err = new Error("expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = ""
      const school = "St. Johns"
      const cb = () => new Intern(name, email, id, school);
      const err = new Error("expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided a school", () => {
        const name = "Sarah"
        const email = "Jimmy@Deans.com"  
        const id = "003"
        const school = ""
        const cb = () => new Intern(name, email, id, school);
        const err = new Error("expected parameter 'school' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    
  });
});
describe("getRole()", () => {
  it("should always return type 'Intern'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const school = "St. Johns"
    const intern = new Intern(name, email, id, school);

    expect(intern.getRole()).toEqual('Intern')
  })
})
describe("getName()", () => {
  it("should always return type 'name'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const school = "St. Johns"
    const intern = new Intern(name, email, id, school);

    expect(intern.getName()).toEqual(name);
  })
})
describe("getemail()", () => {
  it("should always return type 'email'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const school = "St. Johns"
    const intern = new Intern(name, email, id, school);

    expect(intern.getEmail()).toEqual(email);
  })
})
describe("getId()", () => {
  it("should always return type 'id'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const school = "St. Johns"
    const intern = new Intern(name, email, id, school);

    expect(intern.getId()).toEqual(id)
  })
})
describe("getSchool()", () => {
    it("should always return type 'school'", () => {
      const name = "Sarah";
      const email = "Jimmy@Dean.com";
      const id = "003";
      const school = "St. Johns"
      const intern = new Intern(name, email, id, school);
  
      expect(intern.getSchool()).toEqual(school)
    })
  })