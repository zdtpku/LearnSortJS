/**
 * Selection Sort
 * O(n^2)
 * 思路：双重循环
 * 升序：第一遍遍历选择出最小的数组的位置，将第一个元素和选择出的最小值交换
 * 依次遍历选择。
 */
(function(){
    const ascSort = function(array){
        let min = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length; j++) {
                if(array[min]>array[j]){
                    min = j;
                }
            }
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
        return array;
    }
    const testArray = [2, 20, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray = ascSort(testArray);
    console.log(ascArray);

})();