function tabladeldos(j){
    document.getElementById("tabladeldos").innerHTML
    document.write("<ul>");
    for(i = 1; i<=10;i++){
        document.write("<li>");
        document.write(j + "x" + i +"=" +j * i);
        document.write("</li>");
    }
}

tabladeldos(2)