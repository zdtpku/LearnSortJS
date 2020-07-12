/**
 * Counting Sort
 * O(n)
 * 找出待排序的数组中最大的元素，构造一个数组在其中放元素
 */

(function () {
    const ascSort = function(array){
        
        let max = findMax(array);
        let bucket = new Array(max+1);

        for(let i=0; i<array.length; i++){
            bucket[array[i]] = bucket[array[i]] ? bucket[array[i]]++ : 1;
        }

        let index = 0;
        for(let i=0; i<bucket.length; i++){
            if(!bucket[i]) continue;
            while(bucket[i]){
                array[index] = i;
                index++;
                bucket[i]--;
            }
        }

        return array;
    }

    const findMax = function(array){
        let max = array[0];
        for(var i=0; i< array.length; i++){
            max = array[i]>max ? array[i]:max;
        }
        return max;
    }


    let testArray = [20, 2, 1, 56, 21, 3, 9, 24, 6, 12, 99, 34];
    let ascArray = ascSort(testArray);
    console.log(ascArray);
})();