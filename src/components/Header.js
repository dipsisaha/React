import React, {Component} from 'react'
import Employee from './Employee'
import {Link} from 'react-router-dom';


class Header extends Component {

    // navigate(){
    //     Router.push("/employee")
    // }
    
    render() {
        return(
            <div class="container">
            <div class="row">
                <div class="col-sm">
                    <Link to="/employee">Employee</Link>
                </div>
                <div class="col-sm">
                About us
                </div>
                <div class="col-sm">
                Contact
                
                </div>
            </div>
            </div>
        ) 
    }

}

export default Header;