import React, {createContext, useState, useContext} from 'react'

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isSubmenueOpen, setIsSubmenueOpen] = useState(true)

    const openSidebar = () => setIsSidebarOpen(true)
    const closeSidebar = () => setIsSidebarOpen(false)

    const openSubmenue = () => setIsSubmenueOpen(true)
    const closeSubmenue = () => setIsSubmenueOpen(false)


    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenueOpen,
            openSidebar,
            openSubmenue,
            closeSidebar,
            closeSubmenue,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

