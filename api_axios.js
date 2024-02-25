
explicar esto
//-------------------------------------------------------
    api:(url,data,destino,tab,fn)=>{
     
        window.axios.post(url,data)
        .then(resp=>{
            if(fn){
                api.alpine()[fn]()
            }
            console.log('API RESULTADO :',resp.data)
            if(destino){
                api.alpine()[destino] = resp.data
            }
            if(tab){
                api.alpine().tab = tab
            }
            
        })
    },
//-------------------------------------------------------
