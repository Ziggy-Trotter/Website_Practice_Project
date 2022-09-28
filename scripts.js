

function guess() {
    // convert retrievel of output box into var "text"
    const input = document.getElementById("inputNumber").value;
    const rnum = Math.ceil(Math.random() * 9);
    const output = document.getElementById("outputNumber");
    //

    'console.log(input)'
    console.log(rnum)
    if (rnum == input) {
        return output.innerHTML = (input + " is correct!");
    } else if (input == 0) {
        return output.innerHTML = (input + " is an invalid input!");
    } else if (input > 9) {
        return output.innerHTML = (input + " is an invalid input!");
    } else {
        return output.innerHTML = (input + " is incorrect!");
    }


}

function animal() {
    const input = document.getElementById("aInput").value;
    const output = document.getElementById("aOutput");
    if (input == "Horse") {
        return output.innerHTML = '<img src="1200px-Retezat-pferd.jpg"';
    } else if (input == 0) {
        return output.innerHTML = (input + " is an invalid input!");
    } else if (input > 9) {
        return output.innerHTML = (input + " is an invalid input!");
    } else {
        return text.innerHTML = (input + " is incorrect!");
    }


}
