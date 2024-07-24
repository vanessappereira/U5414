function isPrime() {
    var num = document.getElementById("number").value;
    var flag = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
        }
    }
    if (flag == true) {
        document.getElementById("result").innerHTML = "The number is prime";
    } else {
        document.getElementById("result").innerHTML = "The number is not prime";
    }
}