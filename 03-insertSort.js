/**
 * Insertion Sort
 * O(n^2)
 * 思路：双重循环 或 for while
 * 升序：在已排序序列中从后向前扫描，找到相应位置并插入。
 * 第一个认为已排序，取出下一个元素，在已经排序的元素序列中从后向前扫描，
 * 如果前一个比自己小则插入到当前位置。
 */
(function () {
    const ascSort = function (array) {
        for (let i = 1; i < array.length; i++) {
            for (let j = i; j > 0; j--) {
                let temp = array[j];
                if (temp < array[j - 1]) {
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                } else {
                    break;
                }
            }
        }
        return array;
    }

    const ascSortUseWhile = function (array) {
        for (let i = 1; i < array.length; i++) {
            let temp = array[i];
            let preIndex = i - 1;
            while (preIndex >= 0 && array[preIndex] > temp) {
                array[preIndex + 1] = array[preIndex];
                preIndex--;
            }
            array[preIndex + 1] = temp;
        }
        return array;
    }

    let testArray = [20, 2, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray1 = ascSort(testArray);
    console.log(ascArray1);
    testArray = [20, 2, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray2 = ascSortUseWhile(testArray);
    console.log(ascArray2);
})();