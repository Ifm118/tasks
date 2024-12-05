import { useContext, useEffect, useState, createContext } from "react";
import {usuarioLogado} from "../firebase/authentication"

const AuthContext = createContext();

//AuthProvider p/ permitir o acesso o contexto

//children => todos elementos filhos
function AuthProvider({children}){
const [carregando, setCarregando] = useState(true)
const [autenticado, setAutencticado] = useState(false)
const [usuario, setUsuario] = useState(null); //null => espaço memória vazia p/ armazenar o espaço


useEffect(() => {
    usuarioLogado((usuario) => {
        setUsuario(usuario)
        setAutencticado(!!usuario)
        setCarregando(false)
    })

},[]);

    if(carregando) { 
        return (
        <div>Carregando...</div>
    );
}

return(
    <AuthContext.Provider value={{autenticado, setAutencticado, usuario}}>
        {children}
    </AuthContext.Provider>
)
}

function useAuth(){
    return useContext(AuthContext)
}

export {AuthProvider, useAuth}