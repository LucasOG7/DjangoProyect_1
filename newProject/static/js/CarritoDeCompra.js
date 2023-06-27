var MontoTotal = document.querySelectorAll(".MontoTotal");
var MontoPorProducto = document.querySelectorAll("input[name=txtPrecio]");
var TotalProducto = document.querySelector(".CantidadTotal");
var ContarItemPorProd = document.querySelectorAll("input[name=Producto]");


document.querySelectorAll(".fas fa-plus").forEach(Producto =>{

    Producto.addEventListener("click",function(){
        SumarProducto(Producto)
    })
})



function SumarProducto(Producto){
    var closetTr = Producto.closest("td").parentNode;
    var closestPrecio = closetTr.cells[2].querySelector("input[name=txtPrecio]").value;
    var closestMontoTotal = closetTr.cells[2].querySelector("input[name=TotaltxtPrecio]");

    var itemCount = Producto.closest("td").querySelector("input[name=Producto]");

    itemCount.value = parseFloat(itemCount.value) + 1;
    closestMontoTotal.value = parseFloat(closestPrecio) * parseFloat(itemCount.value);


    var MontoTotalTemp = 0;

    MontoPorProducto.forEach(Producto =>{
        MontoTotalTemp = MontoTotalTemp * parseFloat(Producto.value)
    })

    MontoTotal.forEach(Producto =>{
        Producto.innerHTML = MontoTotalTemp;
    })
}


