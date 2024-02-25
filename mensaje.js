
Ventana de 500px ancho y 60px de alto 
oculta a 200px por arriba.. y a 300px de la izquierda
y encima con apacidad 0% 

cuando a ver_mensaje = true 
aplicacmos una clase dinamicamente  donde colocamos el top a 24px y opacidad al 100% .
y con x-text = mensaje mostramos el mensaje.
donde con transition-all duration-[500ms] hacemos la transicion a 1/2 segundo.

{% include 'paginas/admin/mensaje.html'%}  

<template x-if="ver_mensaje">
    <div 
           
           class=" absolute top-[-200px]  bg-white left-[300px] h-[60px]
                   w-[500px]  border border-[1px] rounded-[5px] z-[101] opacity-[0%] transition-all duration-[500ms]"
                   :class="{'top-[24px] opacity-[100%]':ancho_mensaje}"
                   >
                  <div style="font-family: 'Roboto', sans-serif;"
                         class="text-[#db5c92] text-[16px] p-[5px] font-bold flex justify-start items-start ">

                         <svg class="mr-[20px] ml-[12px]"
                         xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        <p x-text="mensaje"></p>
                  </div>
                   
    </div>
</template>
fichero --->
api.js
     alpine: ()=>{
        return document.body._x_dataStack[0]
    },
    mostrar_mensaje:(men)=>{
        api.alpine().ancho_mensaje = true
        api.alpine().mensaje = men 
        setTimeout(()=>{
            api.alpine().ancho_mensaje = false;
        },4000)
    },
