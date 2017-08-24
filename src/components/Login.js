import React from 'react'
import {connect} from 'react-redux'
import {Field , reduxForm} from 'redux-form'
import {login} from '../actions/loginAction'

 class Login extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            username : 'kerim',
            password: 'lews'
        }
    };
    usernameChange(event) {
        this.setState({username: event.target.value})
      }
    passwordChange(event) {
        this.setState({password: event.target.value})
      }
    logovanje() {
       const data = {
            'username': this.state.username,
            'password' : this.state.password
        }
        console.log(data)
        this.props.logins(data)
    } 
    render(){ 
   
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.usernameChange.bind(this)}/>
                <input type="text" name="password" value={this.state.password} onChange={this.passwordChange.bind(this)}/>
                <button className="btn btn-primary" onClick={() => this.logovanje()}>login</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login.data
    }
}
const mapActiontoDispactch = (dispatch) => {
    return {
        logins: (data) => {
            dispatch(login(data))
        }
    }
}
export default connect(mapStateToProps,mapActiontoDispactch)(Login)