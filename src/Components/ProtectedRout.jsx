import React from 'react'
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

function protectedRout({children, authUsers}) {
    if(!authUsers)return <Navigate to="/Login" replace={true}/>;
    return children;
}
const mapStateToPprops =(state)=>{
    return {
        authUsers: state.authReducer.loginedUsers,
    }}
export default connect(mapStateToPprops)(protectedRout);