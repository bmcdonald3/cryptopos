// @ts-nocheck
import React from 'react';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';

const Paycoin: React.FC = () => {
    return (
        <>
            <div>
                <a class="buy-with-crypto"
                    href="https://commerce.coinbase.com/checkout/ea6c87e0-b035-43e8-b77b-ac5b181c3660">
                    Buy with Crypto
                </a>
                <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
                </script>
            </div>
        </>
    );
}

export default Paycoin
