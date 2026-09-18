function getLastNums(num){
    let arrNum = Array.from(num.toString());

    for(let i = 1; i < arrNum.length; i++){
        arrNum[i] = 0;
    }

    let lastNum = num - arrNum.join('');
    return lastNum;
}

console.log(getLastNums(1024));