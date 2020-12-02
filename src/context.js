import React, {createContext, useState, useContext} from 'react'
import sublinks from './data';

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenueOpen, setIsSubmenueOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page: '', links: []})

    const openSidebar = () => setIsSidebarOpen(true)
    const closeSidebar = () => setIsSidebarOpen(false)

    const openSubmenue = (text, coordinates) => {
        const page = sublinks.find( link => link.page === text)
        setPage(page);
        setLocation(coordinates)
        setIsSubmenueOpen(true)
    } 
    const closeSubmenue = () => setIsSubmenueOpen(false)


    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenueOpen,
            openSidebar,
            openSubmenue,
            closeSidebar,
            closeSubmenue,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

