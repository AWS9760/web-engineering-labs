const students = [
    { name: "Ayesha", score: 85 },
    { name: "Ali", score: 72 },
    { name: "Sara", score: 95 },
    { name: "Ahmed", score: 60 },
    { name: "Fatima", score: 88 }
];

const total = students.reduce((sum, student) => sum + student.score, 0);
const average = total / students.length;

const aboveAverage = students
    .filter(student => student.score > average)
    .map(student => student.name);

console.log(aboveAverage);

console.log(students.some(s => s.score > 90));
console.log(students.every(s => s.score > 40));

const sortedStudents = [...students].sort((a, b) => b.score - a.score);

console.log(sortedStudents);
console.log(students);
