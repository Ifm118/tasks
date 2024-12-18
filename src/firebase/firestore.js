import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    documentId,
    getDocs,
    getFirestore,
    updateDoc
  } from "firebase/firestore";
  import app from "./firebase.config";
  
  const db = getFirestore(app);
  
  // addDoc
  // getDocs
  // getDoc
  // updateDoc
  // deleteDoc
  
  async function salvarTsk(dados) {
    const tarefas = collection(db, "tarefas");
    await addDoc(tarefas, dados);
    console.log("Tarefa criada.");
  }
  
  async function buscarTsk() {
    const tarefas = collection(db, "tarefas");
    const resultados = await getDocs(tarefas);
    const objetos = [];
    resultados.forEach(documento => {
        const tarefa = documento.data();
        tarefa.id = documento.id;
        objetos.push(tarefa);
    });
    return objetos;
  }
  
  async function removerTsk(id) {
    const tarefas = collection(db, "tarefas");
    const documento = doc(tarefas, id);
    await deleteDoc(documento);
  }
  
  async function editarTsk(id, dados) {
    const tarefas = collection(db, "tarefas");
    const documento = doc(tarefas, id);
    await updateDoc(documento, dados);
  }
  
  async function salvarUs(dados) {
    const usuarios = collection(db, "usuarios");
    await addDoc(usuarios, dados);
    console.log("Usuário criado.");
  }
  
  async function buscarUs() {
    const usuarios = collection(db, "usuarios");
    const resultados = await getDocs(usuarios);
    const objetos = [];
    resultados.forEach(doc => {
        const usuario = doc.data();
        usuario.id = doc.id;
        objetos.push(usuario);
    });
    return objetos;
  }
  
  async function removerUs(id) {
    const usuarios = collection(db, "usuarios");
    const documento = doc(usuarios, id);
    await deleteDoc(documento);
  }
  
  async function editarUs(id, dados) {
    const usuarios = collection(db, "usuarios");
    const documento = doc(usuarios, id);
    await updateDoc(documento, dados);
  }



  
  export {
    buscarTsk,
    salvarTsk,
    removerTsk,
    editarTsk,
    salvarUs,
    buscarUs,
    removerUs,
    editarUs,

  };