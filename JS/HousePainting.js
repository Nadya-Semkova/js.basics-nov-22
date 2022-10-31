function Painting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    
    let Rectangle = x * y;
    let Window = 2 * 1.5 * 1.5;
    let TwoRectangles = 2 * Rectangle - Window;
    
    let Square = x * x;
    let Door = 1.2 * 2;
    let TwoSquares = (2 * Square) - Door;
    
    let All1 = (TwoRectangles + TwoSquares);

    let GreenPaint = (All1 / 3.4).toFixed(2);

    let SquareRoof = 2 * (x * y);
    let TriangleRoof = 2 * (x * h / 2);
    let All = (SquareRoof + TriangleRoof);    

    let RedPaint = (All / 4.3).toFixed(2);


console.log(GreenPaint);
console.log(RedPaint);

}
Painting(["6", "10", "5.2"]);