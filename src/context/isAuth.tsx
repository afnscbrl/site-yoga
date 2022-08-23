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
}

const initialValue = {
    auth: '',
    setAuth: () => { },
    user: '',
    setUser: () => { },
    alunaId: '',
    setAlunaId: () => {},
}

export const userContext = React.createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [auth, setAuth] = useState(initialValue.auth)
    const [user, setUser] = useState(initialValue.user)
    const [alunaId, setAlunaId] = useState(initialValue.alunaId)
    return (
        <userContext.Provider value={{
            auth, setAuth,
            user, setUser,
            alunaId, setAlunaId
        }}>
            {children}
        </userContext.Provider>
    )
}


