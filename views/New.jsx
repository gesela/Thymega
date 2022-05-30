const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New">
                <h1>Create Product Page</h1>
                <form class="row g-2" action="/products" method="POST">
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="name">Name:</label>
                    <input class="mb-2 form-control" type="text" id="name" name="name"/>
                    <label class="mb-2 form-label" htmlFor="price">Price:</label>
                    <input class="mb-2 form-control" type="text" id="price" name="price"/>
                    </div>
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="productImage">Image URL:</label>
                    <input class="mb-2 form-control" type="file" id="productImage" name="productImage" />
                    </div>
                    <label class="mb-2 form-label" htmlFor="isAvailable">Is Available:</label>
                    <input class="mb-2 form-control" type="checkbox" id="isAvailable" name="isAvailable"/>
                    <input class="mb-2 form-control"type="submit" value="Create Product"/>
                </form>
                <button><a href="/products">Back</a></button>
            </DefaultLayout>
        )
    }
}