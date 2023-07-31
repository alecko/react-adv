import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import noimage from '../assets/no-image.jpg'

import styles from '../styles/styles.module.css'


export interface ImageProps {
    img?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({ img = '', className, style }: ImageProps) => {

    const { product } = useContext(ProductContext)
    let imageToShow: string

    if (img) {
        imageToShow = img
    } else if (product.img) {
        imageToShow = product.img
    } else {
        imageToShow = noimage
    }

    return (
        <img className={`${styles.productImg} ${className}`} style={style} src={imageToShow} alt="coffee" />
    )
}