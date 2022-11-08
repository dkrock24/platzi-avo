import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export default function ProductItem(request, response) {

    //const router = useRouter();

    const [product, setProduct] = useState([]);

    const {
        query: { id },
    } = useRouter();


    useEffect(() => {
        window
            .fetch('../api/avo/' + id)
            .then((response) => response.json())
            .then(({ data, length }) => {
                setProduct(data)
            })
    }, []);

    return (
        <Layout>
            {product == null ? null : <ProductSummary product={product} />}
        </Layout>

    )
}
