import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import {Link} from 'react-router-dom'

const AdminDashBoard = () => {

    const {user : {name , email ,role}} = isAuthenticated();                           //is Authenticated gives (returns) us a User Object

const adminLeftSide = () => {

    return (
        <div className = "card">
            <h4 className = "card-header bg-dark text-white">Admin Navigation</h4>
            <ul className ="list-group">
                <li className = "list-group-item">
                    <Link to="/admin/create/category" className = "nav-link text-success" >Create Categories</Link>
                </li>
                <li className = "list-group-item">
                    <Link to="/admin/category" className = "nav-link text-success" >Manage Categories</Link>
                </li>
                <li className = "list-group-item">
                    <Link to="/admin/create/product" className = "nav-link text-success" >Create Product</Link>
                </li>
                <li className = "list-group-item">
                    <Link to="/admin/products" className = "nav-link text-success" >Manage Product</Link>
                </li>
                <li className = "list-group-item">
                    <Link to="/admin/orders" className = "nav-link text-success" >Manage Orders</Link>
                </li>
            </ul>
        </div>
    )
}

const adminRightSide = () => {
    //mb = margin-bottom
    return(
            <div className = "card mb-4"> 
                <h4 className = "card-header"> Admin Information</h4> 
            <ul className = "list-group">
                <li className = "list-group-item">
                    <span className = "badge badge-success mr-2">Name: </span> {name}   {/* Used name from the database  line 8 above */}  
                </li>
                <li className = "list-group-item">
                    <span className = "badge badge-success mr-2">Email: </span> {email} {/* Used email from the database line 8 above */} 
                </li>  
                <li className = "list-group-item">
                    <span className = "badge badge-danger">Admin Area </span>   
                </li>    
            </ul>
            </div>    
    )
}

    return (
        <Base 
            title = "Welcome to Admin Area" 
            description = "Manage all your Products Here"
            className = "container bg-success p-4"
            >
            <div className ="row">
                <div className = "col-3">
                    {adminLeftSide()}
                </div>
                <div className = "col-9">
                    {adminRightSide()}
                </div>
            </div>
        </Base>
    );
};

export default AdminDashBoard ;  