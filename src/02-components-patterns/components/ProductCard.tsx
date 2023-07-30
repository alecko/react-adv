import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductProps } from '../interfaces/Interfaces';

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductProps) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            increaseBy, counter, product
        }}>
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseHandler={increaseBy} /> */}
            </div>
        </Provider>
    )
}


