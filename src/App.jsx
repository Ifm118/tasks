import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from './pages/Signup/Signup';
import {AuthProvider} from "./context/Auth";
import Tarefas from './components/Tasks/Tarefas';

function App() {
  return (
    <AuthProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/login" element ={<Login/>} />
    <Route path="/signup" element ={<Signup/>} />
    <Route path="/tarefa" element ={<Tarefas/>} />
   </Routes>
   </BrowserRouter>
   </AuthProvider>
  )
}

export default App
