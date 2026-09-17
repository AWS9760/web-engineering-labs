function getInitials(name) {
    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/\s/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

function countWords(text) {
    return text.trim().split(/\s+/).length;
}

console.log(getInitials("Ayesha Khan"));       
console.log(isPalindrome("Race car"));         
console.log(countWords("the quick brown fox"));
