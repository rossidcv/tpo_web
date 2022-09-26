// sup = `
// <header>                
// <a class="brand" href="index.html">
// <img src="./css/imagenes/brand.png" width="55" alt="logo">Skincare
// </a>               
// <nav>            
// <ul>                      
//     <li><a class="active" href="index.html">Inicio</a></li>
//     <li><a href="#">Cuidados de la piel</a></li>
//     <li><a href="#">Aprender</a></li>
//     <li><a href="contacto.html">Contacto</a></li>
// </ul>    
// </nav>        
//     </header>
// `


sup=`
<header>
<a class="brand" href="index.html">
 <img src="./css/imagenes/brand.png" width="55" alt="logo">Skincare
 </a>    
 <nav class="navegacion">
          
            <ul class="menu">
           
                <li><a href="index.html">Inicio</a></li>
                <li><a href="#">Cuidados de la piel</a>
                        <ul class="submenu">
                        <li><a href="#">Piel Mixta</a></li>
                        <li><a href="#">Piel Grasa</a></li>
                        <li><a href="#">Piel Seca</a></li>
                        <li><a href="#">Piel Sensible</a></li>
                        <li><a href="#">Envejecimiento</a></li>
                        <li><a href="#">Con Acne</a></li>
                        </ul>
                </li>
                <li><a href="ver-mas.html">Aprender</li>
                <li><a href="#cuenta">Contacto</a></li>
    
            </ul>
</nav>
</header>
`
document.write(sup)

