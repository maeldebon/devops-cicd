import { useState } from 'react';

import './App.css';
import Router from './Router';
import { CartContext } from './utils/context';
import { ProductT } from './utils/types';

function App(): JSX.Element {
    const [productList, setProductList] = useState<ProductT[]>([]);

    return (
        <CartContext.Provider value={{ productList, setProductList }}>
            <Router />
        </CartContext.Provider>
    );
}

export default App;
