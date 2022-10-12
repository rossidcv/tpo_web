//JSON a JS
const data = `{
    
    "tSkin":[
        {
            "name": "Tratamiento de piel grasa",
            "content":"Si tu piel es grasa debes prestar atención a tus lavados lo recomendable es realizar uno por la mañana y otro por la noche como así también máximo dos exfoliaciones a la semana.  Los productos hidratantes deben ser en gel y no utilizar solo aquellos que sean matificantes o tendientes a secar la piel, ya que provocaran el efecto contrario debido a que la misma comenzará a producir más grasa para contrarrestar el efecto."
            
        },
        {
            "name": "Tratamiento de piel seca",
            "content":"Es importante que las lociones, cremas o bálsamos que uses para hidratar tu piel después del baño contengan lípidos fisiológicos, como las ceramidas, el colesterol y los ácidos grasos esenciales como el ácido hialurónico. También se recomienda que tengan otros activos que aporten o retengan la humedad."
        },
        {
            "name": "Tratamiento de piel mixta",
            "content":"En el caso de utilizar solo un producto hidratante buscar aquellos que sean libres de aceites para poder usarlos en la zona T. En casos que sientas la piel tirante o reseca después de la hidratación en la zona de las mejillas puedes reforzar con otra crema hidratante que contenga coenzima Q10 y/o resveratrol."
        }
    ],
    "tAcne":[
        {
            "name": "Tratamiento del acne",
            "content": "Lo primero que debes evaluar en caso de tener acné es su causa, por lo cual lo recomendable es acudir a un dermatólogo que pueda abordar el problema de forma profunda y el mismo te recetará los productos adecuados para realizar tu rutina de skincare"
        },
        {
            "name": "Prevension del acne",
            "content": "La forma correcta de prevenir el acné es usando productos seborreguladores como el ácido glicólico o el ácido salicílico. No se recomienda el uso de mascarillas peel off para quitar los puntos negros lo mejor es prevenirlos manteniendo los poros limpios"
        }
    ],
    "tSense":[
        {
            "name": "Cuidados para piel sensible",
            "content": "Si tu piel es sensible, algunos de los mejores activos son la niacinamida que ayuda a reparar la barrera cutánea, la centella asiática, calmante y cicatrizante, además de ayudar a mantener la humedad en la piel, el pantenol, con propiedades hidratantes, emolientes y antiinflamatorias"
        },
        {
            "name": "Cuidados para piel no sensible",
            "content": "Si tu piel no es sensible no significa que debas prestarle menos atención a su cuidado. No olvidez cuidar la barrera cutánea usando productos acordes a tu tipo de piel y siempre protegerla del sol"
        } 
    ],
    "tOld": [
        {
            "name": "Cuidados para los signos de envejecimiento",
            "content": "En el caso de poseer signos de envejecimiento se recomienda usar productos con activos como el ácido hialurónico, retinol y vitamina c. El retinol es uno de los ingredientes antiedad más recomendados por los dermatólogos, ya que Complementa el proceso de renovación de la superficie de la piel minimizando la apariencia de las manchas de la edad y la vitamina C recupera la luminosidad de la misma"
        },
        {
            "name": "Prevencion de arrugas",
            "content": "Un factor muy importante para prevenir arrugas y signos de envejecimiento es la protección solar. Los rayos UVA y UVB favorecen la aparición de las temidas manchas, así como la activación de metaloproteasas que degradan la matriz (fibras de colágeno, elastina y de ácido hialurónico), generando como consecuencia la aparición de las temidas arrugas. Además, los rayos solares favorecen la generación de radicales libres que atacan a diferentes componentes de las células de la piel, destruyendo las fibras de colágeno. "
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
                        <p>${jsonData.tSkin[t].content}. </p>
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
                        <p>${jsonData.tSense[s].content}. </p>
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
                        <p>${jsonData.tAcne[a].content}. </p>
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
                        <p>${jsonData.tOld[o].content}. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        `
    }
}


