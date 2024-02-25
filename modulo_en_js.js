//--------------------------------------------------
// ADMIN JS ALPINE JS

window.data_admin = function(){
    return {
        ...vr,
        ...api,
        ...ui,
    }
}
import vr from './variables.js?v=128'
import ui from './ui.js?v=128'
import api from './api.js?v=128'
//-----------------------------------------------------

altas.js

var altas = {
    alpine: ()=>{
        return document.body._x_dataStack[0]
    },
    ver_empleado_contratos:(id)=>{
        console.log('empleado _ id :-->',id)
        var data ={'id':id}
        window.axios.post('/admin/empleado_contratos',data)
        .then(resp =>{
             altas.alpine().empleado_contratos = resp.data
        } )
    }

}
export default altas
//------------------------------------------------------
