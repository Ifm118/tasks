import { useState } from "react";

function Form(){

    const [nome, setNome] = useState("")

    function enviarFormulario(){
        window.alert("Formulário Enviado")
    }

    function lidarMudancaNomeTarefa(event){
        const valor = event.target.value
        setNome(valor)

    }
    return(
        <form style={{padding:"20px"}} >
            <p>{nome}</p>

            <label htmlFor="titulo">Título da Tarefa</label> <br />
            <input type="text" id="titulo" onChange={lidarMudancaNomeTarefa}/><br />

            <label htmlFor="descricao">Descrição</label> <br />
            <input type="text" id="descricao" />

            <label htmlFor="dataInicio">Data Inicio</label> <br />
            <input type="date" id="dataInicio" />

            <label htmlFor="dataFim">Data Fim</label> <br />
            <input type="date" id="dataFim" />

            <label htmlFor="status">Status</label> <br />
            <input type="text" id="status" />


            <button type="button" onClick={enviarFormulario}   >Enviar</button>
        </form>

    )
}

export default Form;