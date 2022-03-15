import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFolders } from '../../redux/actions'
import CardFolder from '../CardFolder/CardFolder'

const Carpetas = () => {

    const dispatch = useDispatch()
    const [bandera, setBandera] = useState(0)
    const usuario = useSelector(state => state.usuario)
    const carpetas = useSelector(state => state.carpetas)
    console.log(carpetas.Folders, "Estas son las carpetas del componente Carpetas")

    useEffect(() => {
        if (bandera === 0){
            dispatch(getFolders(usuario.id));
            setTimeout( () => {setBandera(1)}, 100)
          }
    }, [carpetas])

  return (
    <div>
      {carpetas.Folders?.map(n => <CardFolder
      name={n.folderName}
      />)}
    </div>
  )
}

export default Carpetas