if( numero1 != " " && numero2 != " "){
   console.log("Están vacíos")
}

if (numero1 >= numero2) {
   if (numero1 == numero2){
       alert("Los numeros son iguales");
   } else{
       alert("El número mayor es:"+numero1);
   }
}else{
   alert("El numero mayor es:"+numero2);
}