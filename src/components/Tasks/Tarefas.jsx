import { useState } from "react";
import "./style.css";
import Titulo from "../Titulo/Titulo";
import { editarTsk, removerTsk } from "../../firebase/firestore";
import { Button, Card } from "react-bootstrap";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";


function CriarTarefa(props) {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    async function salvarTarefa({ titulo, descricao, dataInicio, dataFim, status }) {
        try {
            const tarefa = await cadastrar(titulo, descricao, dataInicio, dataFim, status);
            await salvarTsk({
                titulo, descricao, dataInicio,dataFim, status,
                authId: tarefa.id
            });
            navigate("/login");
        } catch (erro) {
            window.alert("Algo deu errado.");
            console.error(erro);
        }
    }

    return (
        <div>
            <Header />
            <Container>
                <h1>Cadastre a tarefa </h1>

                <form onSubmit={handleSubmit(salvarTarefa)}>
                   <table border="2">
                   <tbody>
                    {tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.dataInicio}</td>
                            <td>{tarefa.dataFim}</td>
                            <td>{tarefa.status}</td>
                            <td>
                                <button type="button" onClick={() => removerTsk(tarefa.id)}>
                                    Excluir
                                </button>
                            </td>
                            <td>
                                <button type="button" onClick={() => editarTsk(tarefa.id)}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                   </table>
                    <div>
                        <label htmlFor="titulo">titulo</label>
                        <input type="text" id="titulo" {...register("titulo")} />
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" id="descricao" {...register("descricao")} />
                    </div>
                    <div>
                        <label htmlFor="dataInicio">Data Inicio</label>
                        <input type="date" id="dataInicio" {...register("dataInicio")} />
                    </div>

                    <div>
                        <label htmlFor="dataFim">Data Fim</label>
                        <input type="date" id="dataFim" {...register("dataFim")} />
                    </div>

                    <div>
                        <label htmlFor="status">Status</label>
                        <input type="text" id="status" {...register("status")} />
                    </div>

                    <Button type="submit">Criar</Button>
                </form>
            </Container>
        </div>
    );
}
export default CriarTarefa;


