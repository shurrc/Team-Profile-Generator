const Engineer = require("../lib/Engineer.js");

describe("engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name id, email and office number if provided valid arguments", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const github = "shurrc"
      const engineer = new Engineer(name, email, id, github);

      expect(engineer.name).toEqual(name);
      expect(engineer.email).toEqual(email);
      expect(engineer.id).toEqual(id)
      expect(engineer.github).toEqual(github)
      
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Engineer();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
      const name = ""
      const email = "Jimmy@Deans.com"  
      const id = "003"
      const github = "shurrc"
      const cb = () => new Engineer(name, email, id, github);
      const err = new Error("expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'not provided an email", () => {
      const name = "Sarah"
      const email = ""  
      const id = "003"
      const github = "shurrc"
      const cb = () => new Engineer(name, email, id, github);
      const err = new Error("expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
      const name = "Sarah"
      const email = "Jimmy@Deans.com"  
      const id = ""
      const github = "shurrc"
      const cb = () => new Engineer(name, email, id, github);
      const err = new Error("expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided a github", () => {
        const name = "Sarah"
        const email = "Jimmy@Deans.com"  
        const id = "003"
        const github = ""
        const cb = () => new Engineer(name, email, id, github);
        const err = new Error("expected parameter 'github' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    
  });
});
describe("getRole()", () => {
  it("should always return type 'Engineer'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const github = "shurrc"
    const engineer = new Engineer(name, email, id, github);

    expect(engineer.getRole()).toEqual('Engineer')
  })
})
describe("getName()", () => {
  it("should always return type 'name'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const github = "shurrc"
    const engineer = new Engineer(name, email, id, github);

    expect(engineer.getName()).toEqual(name);
  })
})
describe("getemail()", () => {
  it("should always return type 'email'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const github = "shurrc"
    const engineer = new Engineer(name, email, id, github);

    expect(engineer.getEmail()).toEqual(email);
  })
})
describe("getId()", () => {
  it("should always return type 'id'", () => {
    const name = "Sarah";
    const email = "Jimmy@Dean.com";
    const id = "003";
    const github = "shurrc"
    const engineer = new Engineer(name, email, id, github);

    expect(engineer.getId()).toEqual(id)
  })
})
describe("getGithub()", () => {
    it("should always return type 'github'", () => {
      const name = "Sarah";
      const email = "Jimmy@Dean.com";
      const id = "003";
      const github = "shurrc"
      const engineer = new Engineer(name, email, id, github);
  
      expect(engineer.getGithub()).toEqual(`https://www.github.com/${github}`)
    })
 })