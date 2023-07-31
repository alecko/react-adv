import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: 'aasss',
    title: 'Taza de cafe',
    //img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div className="bg-dark">
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}
                    className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}
                    className="bg-dark text-white" >
                    <ProductImage img='./coffee-mug.png' className="custom-image" />
                    <ProductTitle title="Holaaa" className="text-bold" />
                    <ProductButtons className="custom-button" />
                </ProductCard>

                <ProductCard product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}

                >
                    <ProductImage style={{
                        width: '50px'
                    }

                    } />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>


            </div>
        </div>
    )
}

export default ShoppingPage
