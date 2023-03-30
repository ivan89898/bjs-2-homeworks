function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Ivan", "male", 28);
let student2 = new Student("Jhon", "male", 29);
let student3 = new Student("Dasha", "women", 23);
let student4 = new Student("Sonya", "women", 35);
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function addMarks(...marksToAdd) {
  if (this.marks === undefined) {
    this.marks === [...marksToAdd];
  } else {
    this.marks.push(...marksToAdd);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return 0;
  }
  return this.marks.reduce((a, b) => a + b / this.marks.length, 0);
};

Student.prototype.exclude = function exclude(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
