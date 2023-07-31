import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'


export interface ProductButtonsProps {
    className?: string,
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { counter, increaseBy } = useContext(ProductContext)

    return (
        <div className={styles.buttonsContainer} style={style}>
            <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>-</button>
            <div className={`${styles.countLabel} ${className}`}>{counter}</div>
            <button className={`${styles.buttonAdd} ${className}`} onClick={() => increaseBy(1)}>+</button>
        </div>

    )
}