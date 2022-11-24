function random(min,max) {
    let i = 0;

    while (i <= 10)
    {
        document.getElementById("Ej6").innerHTML += '<option value="">' + Math.random() + '</option>';
        i++;
    }
}