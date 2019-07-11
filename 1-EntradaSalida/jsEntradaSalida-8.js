/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

  var numero1;
  numero1 = document.getElementById("ingreseDividendo").value;
  numero1 = parseInt(numero1);

  var numero2;
  numero2 = document.getElementById("ingreseDivisor").value;
  numero2 = document.getElementById(numero2);

  alert (numero1 % numero2 );
}

