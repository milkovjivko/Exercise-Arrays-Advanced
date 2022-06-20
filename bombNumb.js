function bombNumbers(arr1, arr2) {
    let sum = 0;
    let magicNum = arr2[0];
    let magicNumPower = arr2[1];
    let index = arr1.indexOf(magicNum);

    let startingPoint = index - magicNumPower;
    let magicCounter = 0;

    if (startingPoint <= 0) {
        startingPoint = 0;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === magicNum) {
            magicCounter++;
        }
    }
    while (arr1.includes(magicNum)) {
        arr1.splice(startingPoint, 1 + magicNumPower * 2);
    }
    for (let element of arr1) {
        sum += element;
    }
    console.log(sum);
} bombNumbers(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3])
