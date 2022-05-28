const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() {
        // Object Destructuring
        const { products } = this.props
        return (
            <DefaultLayout title="Index" name='THYMEGA'>
                <div>
                    <nav>
                        <a class='link' href="/products/new">Create a New Product</a>
                    </nav>
                    <ul>
                        {
                            Products.map(product => {
                                return (
                                    <li key={product._id}>
                                        <p>The <a href={`/products/${product._id}`}>{product.name}'s</a> Price is {product.price}.</p>
                                        <p>{product.isAvailable ? 'AVAILABLE' : 'NOT AVAILABLE'}</p>
                                        <form action={`/products/${products._id}?_method=DELETE`}  method="POST">
                                            <input type="submit" value="DELETE" />
                                        </form>
                                 
                                        <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
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