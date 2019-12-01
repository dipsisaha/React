import React, {Component} from 'react'
import EmployeeList from '../data/data.json'

class Employee extends Component {
    render() {
        return(
            <div>
                 <h1>Employee List :</h1>
                <table>
                            <tr>
                                <th>Emp Id</th>
                                <th>Emp Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                {
                    EmployeeList.map((list,index) => {
                        return <tr>
                            <td>{list.id}</td>
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.phone}</td>
                        </tr>
                        
                    })
                }
                </table>
            </div>
        ) 
    }

}

export default Employee;