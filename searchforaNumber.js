function searchforaNumber(arr1, arr2) {
    let numbOfElementsFromArr1 = arr2.shift();
    let numbOfdeleteElements = arr2.shift();
    let numbColection = Number(arr2);
    let countColection = 0;
    let arr = arr1.splice(0, numbOfElementsFromArr1);
    arr.splice(0, numbOfdeleteElements)

    for (let j = 0; j < arr.length; j++) {
        let currentEle = arr[j]
        if (currentEle === numbColection) {
            countColection++;
        }
    }
    console.log(`Number ${numbColection} occurs ${countColection} times.`);
}
searchforaNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)
