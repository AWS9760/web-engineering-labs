function groupEvenOdd(arr){
    return arr.reduce(
        (groups, num) => {
            if (num % 2 === 0) groups.even.push(num);
            else groups.odd.push(num);
            return groups;
        },
        {even: [], odd: []}
    );
}

console.log(groupEvenOdd([1,2,3,4,5,6]));