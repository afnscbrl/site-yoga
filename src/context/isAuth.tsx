import React, { useState } from 'react';

type UserContextProps = {
    children: React.ReactNode
}

type UserContextType = {
    auth: string,
    setAuth: (newState: string) => void
}

const initialValue = {
    auth: '',
    setAuth: () => { }
}

export const userContext = React.createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [auth, setAuth] = useState(initialValue.auth)
    return (
        <userContext.Provider value={{auth, setAuth}}>{children}</userContext.Provider>
    )
}


