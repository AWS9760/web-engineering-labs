function letterGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function displayCount(n) {
    return n ?? "No count available";
}

console.log(letterGrade(95)); 
console.log(letterGrade(75));
console.log(letterGrade(50)); 

console.log(displayCount(0));    
console.log(displayCount(null)); 
console.log(displayCount(42));   
