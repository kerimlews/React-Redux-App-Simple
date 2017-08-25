import React from 'react'
import {connect} from 'react-redux'
import {getImages} from '../actions/imagesAction'
import PropTypes from 'prop-types'; 
import axios from 'axios'
class Images extends React.Component{
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillMount(){
        let token = localStorage.getItem('token')
        console.log(token.length)
        if(token !='' || token != null || token != undefined || token.length == 36)
            {
                axios.post('http://www.localhost:8080/check_token?token='+token,{'username':'kerim','password':'lews'},{headers: {
                    "authorization": "Basic a2VyaW06bGV3cw==",
                    "cache-control": "no-cache"
                }})
                .then((response) => {
                    console.log(response.user_name)
                    if(response.user_name){}else{ console.log('nema imena'); this.context.router.history.push('login')}
                }).catch((error) => {this.context.router.history.push('login')})
            }else{
                console.log('nema tokena')
                this.context.router.history.push('login')
            }
        this.props.getImage()
    }
    render(){
        return(
            <div>
                {this.props.images.map((image) => {
                    return (
                        <div key={image.id}>
                            <h1>{image.id}</h1>
                            <h1>{image.name}</h1>
                            <h1>{image.user.username}</h1>
                            <h1>{image.user.password}</h1>
                            <h1>{image.user.role}</h1>
                        </div>
                    )
                })}
               <button type="button" className="btn btn-outline-success" onClick={()=>this.props.getImage()}>GET IMAGES</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        images: state.images.data
    }
}
const mapActiontoProps = (dispatch) => {
    return {
        getImage: () => {
            dispatch(getImages())
        }
    }
}
export default connect (mapStateToProps,mapActiontoProps)(Images)