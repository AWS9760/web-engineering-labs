function gradebook(students){
    const scores = students.map(s => s.score);
    const average = scores.reduce((sum, s) => sum + s, 0) / students.length;

    const highest = students.reduce((top, s) => (s.score > top.score ? s : top));
    const lowest = students.reduce((low, s) => (s.score < low.score ? s : low));

    const passRate = (students.filter(s => s.score >= 50).length / students.length) * 100;

    const sortedNames = [...students].sort((a, b) => b.score - a.score).map(s => s.name);

    return {
        average: Number(average.toFixed(2)),
        highest: highest.name,
        lowest: lowest.name,
        passRate: Number(passRate.toFixed(2)),
        sortedNames,
    };
}

const students = [
    {name: "Ali", score: 92},
    {name: "Sara", score: 78},
    {name: "Bilal", score: 45},
    {name: "Zara", score: 60},
];

console.log(gradebook(students));