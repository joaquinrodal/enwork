
#------------------------------
 tenemos un modelo de usuario de sqlmodel 
 y queremos pasarlo a lista o diccionario

 usuario = db.query(Usuario).get(id)

 user = usuario.model_dump()

SQLMODEL
'construct', 'copy', 'dict', 'from_orm', 'json', 'metadata', 'parse_file', 'parse_obj', 'parse_raw', 'schema', 'schema_json', 'update_forward_refs', 'validate'
