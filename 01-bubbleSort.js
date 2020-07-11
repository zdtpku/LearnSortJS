/**
 * Bubble Sort 
 * 
 */
(function () {

    const sort = function (array) {
        for (let i = 0; i < array.length-1; i++) {
            for (let j = 0; j < array.length-i-1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    }

    const testArray = [2,20,1,56,21,3,9,24,6,12,99,34];
    let sortedArray = sort(testArray);
    console.log(sortedArray);

})();