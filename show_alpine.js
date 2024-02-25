
En una session  con un perfil determinado.
Quiero que cuando dos opciones en concreto ya sea una u otra se vea el div

x-show="['Superadmin','Supervisor'].includes('{{session.rol}}') " 

en js  cogemos un array 
['Superadmin','Supervisor'].includes(' --variable--') ---> sera cierto o no.

o cpmarando una a una 

'{{session.rol}}' != 'Trabajador' -> esto si es igual dara true o si no false.
