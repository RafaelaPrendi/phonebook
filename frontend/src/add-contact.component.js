import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhonebookDataService from './services/phonebook.services';
import {Editbtn, Deletebtn, AddForm} from './components';

export default class AddContact extends Component{
   constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName= this.onChangeLastName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.newContact = this.newContact.bind(this); 

    this.state = {
        iid: null,
        first_name: "",
    last_name: "",
    type: "",
number: "",
submitted: false    };
}

onChangeName(e) {
    this.setState({
        first_name: e.target.value
    });
}
onChangeLastName(e) {
    this.setState({
        last_name: e.target.value
    });
}
onChangeType(e) {
    this.setState({
        type: e.target.value
    });
}
onChangeNumber(e) {
    this.setState({
        number: e.target.value
    });
}
saveContact(){
    const data = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    type: this.state.type,
    number: this.state.number,   
    };
    PhonebookDataService.create(data).then(
        response =>{
            this.setState(
                 {
                     iid: response.data.iid,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            type: response.data.type,
            number: response.data.number,
            submitted: true   
    }
            );
            console.log(response.data);
        })
      .catch(e => {
        console.log(e);
      });  
}

newContact(){
    this.setState({
      iid: null,
        first_name: "",
    last_name: "",
    type: "",
number: "",
submitted: false,  
    });
}

render(){
   return(
       <>
       {this.state.submitted ? (
           <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
       ):(
           <AddForm 
           onChangeName = {this.onChangeName}
           name = {}
           onChangeLastName = {this.onChangeLastName}
           lastname = {}
           onChangeNumber = {this.onChangeNumber}
           number = {}
            />
       )}
       
       </>
   ); 
}

}