import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


const product = {
    id: 'aasss',
    title: 'Taza de cafe',
    //img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage img='./coffee-mug.png' />
                    <ProductTitle title="Holaaa" />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage
