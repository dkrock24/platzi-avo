import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
    // Generate static pages using the products ids
    const response = await fetch('https://platzi-avo-l9i8.vercel.app/api/avo');
    const productList = await response.json();

    const paths = productList.data.map((avo) => ({
        params: {
            id: avo.id
        }
    }));

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    let id = params.id;

    const response = await fetch(`https://platzi-avo-l9i8.vercel.app/api/avo/${id}`);
    const product = await response.json();

    return {
        props: {
            product,
            id
        }
    }
}

export default function ProductItem({ product, id }) {

    return (
        <Layout>
            {product == null ? null : <ProductSummary product={product.data} />}
        </Layout>

    )
}
