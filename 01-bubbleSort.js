/**
 * Bubble Sort 
 * 
 */
(function () {

    const ascSort = function (array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1 - j; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }

    const descSort = function (array) {
        for (let i = 0; i < array.length - 1; i++) {
            //将数字大的冒泡到前面，因此需要从后往前循环
            for (let j = array.length - 1; j > i; j--) {
                if (array[j] > array[j - 1]) {
                    let temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }

    const testArray = [2, 20, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray = ascSort(testArray);
    console.log(ascArray);
    let descArray = descSort(testArray);
    console.log(descArray);

})();