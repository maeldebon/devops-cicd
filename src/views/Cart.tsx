import { ReactElement, useContext } from 'react';

import { Link } from 'react-router-dom';

import { CartContext } from '../utils/context';

const Cart = (): ReactElement => {
    const { productList, setProductList } = useContext(CartContext);

    return (
        <>
            <Link to="/">Homepage</Link>
            {productList.map((product) => (
                <div key={product.id}>
                    <p>{product.title}</p>
                    <button
                        onClick={() => {
                            const filteredArray = productList.filter(
                                (prod) => prod.id !== product.id
                            );
                            setProductList(filteredArray);
                        }}
                    >
                        remove from cart
                    </button>
                </div>
            ))}
        </>
    );
};

export default Cart;
