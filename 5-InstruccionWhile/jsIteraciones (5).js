function mostrar()
{
var sexo;
do{
sexo = prompt("ingrese f ó m .");
}while (sexo!="F" && sexo!="M");

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
