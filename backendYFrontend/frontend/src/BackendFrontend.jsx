import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"

function BackendFrontend(props){
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        apellido: ''
    })
    const hacerPeticion = async (ex) =>{
        try {
            if(ex==1){
                const res = await axios.get('http://localhost:4567/crear',{params:datosUsuario})
                return res.data
            }
            if(ex==2){
                const res = await axios.post('http://localhost:4567/leer',{params:datosUsuario})
                return res.data
            }
            if(ex==3){
                const res = await axios.get('http://localhost:4567/actualizar',{params:datosUsuario})
                return res.data
            }
            if(ex==4){
                const res = await axios.delete('http://localhost:4567/eliminar',{params:datosUsuario})
                return res.data
            }
        } catch (error) {
            throw error
        }
    }
    const crearU = async (e)=>{
        e.preventDefault()
        try {
            const res = await hacerPeticion(1)
            console.log(res)
            
        } catch (error) {
            console.log(error);
        }
    }
    const leerU = async (e)=>{
        e.preventDefault()
        try {
            const res = await hacerPeticion(2)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    const actualizarU = async (e)=>{
        e.preventDefault()
        //console.log("datos Recuperados del formulario", datosUsuario)
        try {
            const res = await hacerPeticion(3)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    const  eliminarU= async (e)=>{
        e.preventDefault()
        try {
            const res = await hacerPeticion(4)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    const cambiosFormulario = (e)=>{
        const {name, value}= e.target
        setDatosUsuario({
            ...datosUsuario, [name]:value
        })
    }
    return(
        <>
        <h1>Inicio de Sesión</h1>
        <form>
            <Box m={5}>
                <TextField label="Nombre: " variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosUsuario.nombre}></TextField>
            </Box>
            <Box m={5}>
                <TextField label="Apellido: " variant="outlined"  fullWidth onChange={cambiosFormulario} name="apellido" value={datosUsuario.apellido}></TextField>
            </Box>
            <div>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={crearU}> Crear</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={leerU}>Leer</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={actualizarU}>Actualizar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={eliminarU}>Borrar</Button>
                </Box>
            </div>
        </form>
        </>
    )
}

export default BackendFrontend