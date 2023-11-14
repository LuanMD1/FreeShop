import React from 'react';
import Provider from './context/Provider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
    return (
        <Provider>
            <Header />
            <Main />
            <Products />
            <Cart />
        </Provider>
    );
}

export default App;