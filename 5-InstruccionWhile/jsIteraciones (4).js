function mostrar()
{
  do{
  var numero;
  var numero = prompt("ingrese un número entre 0 y 10.");
  numero=parseInt(numero);

  }while(numero<0 || numero>9);
  document.getElementById('ingrese un numero entre 0 y 10.').value=numero;
}//FIN DE LA FUNCIÓN
