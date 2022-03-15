import React, { useState } from 'react'
import style from '../FormCarpetas/FormCarpetas.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { createFolder, getFolders } from '../../redux/actions'

const FormCarpetas = () => {

    const dispatch = useDispatch();

    const id = useSelector(state => state.usuario)
    const usuario = useSelector(state => state.usuario)

    const [carpeta, setCarpeta] = useState({
        recruiterId: id.id,
        folderName: ''
    })

    const handleChange = (e) => {
        setCarpeta({...carpeta, [e.target.name]: e.target.value})
    } 

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(createFolder(carpeta))
    }



  return (
        <form  className={style.container} onSubmit={handleSumbit}>

            <input
            className={style.input}
            type='text'
            value={carpeta.folderName}
            name='folderName'
            placeholder='Nombre carpeta'
            onChange={handleChange}
            />

            <button
            type='submit'
            />
            
        </form>
  )
}

export default FormCarpetas
