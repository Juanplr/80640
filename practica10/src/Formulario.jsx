
import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"

function Formulario(props){
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: '',
        password: ''
    })
    const hacerPeticion = async () =>{
        try {
            const res = await axios.post('http://localhost:4567/ruta4',datosFormulario)
            return res.data
        } catch (error) {
            throw error
        }
    }
    const procesarFormulario = async (e)=>{
        e.preventDefault()
        console.log("datos Recuperados del formulario", datosFormulario)
        setCargando(true)
        try {
            const res = await hacerPeticion()
            console.log(res)
            setCargando(false)
            if(datosFormulario.nombre == res.alumno){
                console.log("El usuario Existe")
            }else{
                console.log("El usuario NO Existe")
            }
        } catch (error) {
            console.log(error);
            setCargando(false)
        }
    }
    const cambiosFormulario = (e)=>{
        const {name, value}= e.target
        setDatosFormulario({
            ...datosFormulario, [name]:value
        })
    }
    return(
        <>
        <h1>Inicio de Sesión</h1>
        <form onSubmit={procesarFormulario}>
            <Box m={5}>
                <TextField label="Nombre: " variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
            </Box>
            <Box m={5}>
                <TextField label="Contraseña: " variant="outlined" type="password" fullWidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
            </Box>
            <Box m={5}>
                <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Iniciar Sesión</Button>
            </Box>
        </form>
        </>
    )
}

export default Formulario
