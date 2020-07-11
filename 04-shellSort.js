/**
 * Shell Sort
 * O(n^1.3)
 * 是插入排序的改良版本
 * 不断减半增量，用增量做为插入排序的缩小差
 * 外层for循环以数组长度一半为间距，不断缩小间距差。
 */
(function () {
    const insertSort = function (array, gap) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let preIndex = i - gap;
            while (preIndex >= 0 && array[preIndex] > temp) {
                array[preIndex + gap] = array[preIndex];
                preIndex = preIndex - gap;
            }
            array[preIndex + gap] = temp;
        }
        return array;
    }
    const ascShellSort = function (array) {
        for (var gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
            array = insertSort(array, gap);
        }
        return array;
    }

    let testArray = [20, 2, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray = ascShellSort(testArray);
    console.log(ascArray);

})();