
      <div @men.window="console.log('EVENTO CURIOSO',$event.detail)"></div>
      <div @click="$dispatch('men', 'Hello World!')">Enviar</div>
