
lista = [1,2,3,4,5,6,7,8,9]
function mayorArray(array)
{
    if (array.length == 1){ //si el array tiene un solo elemento
        return array[0]
    }
    else if (array.length == 0){//si el array no tiene elementos
        return null
    }
    else{
        let x = 0;//aca se va a guardar el numero mayor
        let y = 0;//aca se va a revisar el array
    
        for(let i = 0; i< array.length; i++ ) {
    
            y = array[i];//recorriendo el array
    
            if (y > x){ //si Y es mayor que X, entonces ahora X sera el numero mayor
                x = y;
            }
        }
        let i= 0;    
        while(i<array.length){ //Numero en posicion 0 : 1
            console.log("Numero en la posición" + i + ":" + array[i]);//Para mostrar en consola los valores que hay en el array
            i++
        }    
        let z = 0; 
        let contador = 0;
        do{
            if(array[z]%2 != 0){//modulo para hayar impares
                contador++;//para contar los impares
            }
            z++;
        }while(z<array.length)
        return x;//Numero mayor en el array    
    } 
}

console.log("El numero mayor es: " + mayorArray(lista));

