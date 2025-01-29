import React, { useEffect, useState } from 'react'
import Layout from '../../layout'
import Slidersection from './Slider'
import Dashboard from './Dashboard'
import mobilelight from "../../images/mobilelight.svg";
import mobiledark from "../../images/mobiledark.svg";

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
