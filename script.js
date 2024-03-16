function generateGreeting() {
    var name = document.getElementById("name").value;
    var color = document.getElementById("color").value;
    var greeting = document.getElementById("greeting");

    if (name === "") {
        greeting.innerHTML = "Please enter your name.";
        return;
    }

    greeting.innerHTML = "Hello, <span style='color:" + color + "'>" + name + "</span>!";
}
