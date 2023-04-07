import { ReactElement, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../utils/context";
import { ProductT } from "../utils/types";

const Product = (): ReactElement => {
    const [product, setProduct] = useState<ProductT>();
    const { id } = useParams();
    const { productList, setProductList } = useContext(CartContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setProduct(json);
            });
    }, [id]);

    return (
        <div>
            <Link to="/">/homepage</Link>
            <Link to="/cart">/cart</Link>
            {product && (
                <>
                    <p>
                        {product.title}:{product.description}
                    </p>
                    <button
                        onClick={() =>
                            setProductList([...productList, product])
                        }
                    >
                        Add to cart
                    </button>
                </>
            )}
        </div>
    );
};

export default Product;
