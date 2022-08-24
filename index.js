// class Employee {
// 	constructor(firstname, lastname) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.fullname = `${firstname} ${lastname}`;
// 	this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`;
	
// 	// Complete the code!
// 	}
// 	}
	
// 	const student1 = new Employee("Alan", "Diko");
	
// 	console.log(student1);
	
// 	const emp1 = new Employee("John", "Smith");
	
	
// 	console.log(emp1.fullname);
// 	console.log(emp1.firstname);
// 	console.log(emp1.email);
// 	console.log(student1.email); 


class Employee {
	constructor(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
	}
	
	createFullName() {
	console.log(`${this.firstname} ${this.lastname}`);
	}
	
	createEmail() {
	console.log(
	`${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
	);
	}
	
	// Complete the code!
	}
	
	const student1 = new Employee("Daniel", "Reiller");
	console.log(student1);
	
	student1.createFullName();
	student1.createEmail(); 