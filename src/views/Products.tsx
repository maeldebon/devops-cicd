import { ReactElement, useEffect, useState } from 'react';

import ProductItem from '../components/ProductItem';
import { ProductT } from '../utils/types';

const Products = (): ReactElement => {
    const [products, setProducts] = useState<ProductT[]>([]);
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setProducts(json);
            });
    }, []);

    return (
        <>
            {products
                .slice((pagination - 1) * 5, pagination * 5)
                .map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            <button
                onClick={() => setPagination(pagination - 1)}
                disabled={pagination === 1}
            >
                Previous page
            </button>
            <button onClick={() => setPagination(pagination + 1)}>
                Next page
            </button>
        </>
    );
};

export default Products;
