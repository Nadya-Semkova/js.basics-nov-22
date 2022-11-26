function grades(input) {
    let numStudents = Number(input[0]);
    let sumGrade = 0;
    let percent5Grade = 0;
    let percent4Grade = 0;
    let percent3Grade = 0;
    let percent2Grade = 0;

    for (let i = 1; i < input.length; i++) {
        let grade = Number(input[i]);
        sumGrade = sumGrade + grade;
        if (grade >= 2 && grade <= 2.99) {
            percent2Grade++;
        } else if (grade >= 3 && grade <= 3.99) {
            percent3Grade++;
        } else if (grade >= 4 && grade <= 4.99) {
            percent4Grade++;
        } else if (grade >= 5) {
            percent5Grade++;
        }
    }


    percent5Grade = percent5Grade / numStudents * 100;
    percent4Grade = percent4Grade / numStudents * 100;
    percent3Grade = percent3Grade / numStudents * 100;
    percent2Grade = percent2Grade / numStudents * 100;

    let average = sumGrade / numStudents;

    console.log(`Top students: ${percent5Grade.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percent4Grade.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percent3Grade.toFixed(2)}%`);
    console.log(`Fail: ${percent2Grade.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
    

}
grades([10,
3.00,
2.99,
5.68,
3.01,
4,
4,
6.00,
4.50,
2.44,
5
])