import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

const Home = () => {

    const [productList, setProduct] = useState([]);

    useEffect(() => {
        window
            .fetch('/api/avo')
            .then((response) => response.json())
            .then(({ data, length }) => {
                setProduct(data)
            })
    }, []);


    return (
        <Layout>
            <KawaiiHeader />
            <ProductList products={productList} />
        </Layout>
    )
}

export default Home;