import axios from 'axios'
export function getImages () {
    return (dispatch) => {
    let token = localStorage.getItem('token')
    axios.get('http://localhost:8080/Images?access_token='+token)
    .then((response) => {
        dispatch({
            type:'GET_IMAGES',
            payload: response.data
        })
    })
    .catch((error) => {
        console.log(error)
    })
   }  

}