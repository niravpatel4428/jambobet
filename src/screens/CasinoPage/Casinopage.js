import React from 'react'
import Casino from './Casino'
import Layout from '../../layout'
import Slidersection from '../HomePage/Slider'

const Casinopage = () => {
    return (
        <>
            <Layout>
                <Slidersection/>
                <Casino />
            </Layout>
        </>
    )
}

export default Casinopage
