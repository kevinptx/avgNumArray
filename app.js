//Write a function that finds the avg of the numbers in a given array:
// eg arr = [2, 4, 6]
// avg(arr) = 4


function avg(array){
    let sum = 0
    for (var i = 0; i < array.length; i++){
        // sum = sum + array[i]
        sum += array[i]
    }
    return sum / array.length
}

const arr = [2, 4, 6]
const value = avg(arr)
console.log("value: ", value)
