import axios from 'axios'
export function getImages () {
    return (dispatch) => {
    axios.get('http://localhost:8080/Images?access_token=dd5d78fc-ef49-4aa3-9013-b5fdbec9048d')
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