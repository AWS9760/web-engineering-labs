function getInitials(fullName){
    return fullName.split(" ").map(w => w[0].toUpperCase()).join("");
}

function isPalindrome(str){
    const cleaned = str.toLowerCase().replace(/\s+/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

function countWords(str){
    return str.trim().split(/\s+/).length;
}

console.log(getInitials("Ayesha Kham"));
console.log(isPalindrome("Race car"));
console.log(countWords("the quick brown fox"));

const students = [
    {name: "Ali", score: 92, active: true},
    {name: "Sara", score: 78, active: true},
    {name: "Bilal", score: 45, active: false},
];

const average = students.reduce((sum, s) => sum + s.score, 0) / students.length;
const aboveAverageNames = students.filter(s => s.score > average).map(s => s.name);
console.log("Above average: ", aboveAverageNames);

const products = [
    {id: 1, title: "Keyboard", price: 4500, category: "peripherals", inStock: true},
    {id: 2, title: "Mouse", price: 1800, category: "peripherals", inStock: false},
    {id: 3, title: "USB Hub", price: 1200, category: "cables", inStock: true},
];

function groupBy(list, key){
    return list.reduce((groups, item) => {
            const groupKey = item[key];
            
            if(!groups[groupKey])
                groups[groupKey] = [];

            groups[groupKey].push(item);
            return groups;
        }, {}
    );
}

console.log(groupBy(products, "category"));

function calculateBill({amount, tipPercent = 15, people = 1}) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Amount must be a positive number");
    }
    if (people < 1) {
        throw new Error("There must be at least one person");
    }
    
    const tip = amount * (tipPercent / 100);
    const total = amount + tip;

    return {
        tip: Number(tip.toFixed(2)),
        total: Number(total.toFixed(2)),
        perPerson: Number((total / people).toFixed(2)),
    };
}

console.log(calculateBill({amount: 2400, tipPercent: 10, people: 3}));

try {
    calculateBill({amount: -1});
} catch (error) {
    console.error("Error: ", error.message);
}

try {
    calculateBill({amount: 1000, people: 0});
} catch (error) {
    console.error("Error: ", error.message);
}