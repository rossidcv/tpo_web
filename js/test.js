//JSON a JS
const data = `{
    
    "tSkin":[
        {
            "name": "Tratamiento de piel grasa",
            "content":"La forma correcta de tratar este tipo de pieles es..."
        },
        {
            "name": "Tratamiento de piel seca",
            "content":"La forma correcta de tratar este tipo de pieles es..."
        },
        {
            "name": "Tratamiento de piel mixta",
            "content":"La forma correcta de tratar este tipo de pieles es..."
        }
    ],
    "tAcne":[
        {
            "name": "Tratamiento del acne",
            "content": "La forma correcta de tratar este tipo de pieles es..."
        },
        {
            "name": "Prevension del acne",
            "content": "La forma correcta de prevenir este tipo de pieles es..."
        }
    ],
    "tSense":[
        {
            "name": "Cuidados para piel sensible",
            "content": "La forma correcta de cuidar este tipo de pieles es..."
        },
        {
            "name": "Cuidados para piel no sensible",
            "content": "La forma correcta de cuidar este tipo de pieles es..."
        } 
    ],
    "tOld": [
        {
            "name": "Cuidados para los signos de envejecimiento",
            "content": "La forma correcta de cuidar este tipo de pieles es..."
        },
        {
            "name": "Prevencion de arrugas",
            "content": "La forma correcta de prevenir este tipo de pieles es..."
        } 
    ]
}`
const jsonData = JSON.parse(data)

// Funcion a la que va el btn
function getSelectValue(){
    
    //Valores del test
    type  = document.getElementById("type").value; 
    sense = document.getElementById("sensitivity").value; 
    acne = document.getElementById("acne").value; 
    oldSkin = document.getElementById("oldSkin").value;
    
    //advertencia de que una posicion no fue puesta
    if (type==="none" || sense ==="none" || acne ==="none" || oldSkin==="none"){
        const warning = document.getElementById("warn")
        warning.innerHTML = `<p class="t-warn-txt" >Por favor ingrese todos los valores</p>`
        
    //Que hacer en las distintas opciones
    }else {

        //Borrar advertencia
        const warning = document.getElementById("warn")
        warning.innerHTML = ``

        //def de que posicion tomar del JSON
        if (type === "grasa"){
            t = 0
        }else if (type ==="seca"){
            t = 1
        }else{
            t = 2
        }

        if (sense === "ySens"){
            s = 0
        }else{
            s = 1
        }

        if (acne === "yAcne"){
            a = 0
        }else{
            a = 1
        }
        
        if (oldSkin === "yOld"){
            o = 0
        }else{
            o = 1
        }

        // cards con la info de que hacer
        const cards = document.getElementById("cards")
        cards.innerHTML = `
    <div class="col-6 col-m-12">
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src="./css/imagenes/t-skin.jpg" alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tSkin[t].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tSkin[t].content}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, obcaecati dolorem? Incidunt dolorem similique impedit ex distinctio, eaque molestiae a saepe temporibus maxime nesciunt modi esse blanditiis quisquam eos eligendi?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src="./css/imagenes/t-sensitive.png" alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tSense[s].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tSense[s].content}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, obcaecati dolorem? Incidunt dolorem similique impedit ex distinctio, eaque molestiae a saepe temporibus maxime nesciunt modi esse blanditiis quisquam eos eligendi?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-6 col-m-12">
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src="./css/imagenes/t-acne.jpg" alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tAcne[a].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tAcne[a].content}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, obcaecati dolorem? Incidunt dolorem similique impedit ex distinctio, eaque molestiae a saepe temporibus maxime nesciunt modi esse blanditiis quisquam eos eligendi?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="t-cardPad col-6 col-m-6 col-sm-12" >
            <div class="t-card">
                <img src="./css/imagenes/t-old.jpg" alt="Avatar" style="width:100%">
                <div class="t-card-cont">
                    <div class="t-card-title">
                        <h4>${jsonData.tOld[o].name}</h4>
                    </div>
                    <div class="t-card-txt" >
                        <p>${jsonData.tOld[o].content}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, obcaecati dolorem? Incidunt dolorem similique impedit ex distinctio, eaque molestiae a saepe temporibus maxime nesciunt modi esse blanditiis quisquam eos eligendi?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        `
    }
}


