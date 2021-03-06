/**
 * Quick Sort
 * O(nlog(n))
 * 递归调用，挖坑填数+分治法
 * 从数列中挑出一个元素，通常可以是第一个元素作为基准（pivot）,挖坑
 * 只需比较基准值小的放在前面，大于基准值的放在后面（等于的任意），称为分区（partition）操作，并返回基准索引（坑位置）
 * 注：快排中递归操作的是数组的下标（即首、尾），和归并不同，归并左右是数组对象
 * @see https://www.runoob.com/w3cnote/quick-sort.html
 */
(function () {

    const ascSort = function (array) {
        return quickSort(array, 0, array.length - 1);
    }

    const quickSort = function (array, left, right) {
        if (left < right) {
            var pivotIndex = partition(array, left, right);
            quickSort(array, left, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, right);
        }
        return array;
    }

    //主要目的为求基准在什么位置，左边都比其小，右边都比其大
    //难点在于如何将pivotInde找出：思路在于从右边找小的挖坑，再从左边找大的填坑
    const partition = function (array, left, right) {
        let pivotIndex = left;
        let pivot = array[pivotIndex];
        while (right > left) {
            while (array[right] > pivot) {
                right--;
            }
            swap(array, pivotIndex, right);
            pivotIndex = right;
            while (array[left] < pivot) {
                left++;
            }
            swap(array, pivotIndex, left);
            pivotIndex = left;
        }
        return pivotIndex;
    }

    //原理：以第一个为基准值不动，计数法，找出比基准值小的个数，换至前几位
    //一共有三个比基准值小，则依次将其放在1,2,3位置即可
    const partitionByIndex = function partition(arr, left, right) {     // 分区操作
        let pivotIndex = left;
        let pivot = arr[pivotIndex];
        let index = pivotIndex + 1;
        for (let i = index; i <= right; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, index);
                index++;
            }
        }
        // 比基准值小的总计有index-1个，将最后一个比基准值小的和基础位置更换
        swap(arr, pivotIndex, index - 1);
        return index - 1;
    }


    const swap = function (array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }


    let testArray = [20, 2, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray = ascSort(testArray);
    console.log(ascArray);

})();