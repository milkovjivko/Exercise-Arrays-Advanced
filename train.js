function train(arr) {
    let passengersArr = arr.shift().split(' ').map(Number);
    let maxCapacity = +arr.shift();

    for (let i = 0; i < arr.length; i++) {

        let commandNum = arr[i].split(' ');
        if(commandNum[0] === 'Add') {
            passengersArr.push(Number(commandNum[1]));
        } else {
            for (let a = 0; a < passengersArr.length; a++) {
                if (Number(commandNum[0]) + passengersArr[a] <= maxCapacity) {
                    passengersArr[a] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersArr.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
