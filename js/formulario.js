const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input')   // guardo todos los inputs

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^\d{7,14}$/, // 7 a 14 numeros.
   
}

const campos ={
    nombre: false,
    apellido: false,
    email: false,
    tel: false,
   
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
                break;

        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido')
            break;

        case "email":
            validarCampo(expresiones.email, e.target, 'email')
            break;

        case "tel":
            validarCampo(expresiones.tel, e.target, 'tel')
            break;

    
    }
}

const validarCampo= (expresion, input, campo)=>{
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo]=true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo]=false;
    }
} 

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);  // cuando suelte la tecla
    input.addEventListener('blur', validarFormulario);  //cuando haga un click afuera
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    
    if(campos.nombre && campos.apellido && campos.email && campos.tel){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(()=>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
       
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        setTimeout(()=>{
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        }, 5000);

        document.querySelectorAll('.formulario__grupo-incorrecto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-incorrecto');
		});
    }

})


