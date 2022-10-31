function compulsoryLit(input) {
    let currBookPages = Number(input[0]);
    let PagesperHour = Number(input[1]);
    let Days = Number(input[2]);

    let totalHours = currBookPages / PagesperHour;
    let hoursPerDay = totalHours / Days;

    console.log(hoursPerDay);

}
compulsoryLit(["212", "20", "2"]);