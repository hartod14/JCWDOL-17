// exercise 1
function triangle(height: number) {
    let maxValueInRow: number = 1;
    let counter: number = 1

    while (maxValueInRow <= height) {
        let counterInRow: number = 1
        let value: string = ""
        while (counterInRow <= maxValueInRow) {
            value += ` 0${counter}`

            counter++
            counterInRow++
        }

        maxValueInRow++
        console.log(value);
    }

}

triangle(5)

//exercise 2
function fizzBuzz(n: number) {
    let counter: number = 1;
    let value: string = ""
    while (counter <= n) {
        if (counter != 1) {
            value += `, `
        }
        if (counter % 5 == 0 && counter % 3 == 0) {
            value += `FizzBuzz`
        } else if (counter % 5 == 0) {
            value += `Buzz`
        } else if (counter % 3 == 0) {
            value += `Fizz`
        } else {
            value += counter
        }

        counter++
    }

    console.log(value);

}

fizzBuzz(15)

//exercise 3
function calculateBMI(weight: number, height: number) {
    let bmi: number = weight / Math.pow(height, 2)
    console.log(bmi);

    if (bmi < 18.5) {
        console.log('less weight');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('ideal');
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        console.log('overweight');
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        console.log('very overweight');
    } else {
        console.log('obesity');
    }
}

calculateBMI(57, 1.65)

// exercise 4
function removeOddNumber(values: number[]) {
    const oddNumber = values.filter((value) => value % 2 == 0)
    console.log(oddNumber);
}

removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// exercise 5
function splitString(values: string) {
    const splitted = values.split(' ')
    
    console.log(splitted);
}

splitString('Hello wrold 4 adsf123 das s')
