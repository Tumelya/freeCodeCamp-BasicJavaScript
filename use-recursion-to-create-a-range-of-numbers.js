function rangeOfNumbers(startNum, endNum) {
    let result = [];
    if (endNum < startNum) {
        return [];
    } else {
        result = rangeOfNumbers(startNum, endNum - 1);
        result.push(endNum);
        console.log(result);
        return result;
    }
};