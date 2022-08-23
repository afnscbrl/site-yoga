import React, { useState } from 'react';

type UserContextProps = {
    children: React.ReactNode
}

type UserContextType = {
    alunaId: string,
    setAlunaId: (newState: string) => void,    

}

const initialValue = {
    alunaId: '',
    setAlunaId: () => {},

}

export const admUserContext = React.createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps)=> {
    const [alunaId, setAlunaId] = useState(initialValue.alunaId)

    return (
        <admUserContext.Provider value={{alunaId, setAlunaId}}>{children}</admUserContext.Provider>
    )
}