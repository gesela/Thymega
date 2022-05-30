const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() {
        // Object Destructuring
        const { products } = this.props
        return (
            <DefaultLayout title="THYMEGA TOOLS SHOP" name='THYMEGA'>
                <div>
                    <div class="container sticky-top">
                        <nav class="navbar navbar-expand-sm navbar-light bg-light">
                            <a href="/products/new">Create a New Product</a>
                        </nav>
                    </div>
                    <ul class="d-flex flex-column mb-3 flex-wrap" style={{height:"100vh"}}>
                        {
                            Products.map(product => {
                                return (
                                    <li key={product._id} class="d-flex p-3 bg-info m-1 rounded-3 justify-content-around">
                                        <div class="d-flex flex-column">
                                            <p>Product: <a href={`/products/${product._id}`}>{product.name}</a> </p>
                                            <p>Price is ${product.price}.</p>
                                            <p>{product.isAvailable ? 'AVAILABLE' : 'NOT AVAILABLE'}</p>
                                        </div>
                                        <a href={`/products/${product._id}`}> <img src={product.img} alt="Tools" /></a>
                                        <form action={`/products/${products._id}?_method=DELETE`}  method="POST">
                                            <button class="btn btn-primary"  type="submit" value="DELETE">DELETE</button> 
                                        </form>
                                 
                                        <button class="btn btn-primary"><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index