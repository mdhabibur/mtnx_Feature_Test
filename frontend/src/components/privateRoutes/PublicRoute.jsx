import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const {currentUserToken} = useSelector((state) => state.auth)
    console.log("user token: ", currentUserToken)

    let componentToRender

    if(currentUserToken){
        componentToRender = <Navigate to='/dashboard' />
    }else {
        componentToRender = children
    }

  return componentToRender
}

export default PublicRoute