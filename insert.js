var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
    return array;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

console.log(insert(array, 4, 2));