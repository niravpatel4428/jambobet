import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

const layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default layout
