import React, {component} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";

let username = [{"userId":1,"username":"Ajay"},
{"userId":2,"username":"Bunty"},
{"userId":3,"username":"Chintan"},
{"userId":4,"username":"Darshan"},
{"userId":5,"username":"Rakesh"},
{"userId":6,"username":"Mayank"},
{"userId":7,"username":"Ramesh"},
{"userId":8,"username":"Suresh"},
{"userId":9,"username":"Jay"},
{"userId":10,"username":"Prem"}
]
class Developer extends React.Component{                        //Creating component 
  constructor(props){
    super(props);
    this.state= {
      data:[],
      username : 1
    }
    /* this.user={ username :
      [{"userId":1,"username":"Ajay"},
      {"userId":2,"username":"Bunty"},
      {"userId":3,"username":"Chintan"},
      {"userId":4,"username":"Darshan"},
      {"userId":5,"username":"Rakesh"},
      {"userId":6,"username":"Mayank"},
      {"userId":7,"username":"Ramesh"},
      {"userId":8,"username":"Suresh"},
      {"userId":9,"username":"Jay"},
      {"userId":10,"username":"Prem"}
    ]
    } */
  }


componentDidMount() {                                             // creating  componentDidMount
    const url = "https://jsonplaceholder.typicode.com/posts";     //Fetching data into the API
    fetch(url, {
      method:"GET"                                                //Using GET method
    }).then(response => response.json()).then(data =>{            
      this.setState({data:data})
    })
  
   
}
  
  
  render(){

      const columns = [                              //Creating columns
        {
          Header: "User Id",
          accessor:"userId" ,
          width:100,
          maxwidth:100,
          minwidth:0,
          style:{
            backgroundColor:'#ffe6e6'
          }
        },
        
        {
          Header: "Id",
          accessor:"id", 
          width:100,
          maxwidth:100,
          minwidth:0,
          style:{
            backgroundColor:'#acf0c5'
          }
        },
        {
          Header:"User Name",
          Cell:props =>{
            return(
              this.state.username===1 ? 'Ajay' :
               this.state.username===2 ? 'Bunty' : 
               this.state.username===3 ? 'Chintan' : 
               this.state.username===4 ? 'Darshan' : 
               this.state.username===5 ? 'Rakesh' : 
               this.state.username===6 ? 'Mayank' : 
               this.state.username===7 ? 'Ramesh' : 
               this.state.username===8 ? 'Suresh' : 
               this.state.username===9 ? 'Jay' : 
               this.state.username===10 ? 'Prem' : 'No name' 
            )
            
          },
          width:300,
          maxwidth:300,
          minwidth :0
        },
        {
          Header: "Post Name",
          accessor:"title", 
          sortable: false, 
          filterable : false,
          style:{
            backgroundColor:'#ffe6e6'
          }
        },
        {
          Header: "Post Description",
          accessor:"body" ,
          sortable : false,
          filterable : false,
          style:{
            backgroundColor:'#acf0c5'
          }
        }
        ]

    return(
      <div  >
        <div className="App">
            <div className="jumbotron" style={{backgroundColor:'#ffe6e6'}}>
              <h1>Welcome to Everyone...!</h1>
              <p>By: Dravid</p>
            </div>
        </div>
  
      <ReactTable
      columns = {columns}
      data={this.state.data}                          //Adding data into column
      // username={this.user.username}
      filterable
      noDataText ={"Network Error Please wait..."}    //Cannot fetch data it show error message
      defaultPageSize={10}
      >
          
      </ReactTable>
      </div>
    )
  }
}

render(
  <Developer />,document.getElementById("root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();