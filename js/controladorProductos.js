mostrarListaProductos();

// document.querySelector('#btnRegistrar').addEventListener('click',obtenerDatosRegistro);
// // Mostrar los datos de los articulos al cargar la pagina
// mostrarListaArticulos();
// let inputFiltro = document.querySelector('#txtFiltro');
// inputFiltro.addEventListener('keyup', filtrarTabla);

// let inputCodigo = document.querySelector('#txtCodigo');
// let inputNombre = document.querySelector('#txtNombre');
// let inputPrecio = document.querySelector('#txtPrecio');

// function obtenerDatosRegistro(){
//     let infoArticulo = [];
    
//     //Si la validacioón es correcta se accede a los valores
//     let sCodigo = inputCodigo.value;
//     let sNombre = inputNombre.value;
//     let nPrecio = Number(inputPrecio.value);

//     infoArticulo.push(sCodigo,sNombre,nPrecio); 
//     registrarArticulo(infoArticulo);
//     mostrarListaArticulos(); // actualiza la tabla
//     limpiarFormulario();
// }

function mostrarListaProductos(){
    let listaProductos = obtenerListaProductos();
    let cuerpoTabla = document.querySelector('#tblProductos tbody');
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i < listaProductos.length;i++){
        let fila = cuerpoTabla.insertRow(i);
        
        let celdaMantenimiento = fila.insertCell();

        let campoCodigo = fila.insertCell();
        let campoNombre = fila.insertCell();
        let campoCasa = fila.insertCell();
        let campoPrecio = fila.insertCell();

        campoCodigo.innerHTML = listaProductos[i][0];
        campoNombre.innerHTML = listaProductos[i][1];
        campoCasa.innerHTML = listaProductos[i][2];
        campoPrecio.innerHTML = listaProductos[i][3];

        //creacion de botones para editar y eliminar
        let botonEditar = document.createElement('a');
        let botonEliminar = document.createElement('a');

        let iconoEditar = document.createElement('span');
        let iconoEliminar = document.createElement('span');

        botonEditar.classList.add('btn');
        botonEditar.classList.add('btn-default');

        botonEliminar.classList.add('btn');
        botonEliminar.classList.add('btn-danger');

        iconoEditar.classList.add('fa');
        iconoEditar.classList.add('fa-pencil');

        iconoEliminar.classList.add('fa');
        iconoEliminar.classList.add('fa-trash');

        botonEditar.appendChild(iconoEditar);
        botonEliminar.appendChild(iconoEliminar);

        celdaMantenimiento.appendChild(botonEditar);
        celdaMantenimiento.appendChild(botonEliminar);
    }
 }
// function filtrarTabla(){
//     let listaArticulos = obtenerListaArticulos();
//     let cuerpoTabla = document.querySelector('#tblArticulos tbody');
//     let sFiltro = inputFiltro.value.toLowerCase();
//     cuerpoTabla.innerHTML = '';

//     for(let i = 0; i < listaArticulos.length;i++){
//         let j = 0;
//         if(listaArticulos[i][1].toLowerCase().includes(sFiltro)){

//             let fila = cuerpoTabla.insertRow(j);
            
//             let campoCodigo = fila.insertCell();
//             let campoNombre = fila.insertCell();
//             let campoPrecio = fila.insertCell();
    
//             campoCodigo.innerHTML = listaArticulos[i][0];
//             campoNombre.innerHTML = listaArticulos[i][1];
//             campoPrecio.innerHTML = listaArticulos[i][2];
//             j++;
//         }
        
//     }
// }

// function limpiarFormulario(){
//     inputCodigo.value = '';
//     inputNombre.value = '';
//     inputPrecio.value = 0;
// }