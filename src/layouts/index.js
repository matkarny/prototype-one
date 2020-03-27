import React from 'react';
import GlobalStyle from '../styles/globalStyles';
import Navbar from '../components/navbar/navbar'

const MainLayout = ({children}) => (

    <>
    <GlobalStyle />
    <Navbar />
    {children}
    </>
)

export default MainLayout