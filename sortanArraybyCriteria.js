function sort(arr) {
    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    sortedArray.forEach(element => {
        console.log(element);
    })
} 
sort (['alpha', 'beta', 'gamma'])