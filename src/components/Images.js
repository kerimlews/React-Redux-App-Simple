import React from 'react'
import {connect} from 'react-redux'
import {getImages} from '../actions/imagesAction'
class Images extends React.Component{
    componentWillMount(){
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