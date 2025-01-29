import React from 'react'
import Layout from '../../layout'
import Slidersection from './Slider'
import Dashboard from './Dashboard'

const Homepage = () => {

    return (
        <>
            <Layout>
                <Slidersection />
                <Dashboard />
            </Layout>
        </>
    )
}

export default Homepage
