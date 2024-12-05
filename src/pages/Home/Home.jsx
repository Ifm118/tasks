import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Tarefas from "../../components/Tasks/Tarefas";
import { buscarTsk, salvarTsk } from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/Auth";
import { Navigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import CriarTarefa from "../../components/Tasks/Tarefas";


function FormTask({ buscarTsk }) {

    const { handleSubmit, register, reset } = useForm();

    async function salvarTask(dados) {
        await salvarTsk(dados);
        buscarTsk();
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(salvarTsk)}>
            <Form.Group className="mb-3" controlId="titulo">
                <Form.Label>Titulo da Tarefa</Form.Label>
                <Form.Control type="text" {...register("titulo")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descrição</Form.Label>
                <Form.Control type="text" {...register("descricao")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dataInicio">
                <Form.Label>Data de Inicio</Form.Label>
                <Form.Control type="date" {...register("dataInicio")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dataFim">
                <Form.Label>Data do Fim</Form.Label>
                <Form.Control type="date" {...register("dataFim")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" {...register("status")} />
            </Form.Group>
            <Button type="submit">Criar</Button>
        </Form>
    );
}


function Home() {

    const [tarefas, setTasks] = useState([]);
    const { autenticado } = useAuth();

    async function buscarTasks() {
        const tarefa = await buscarTsk()
        setTasks(tarefas);
    }

    useEffect(() => {
        buscarTasks();
    }, []);

    // bloqueador
    if (!autenticado) return <Navigate to="/login" />;

    ///corrigir task.map
    return (
        <div>
            <Header />
            <Container>

                <h1>Home</h1>

                <FormTask buscarTasks={buscarTsk} />
                
                {tarefas.map(tarefa => {
                    return <Task {...tarefa} key={tarefa.id} buscarTarefas={buscarTsk} />
                })}

            </Container>
            <Footer />
        </div>
    )
}

export default Home;