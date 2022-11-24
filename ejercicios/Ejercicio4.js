function diasem() {
    let sem = parseInt(document.getElementById("dia").value)
    switch (sem) {
        case 1:
            alert("tu dia es lunes");
            break;
        case 2:
            alert("tu dia es martes");
            break;
        case 3:
            alert("tu dia es miercoles");
            break;
        case 4:
            alert("tu dia es jueves");
            break;
        case 5:
            alert("tu dia es viernes");
            break;
        case 6:
            alert("tu dia es sabado");
            break;
        case 7:
            alert("tu dia es domingo");
            break;
        default:
            alert("Ingresa otro numero");
            break;
    }
}