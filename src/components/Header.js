import React from 'react'
import {BrowserRouter as Router , Link, Route, browserHistory} from 'react-router-dom'
import {Home} from './Home'
import Images from './Images'
import Login from './Login'

export class Header extends React.Component {
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <div>  
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">KerimReact</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/images">Images</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-primary">Login</button>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
                <hr /> 
                <div> 
                    <Route exact path="/" component={Home}/>
                    <Route path="/images" component={Images}/>
                    <Route path="/login" component={Login}/>
                </div>
                </div>
                </Router>
            </div>
        )
    }
}