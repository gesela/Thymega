const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class First extends React.Component{
    render() {
        return(
            <div class = 'home'>
            <DefaultLayout >
            <a href="/tools"><img class="img" src="https://tse4.mm.bing.net/th?id=OIP.SZwrIqsgy6zmme_SIOGFbAHaEc&pid=Api&P=0&w=286&h=171.jpeg"  /></a>
            </DefaultLayout>
            </div>
            )
        }
    }
    module.exports=First