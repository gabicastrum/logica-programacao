function bubbleSort(array) {
    //olha o comprimento da array
    const length = array.length;
    //inicia o loop
    for (let i = 0; i < length; i++) {
        //loop interno
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Troca os elementos de lugar
                const temporária = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporária;
            }
        }
    }

    return array;
}
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers);