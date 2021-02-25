import Content from './Content'
import Header  from './Header'
import Footer from './Footer'
import {BrowserRouter as Router} from 'react-router-dom'


const MainLayout = (params) => {

    return (
        <Router>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </Router>
    )
}

export default MainLayout