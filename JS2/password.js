function CheckPassword(input) {
    let Password = input[0];
    if (Password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
CheckPassword(["s3cr3t!P@ss"]);