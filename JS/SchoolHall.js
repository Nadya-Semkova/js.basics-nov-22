function SchoolHall(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let DeskWidth = 0.7;
    let DeskLength = 1.2;
    let Corridor = 1;
    let WorkPlacesLost = 3;

    let FreeSpace = h - Corridor;
    let Desk = Math.floor(FreeSpace / DeskWidth);
    let Rows = Math.floor(w / DeskLength);
    let WorkPlaces = (Desk * Rows) - WorkPlacesLost;

    console.log(WorkPlaces);
}
SchoolHall(["15", "8.9"]);