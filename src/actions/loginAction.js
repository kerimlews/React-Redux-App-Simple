import axios from 'axios'
export function login(data){
    return (dispatch) => {
      /*  var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://www.localhost:8080/oauth/token?grant_type=password&username="+data.username+"&password="+data.password,
            "method": "POST",
            "headers": {
              "authorization": "Basic a2VyaW06bGV3cw==",
              "cache-control": "no-cache"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });*/
        axios.post('www.localhost:8080/oauth/token?grant_type=password&username='+data.username+'&password='+data.password,data,
        {headers:{
            "authorization": "Basic a2VyaW06bGV3cw==",
            "cache-control": "no-cache",
            'Content-Type': 'application/x-www-form-urlencoded'
        }})
        .then((response) => {
            console.log(response)
            dispatch({
                type: 'LOGIN',
                payload: response.access_token
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export function logout(){
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}