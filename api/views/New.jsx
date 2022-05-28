const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New">
                <h1>Create Product Page</h1>
                <form action="/products" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price"/>
                    <label htmlFor="isAvailable">Is Available:</label>
                    <input type="checkbox" id="isAvailable" name="isAvailable"/>
                    <input type="submit" value="Create Product"/>
                </form>
                <button><a href="/products">Back</a></button>
            </DefaultLayout>
        )
    }
}