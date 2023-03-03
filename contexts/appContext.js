import React, { useContext, useState } from "react"

const appContext = React.createContext({})

const AppContextProvider = ({children}) => {

    const [navBarHidden, setNavBarHidden] = useState(false)




    const value = { navBarHidden, setNavBarHidden }
    return (
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export default AppContextProvider

export const useAppContext = () => useContext(appContext);