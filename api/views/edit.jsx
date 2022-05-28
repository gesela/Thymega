const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Edit">
                <h1>{product.name.toUpperCase()} Edit Page</h1>
                <form action={`/products/${product._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={product.name} />
                    <label htmlFor="price">price:</label>
                    <input type="text" id="price" name="price" defaultValue={product.price}/>
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="image" />
                    <label htmlFor="isAvailable">Is available:</label>
                    <input type="checkbox" id="isAvailable" name="isAvailable" defaultChecked={product.isAvailable}/>
                    <input type="submit" value="Edit Product"/>
                </form><br />
                <button><a href="/products">Back</a></button>
            </DefaultLayout>
        )
    }
}