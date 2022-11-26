function hospital(input) {
    let period = Number(input[0]);
    let examined = 0;
    let unexamined = 0;
    let doctorCount = 7;

    for (let day = 1; day <= period; day++) {
        let currentPatients = Number(input[day]);
        if (day % 3 == 0 && unexamined > examined) {
            doctorCount++;
        } if (currentPatients > doctorCount) {
            examined += doctorCount;
            unexamined += currentPatients - doctorCount;
        } else {
            examined += currentPatients;
        }
    }
    console.log(`Treated patients: ${examined}`);
    console.log(`Untreated patients: ${unexamined}`);
}
hospital(["4", "7", "27", "9", "1"]);