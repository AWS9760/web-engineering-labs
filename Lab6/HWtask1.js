function secondLargest(arr){
    const unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}

console.log(secondLargest([10, 5, 8, 10, 3]));