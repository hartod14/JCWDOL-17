///////////////////////////// Exercise A //////////////////////////////
// Ex-1
function withoutSortFunction(values: number[]) {
    let lowest: number = values[0];
    let highest: number = values[0];
    let sumTotal: number = 0

    values.forEach(value => {
        if (value > highest) {
            highest = value
        }

        if (value < lowest) {
            lowest = value
        }
        sumTotal += value
    });

    let average: number = sumTotal / values.length

    console.log(`lowest: ${lowest}, highest: ${highest}, average:${average}`);

}

function withSortFunction(values: number[]) {
    let sortedValues = values.sort((a, b) => a - b);

    let sumTotal = 0;
    let lowest = sortedValues[0]
    let highest = sortedValues[values.length - 1]

    values.forEach(value => {
        sumTotal += value
    });

    let average: number = sumTotal / values.length

    console.log(`lowest: ${lowest}, highest: ${highest}, average:${average}`);

}

withoutSortFunction([12, 5, 23, 18, 4, 45, 32])
withSortFunction([12, 5, 23, 18, 4, 45, 32])

//2
function sortArrays(values: string[]) {
    let lastValue = values[values.length - 1]
    values.splice(values.length - 1)
    // console.log(lastValue);
    // console.log(values);
    let sorted: string = values.join(', ')
    sorted += `, and ${lastValue}`

    console.log(sorted);

}

sortArrays(["apple", "banana", "cherry", "date"])

//3
function secondSmallestNumber(values: number[]) {
    let sortedValues: number[] = values.sort((a, b) => a - b);

    console.log(sortedValues[1]);
}

secondSmallestNumber([5, 3, 1, 7, 2, 6])

//4
function twoArrayOfinteger(values1: number[], values2: number[]) {
    let result: number[] = []

    let counter = 0
    while (counter < values1.length) {
        result.push(values1[counter] + values2[counter])

        counter++
    }

    console.log(result);
}

twoArrayOfinteger([1, 2, 3], [3, 2, 1])

//5
function findAdded(values: number[], newElement: number) {
    if (values.indexOf(newElement) == -1) {
        values.push(newElement)
    }

    console.log(values);
}

findAdded([1, 2, 3, 4], 4)

///////////////////////////// Exercise B //////////////////////////////
//1
function sumNumberMixedArray(values: any[]) {
    let sumInteger: number = 0
    values.forEach(value => {
        if (typeof (value) == 'number') {
            sumInteger += value
        }
    });

    console.log(sumInteger);
}

sumNumberMixedArray(["3", 1, "string", null, false, undefined, 2])

//2
function multipleArray(maxSize: number, givenInteger: string) {
    let arrInteger = givenInteger.split(', ')
    let result = arrInteger.slice(0, maxSize).map((value) => parseInt(value))
    console.log(result);

}
multipleArray(5, "5, 10, 24, 3, 6, 7, 8")

//3
function combineArray(arr1: number[], arr2: number[]) {
    console.log(arr1.concat(arr2));
}
combineArray([1, 2, 3], [4, 5, 6])

//4
function findDuplicate(arr: number[]) {
    let checkedArr: number[] = []
    let duplicated: number[] = []
    arr.forEach(value => {
        if (checkedArr.indexOf(value) == -1) {
            checkedArr.push(value)
        } else {
            if (duplicated.indexOf(value) == -1) {
                duplicated.push(value)
            }
        }
    });
    console.log(duplicated);
}

findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5])

//5
function diffArray(arr1: number[], arr2: number[]) {
    let different: number[] = []
    arr1.forEach(value => {
        if (arr2.indexOf(value) == -1) {
            different.push(value)
        }
    });

    arr2.forEach(value => {
        if (arr1.indexOf(value) == -1) {
            different.push(value)
        }
    });

    console.log(different);

}

diffArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

///////////////////////////// Exercise C //////////////////////////////
