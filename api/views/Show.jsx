const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.product)
        const product = this.props.product
        return (
            <DefaultLayout title="Show">
                <div>
                    <p class="content">The {product.name}'s price is {product.price}.</p>
                    <p>
                        {
                            product.isAvailable
                                ?
                                "It's Available"
                                :
                                "It's not available...Check some other time"
                        }
                    </p>
                    <button><a href={'/products'}>Back</a></button>
                    <hr />
                    <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show