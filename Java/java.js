function calcularPrecio(precioBase, descuento){
    
    let preciofinal;     
    
    if (precioBase<=0 || descuento < 0 || descuento > 100){console.log ("Los valores ingresados son invalidos")}
    else if (descuento ===0){preciofinal = precioBase}
    else if(descuento>0 && descuento<=100){preciofinal = precioBase*(1-(descuento/100))}

    console.log("El precio final es",preciofinal)
}





