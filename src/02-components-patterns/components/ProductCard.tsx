import { CSSProperties, ReactElement, createContext } from 'react'
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/Interfaces';

import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties
}

export const ProductCard = ({ product, children, className, style }: ProductProps) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            increaseBy, counter, product
        }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider >
    )
}


