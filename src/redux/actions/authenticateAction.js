function login(id,password){
    return (dispatch,getState)=>{
        console.log('authenticate action');
        dispatch({type:"LOGIN_SUCCESS",payload:{id,password}});


    };
}

function logout(){
    return(dispatch,getState)=>{
        console.log('logout');
        dispatch({type:"LOGOUT_SUCCESS"});
    }
}
export const authenticateAction ={login,logout};