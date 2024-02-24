

 x-init="console.log('cargado htmx',htmx.version);htmx.process($refs.contenido);htmx.process($refs.contenido2); cargar();"
   
       <div x-ref="contenido2"
            hx-post="/datos_servidor2" hx-target="#resultado" hx-trigger="click">enviar</div>
              
      <div id="resultado"></div>
              
      <div  x-ref="contenido"
            id="nuevo-contenido"
            hx-target="this" hx-post="/datos_servidor2" hx-trigger="every 10s"></div>
