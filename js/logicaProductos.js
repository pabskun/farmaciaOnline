// Función para guardar los datos en el localStorage
function registrarProducto(pInfoProductoNuevo){
    let listaProductos = obtenerListaProductos();
    listaProductos.push(pInfoProductoNuevo);

    localStorage.setItem('listaProductosLS', JSON.stringify(listaProductos));
}

// Función para sacar los datos del localStorage
function obtenerListaProductos(){
    let listaProductos = JSON.parse(localStorage.getItem('listaProductosLS'));

    if(listaProductos === null){
        //valores "quemados"
        listaProductos = 
        [
            ['cod01', 'Acetaminofén', 'Bayer', 200],
            ['cod02', 'Redoxon', 'Bayer', 2000],
            ['cod03', 'Voltaren', 'Novartis', 3500],
            ['cod04', 'Dolo-Neurobión' , 'Merck', 5000]
        ];
    }

    return listaProductos;
}