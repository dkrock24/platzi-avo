import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout/Layout'
import fetch from 'isomorphic-unfetch';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps = async () => {

    const response = await fetch('https://platzi-avo-l9i8.vercel.app/api/avo');
    const productList = await response.json();
    
    return {
        props: {
            productList,
        }
    }
}

const Home = ({ productList }) => {
    
    return (
        <Layout>
            <KawaiiHeader />
            <ProductList products={productList.data} />
        </Layout>
    )
}

export default Home;