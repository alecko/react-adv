import { ProductProps } from "../components/ProductCard"
import { ImageProps } from "../components/ProductImage"
import { ProductTitleProps } from "../components/ProductTitle"
import { ProductButtonsProps } from '../components/ProductButtons';


export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}