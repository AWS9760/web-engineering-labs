function countCharacters(str){
    return [...str].reduce((counts, char) => {
        counts[char] = (counts[char] || 0) + 1;
        return counts;
    }, {});
}

console.log(countCharacters("aabbc"));