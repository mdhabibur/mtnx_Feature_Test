import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const {currentUserToken} = useSelector((state) => state.auth)
    console.log("user token: ", currentUserToken)
    
    let componentToRender

    if(currentUserToken){
        componentToRender = children
    }else {
        componentToRender = <Navigate to='/signin' />
    }

  return componentToRender
}

export default PrivateRoute