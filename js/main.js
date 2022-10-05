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

/*
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
                <li><a href="contacto.html">Contacto</a></li>
    
            </ul>
</nav>
</header>
`
*/
sup=`
<header>
      <div>
         <div class="col-4 col-m-12">
            <a class="brand" href="index.html"><img src="./css/imagenes/brand.png" width="55" alt="logo">Skincare</a>
         </div>
         <div class="col-8 col-m-12" >
            <ul class="menu">
               <div class="col-3 col-m-3 menu-pad" >
                  <li class="menu-li"><a href="index.html" class="menu-a">Inicio</a></li>
               </div>
               <div class="col-3 col-m-3 menu-pad">
                  <li class="menu-li" ><a href="#" class="menu-a">Cuidados de la piel</a>
                     <ul class="submenu">
                        <li class="submenu-li" ><a href="#" class="submenu-a">Piel Mixta</a></li>
                        <li class="submenu-li" ><a href="#" class="submenu-a">Piel Grasa</a></li>
                        <li class="submenu-li" ><a href="#" class="submenu-a">Piel Seca</a></li>
                        <li class="submenu-li" ><a href="#" class="submenu-a">Piel Sensible</a></li>
                        <li class="submenu-li" ><a href="#" class="submenu-a">Envejecimiento</a></li>
                        <li class="submenu-li" ><a href="#" class="submenu-a">Con Acne</a></li>
                     </ul>
                  </li>
               </div>
               <div class="col-3 col-m-3 menu-pad">
                  <li class="menu-li"><a href="ver-mas.html" class="menu-a">Aprender</li>
               </div>
               <div class="col-3 col-m-3 menu-pad ">
                  <li class="menu-li" ><a href="contacto.html" class="menu-a" >Contacto</a></li>
               </div>
         </div>  
      </div>

   </header>
`
document.write(sup)

sup=`
<footer>
         <div class="contenido-footer">    
            <a class="brand" href="index.html">
               <img src="./css/imagenes/brand.png" width="55" alt="logo">Skincare
            </a>          
            <p>Skincare es la rutina y los tratamientos que se hacen para el cuidado de la piel, permitiendo mejorar su apariencia.</p>                     
         </div>

         <div class="contenido-footer"> 
            <p>INTEGRANTES:</p>               
            <ul>
               <li><a href="contacto.html"><i class="fa-sharp fa-solid fa-user"></i>Mercedes Llanos Pontaut</a></li>
               <li><a href="contacto.html"><i class="fa-sharp fa-solid fa-user"></i>Mónica Rossi</a></li>
               <li><a href="contacto.html"><i class="fa-sharp fa-solid fa-user"></i>Micaela Ruscitto</a></li>
            </ul>
         </div>

         <div class="contenido-footer">
            <a href="">
               <img width="100px" src="./css/imagenes/codoacodo.png">
            </a>
            <p>Proyecto Codo a Codo 2022 <br>
            TPO Desarrollo Web HTML CSS y JS</p>           
         </div>
</footer>
`
document.write(sup)
