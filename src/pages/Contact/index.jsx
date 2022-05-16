import { useState } from "react";

//styled-components
import FormDiv from './Form-style';
import HeaderH1 from "../../components/Text/Headers/HeaderH1/HeaderH1";

//containers
import Main from "../../containers/Main/Main";
import Header from "../../containers/Header/Header";


const Contact = ()=>{
    const [formMessage,setFormMessage] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const handleForm = (e) => {
        const updateMessage = {
            ...formMessage,
            [e.target.name]:e.target.value
        }
        setFormMessage(updateMessage);
        
        console.log(errorMessage);
    }

    const sendForm = () => {
        setErrorMessage('');
        let errores = '';
        if(formMessage.nombre === ''){
            errores+="nombre ";
        }
        if(formMessage.email === ''){
            errores+="email ";
        }
        if(formMessage.mensaje === ''){
            errores+="mensaje"
        }
        if(errores !== ''){
            setErrorMessage(`El campo `+ errores +` no puede estar vacío`);
        }else{

        }
        console.log(errorMessage);
    }
    return(
        <Main>
        <Header/>
        <FormDiv>
            <HeaderH1>Pagina de contacto</HeaderH1>
            <form>                
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre y Apellido" 
                    onBlur={(e)=>handleForm(e)}
                    /><br></br>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Correo" 
                    onBlur={(e)=>handleForm(e)}
                    /><br></br>
                <textarea 
                    name="mensaje" 
                    cols="30" 
                    rows="10"                    
                    placeholder='Mensaje'
                    onBlur={(e)=>handleForm(e)}
                    /><br></br>
                <span onClick={()=>sendForm()}>Enviar</span>
                <br></br>
                {errorMessage !== "" &&
                    <>
                        <label>{errorMessage && (errorMessage) }</label>
                        <br></br>
                    </>
                }
                
                
            </form>
        </FormDiv>
        </Main>        
    );
};

export default Contact;