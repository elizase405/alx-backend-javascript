// define Interface Student
Interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: sring;
};

// create 2 student objects
const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "123, west street"
};

const student2: Student = {
        firstName: "Jane",
        lastName: "Doe",
        age: 19,
        location: "456, east street"
};

// store student objects in array
const studentList: Student[] = [student1, student2];
