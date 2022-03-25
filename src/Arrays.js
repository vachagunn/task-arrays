/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = data.split(',');

    for (let i in arr) {
        arr[i] = parseInt(arr[i], 10);
    }

    arr = arr.sort((a, b) => a - b);
    let result = arr.join(','); //объединяет все элементы массива в строку с разделением через ,

    return result;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = data.filter(function (n) {
        return n < 100;
    });
    return result;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    const array3 = [];

    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        if (array1[i] != null) {
            array3.push(array1[i]);
        }
        if (array2[i] != null) {
            array3.push(array2[i]);
        }
    }
    return array3;
}
