const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
import Form from "react-bootstrap/Form"

module.exports = class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Edit">
                <h1>{product.name.toUpperCase()} Edit Page</h1>
                <form action={`/products/${product._id}?_method=PUT`} method="POST">
                    <div className="col-md-6">
                    <label className="mb-2 form-lable" htmlFor="name">Name:</label>
                    <input className="mb-2 form-control" type="text" id="name" name="name" defaultValue={product.name} />
                    </div>
                    <div className="col-md-6">
                    <label className="mb-2 form-lable" htmlFor="price">price:</label>
                    <input className="mb-2 form-control" type="text" id="price" name="price" defaultValue={product.price}/>
                    </div>
                    <div className="col-md-6">
                    <label className="mb-2 form-lable" htmlFor="image">Image</label>
                    <input className="mb-2 form-control" type="text" id="image" name="image" defaultValue={product.img} />
                    </div>
                    <label className="mb-2 form-lable" htmlFor="isAvailable">Is available:</label>
                    <input className="mb-2 form-control" type="checkbox" id="isAvailable" name="isAvailable" defaultChecked={product.isAvailable}/>
                    <input className="mb-2 form-control" type="submit" value="Edit Product"/>
                </form><br />
                <button><a href={"/products"}>Back</a></button>
            </DefaultLayout>
        )
    }
}
module.exports = Edit