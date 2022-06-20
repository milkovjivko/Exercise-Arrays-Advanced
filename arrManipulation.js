function arrayManipulations(arr) {

    let arrForManipulations = arr.shift();
    let result = arrForManipulations.slice(0).split(" ");

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let currentCommand = command.shift();

        switch (currentCommand) {
            case `Add`:
                let number = command.shift();
                result.push(number);
                break;
            case `Remove`:
                let numToRemove = command.shift();
                if (result.includes(numToRemove)) {
                    result.splice(numToRemove, 1);
                }
                break;
            case `RemoveAt`:
                let indexToRemove = command.shift();
                for (let i = 0; i < result.length; i++) {
                    if (Number(indexToRemove) === i) {
                        result.splice(indexToRemove, 1);
                    }
                }
                break;
            case `Insert`:
                let numToInsert = command[0];
                let index = Number(command[1]);
                for (let i = 0; i < result.length; i++) {
                    if (index === i) {
                        result.splice(index, 0, numToInsert);
                    }
                }
                break;
        }
    }
    console.log(result.join(" "));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);