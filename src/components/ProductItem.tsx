import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ProductItemProps {
    id: number;
    title: string;
    price: string;
}

const ProductItem = ({ id, title, price }: ProductItemProps): ReactElement => {
    return (
        <div>
            <Link to={`/product/${id}`}>{title}</Link>
            <p>{price}</p>
        </div>
    );
};

export default ProductItem;
