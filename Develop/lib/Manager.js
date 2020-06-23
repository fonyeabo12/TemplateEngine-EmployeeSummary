// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, id, email, GitHubUser, officeNumber) {
        super(name, id, email);
        this.github = GitHubUser;
        this.officeNumber = 100;
        this.role = 'Manager';

       
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }

    getOfficeNumber() {
        return 100;
    }



}


module.exports = Manager;
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

