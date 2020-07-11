/**
 * Heap Sort
 * O(nlog(n))
 * 比较复杂，用到大顶堆，小顶堆，完全二叉树之类概念
 * 后续待研究
 */

(function () {
   
    const ascSort = function(array){
        let len = array.length;
        buildMaxHeap(array,len);
        for (var i = array.length-1; i > 0; i--) {
            swap(array, 0, i);
            len--;
            heapify(array, 0, len);
        }
        return array;
    }

    const buildMaxHeap = function(arr,len){
        for (let i = Math.floor(len/2); i >= 0; i--) {
            heapify(arr, i, len);
        }
    }

    const heapify = function(arr,i,len){
        let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

        if (left < len && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < len && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != i) {
            swap(arr, i, largest);
            heapify(arr, largest,len);
        }
    }

    const swap = function(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let testArray = [20, 2, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray = ascSort(testArray);
    console.log(ascArray);
})();