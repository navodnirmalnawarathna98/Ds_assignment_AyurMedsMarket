import React, { Component } from "react";
import Layout from "../components/LayoutEmployee";
import axios from "axios";
export default class EmployeeReport extends Component {

    constructor(props) {
        super (props);

        this.state={
            Employee:[]
        };
    }


    componentDidMount(){
        this.retrieveEmployee();
    }


    retrieveEmployee(){
        
        axios.get("http://localhost:8090/employee/").then(res =>{
            if(res.data){
                this.setState({
                    Employee:res.data
                });
            }
        });

    }

   
 
    repotGen=()=>{

         window.print();

    }




    render() {

        return (
            <Layout>

            <div className="container" class="p-3 mb-2 bg-secondary text-white">

                <h1><center><strong>Employe Salary and Leave Report</strong></center></h1>
                <table className="table table-striped styled-table">
                    <thead class="thead-dark">
                        <tr class="text-danger">
                        <th scope="col">Index</th>  
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Employee Type</th>
                        <th scope="col">Leave Taken</th>

                        </tr>
                    </thead>
                    <tbody>

                    {this.state.Employee.map((Employee,index)=>(


                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{Employee.name}</td>
                                 <td>{Employee.email}</td>
                                <td>{Employee.salary}</td>
                                <td>{Employee.branch}</td>
                                <td>{Employee.empType}</td>
                                <td>{Employee.leaveTaken}</td>


                            </tr>

                        ))}



                    </tbody>

            

                </table>

            <center><button class="employee-btn" type="button" onClick={this.repotGen} >Print</button></center>

            </div>
</Layout>

        )
    }

}



