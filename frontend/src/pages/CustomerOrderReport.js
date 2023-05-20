import React, { Component } from "react";
import Layout from "../components/LayoutCustomerOrder"
import axios from "axios";
export default class EmployeeReport extends Component {

  

    
    constructor(props) {
        super (props);

        this.state={
            Order:[],
            realCustomer:[]
        }
        

        
    }


    componentDidMount(){
        this.retrieveOrder();
   
    }


    retrieveOrder(){
        
        axios.get("http://localhost:8090/order/").then(res =>{
            if(res.data){
                this.setState({
                    Order:res.data
                });
            }
        });
        axios.get("http://localhost:8090/realCustomer/").then(res =>{
            if(res.data){
                this.setState({
                    Customer:res.data
                });
            }
        });

    }
    

   
 
    repotGen=()=>{

         window.print();

    }




    render() {
        
        return  (
            
            <Layout>
                

            <div className="container" class="p-3 mb-2 bg-secondary text-white">

                <h1><center><strong>Customer Order Report</strong></center></h1>
                <table className="table table-striped styled-table">
                    <thead class="thead-dark">
                        <tr class="text-danger">
                        <th scope="col">Index</th>  
                        <th scope="col">Customer Name</th>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Order Date</th>

                        </tr>
                    </thead>
                    <tbody>

                   

                    {this.state.Order.map((Order,index)=>(


                            <tr>
                                <td scope="row">{index + 1}</td>
                                {this.state.Customer.map((Customer)=>(
                                    <td></td>
                                ))}
            
                                
                               
                                    
                                 <td>{Order.item}</td>
                                <td>{Order.quantity}</td>
                                <td>{Order.order_date}</td>
    

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



