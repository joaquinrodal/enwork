
      CONEXION AL SERVIDOR MEDIANTE AXIOS.

      <div @click="axios.post('/datos_servidor',{'nombre':'juan jose'}).then((resp)=>{
                   datos_servidor = resp.data ; console.log('DATOS SERVIDOR :--->',resp)
                   })"
             >Buscar2</div>
                     
      <template x-for="n in datos_servidor">
        <div x-text="n.nombre"></div>
      </template>
