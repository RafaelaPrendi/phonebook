import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AddForm, SearchForm, Header, Editbtn, Deletebtn, Footer}  from './components';

import axios from 'axios';
import Table from './table';
//import Table  from './tbl';

const data =
  [{
    "id": 1,
    "first_name": "Alanson",
    "last_name": "Hitcham",
    "type": "work",
    "number": "786-146-6142"
}, {
    "id": 2,
    "first_name": "Daria",
    "last_name": "Oxe",
    "type": "work",
    "number": "743-807-2916"
}, {
    "id": 3,
    "first_name": "Eamon",
    "last_name": "Jurges",
    "type": "home",
    "number": "272-181-9349"
}, {
    "id": 4,
    "first_name": "Lacie",
    "last_name": "Briscoe",
    "type": "home",
    "number": "465-151-6005"
}, {
    "id": 5,
    "first_name": "Marillin",
    "last_name": "Barwis",
    "type": "work",
    "number": "266-695-9472"
}, {
    "id": 6,
    "first_name": "Eveline",
    "last_name": "Scholz",
    "type": "home",
    "number": "679-191-6334"
}, {
    "id": 7,
    "first_name": "Dulciana",
    "last_name": "Dudleston",
    "type": "home",
    "number": "353-976-8391"
},];
class App extends Component{
    state = {
      contacts: [],
    }
    componentDidMount(){
      let data;
      axios.get("http://localhost:8000/api/phonebook/")
      .then(res =>{
        data = res.data;
        this.setState({
          contacts: data
        });
      }).catch((err) =>console.log(err));
    };
  
handleInput = (e) =>{
  this.setState({
    [e.target.name]: e.target.value, 
  });
}
handleSubmit = (e) =>{
  e.preventDefault();
  axios.post("http://localhost:8000/api/phonebook/",
  {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    type: this.state.type,
    number: this.state.number,
  }).then((res) =>{
    this.setState(
      {
        first_name: "",
        last_name: "",
        type: "",
        number: "",
      }
    );
  }).catch((err) => console.log(err));
};

  render(){
    console.log(this.state.contacts);
    return ( 
      <React.Fragment>
        <div className="row container">
           <Header />
        </div>
        <div className="row tbl">
            <div className="col s6">
              <div className="row">
               <Table data={data} />
              </div>
              <div className="row">
                    <div className="col s3">
                      <Editbtn/>
                    </div>
              <div className="col s3">
                <Deletebtn/>
              </div>
              </div>
            </div>
            <div className="col s6">
                <div className="row form">
                  <AddForm data={this.handleSubmit} val={this.handleInput}  />
                </div>
                <div className="row form">
                  <SearchForm />
                </div>
          </div>
        </div>

       <Footer /> 
      </React.Fragment>
     
    );
  }
    
}

export default App;