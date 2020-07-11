/**
 * Merge Sort
 * O(nlog(n))
 * 递归调用
 * 将数组分割为两半，递归分割，归并已排序好的两个子序列
 * 只需要左右两个有序子序列进行归并即可
 * 
 */
(function(){
    
    const ascSort = function(array){
        //递归退出条件，数组长度小于2
        if(array.length<2) {
            return array;
        }
        let middle = Math.floor(array.length/2);
        let left = array.slice(0,middle);
        let right = array.slice(middle);
        return meregeSort(ascSort(left),ascSort(right));
    }

    const meregeSort = function(left,right){
        let sorted = [];
        //比较左右的第一个元素，将小的放于数组
        while(left.length>0&&right.length>0){
            if(left[0]<right[0]){
                sorted.push(left.shift());
            }else{
                sorted.push(right.shift());
            }
        }
        //左侧剩余
        while(left.length>0){
            sorted.push(left.shift());
        }
        //右侧剩余
        while(right.length>0){
            sorted.push(right.shift());
        }
        return sorted;
    }

    let testArray = [20, 2, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray = ascSort(testArray);
    console.log(ascArray);

})();