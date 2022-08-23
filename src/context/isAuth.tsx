import React, { useState } from 'react';

type UserContextProps = {
    children: React.ReactNode
}

type UserContextType = {
    auth: string,
    setAuth: (newState: string) => void,
    user: string,
    setUser: (newState: string) => void,
    alunaId: string,
    setAlunaId: (newState: string) => void,  
    categoria: string,
    setCategoria: (newState: string) => void,  
}

const initialValue = {
    auth: '',
    setAuth: () => { },
    user: '',
    setUser: () => { },
    alunaId: '',
    setAlunaId: () => {},
    categoria: '',
    setCategoria: () => {},
}

export const userContext = React.createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [auth, setAuth] = useState(initialValue.auth)
    const [user, setUser] = useState(initialValue.user)
    const [alunaId, setAlunaId] = useState(initialValue.alunaId)
    const [categoria, setCategoria] = useState(initialValue.categoria)
    return (
        <userContext.Provider value={{
            auth, setAuth,
            user, setUser,
            alunaId, setAlunaId,
            categoria, setCategoria
        }}>
            {children}
        </userContext.Provider>
    )
}


