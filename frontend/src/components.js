import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export const Header = () =>{
    return(
        <div className="row">
            <div className="col s6 left-align">
                <h4 className='box'>My Contacts</h4>
            </div>
            <div className="col s6">
                <button className="btn waves-effect waves-light right-align" type='submit' id='logout'>Logout</button>
            </div>
        </div>
    );
}
export const Editbtn = () =>{
    return(
        <React.Fragment>
            <button class="btn waves-effect waves-light" type="submit" >Edit
            <i class="material-icons right">create</i>
  </button>
        </React.Fragment>
    );
}
export const Deletebtn = () =>{
    return(
        <React.Fragment>
          <button class="btn waves-effect waves-light" type="submit">Delete
        <i class="material-icons right">delete_outline</i>
        </button>  
        </React.Fragment>  
    );
}
export const Table = () => {
    return(
        <div className="row">
            <div className="col s6">
                <table>
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Type</th>
                        <th>Number</th>
                    </thead>
                    <tbody>
                        <tr><td></td>
                        <td></td>
                        <td></td>
                        <td></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export const AddForm = (props) => {
    return(
        <div className="col">
        <div className="row">
             <h4>Add new Contact</h4>
            <form  className="col s12" id='addContact'>
                <div className="row">
                <div className="col s6 input-field">
               <input type="text" placeholder='First Name' id='first-name' className='validate' onChangeName={props.onChangeName} value={props.name} />   
           </div>
            <div className="col s6 input-field">
               <input type="text" placeholder='Last Name' id='last-name' className='validate' onChange={props.onChangeLastName} value={props.lastname}/>
           </div>
                </div>
            <div className="row">
                <div className="col s6 input-field">
                    <input type="text" placeholder='Number' id='number' className='validate' onChange={props.onChangeNumber} value={props.number} />
                </div> 
                <div className=" input-field col s6">
                    <select form='addContact' name='type' id='select' className='browser-default' >
                        <option value="" disabled selected>Type</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                    </select>  
                </div>
            </div>
            <div className="row">
                <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.saveContact}>Add Contact
    <i class="material-icons right">person_add</i>
  </button>
            </div>
            </form>
        </div>
        </div>
    );
}
export const SearchForm = () =>{
    return(
        <div className="col">
        <div className="row">
            <h4>Search Contact</h4>
                <form action="#" className="col s12" id='addContact'>
                    <div className="row">
                    <div className="col s6 input-field">
                <input type="text" placeholder='First Name' id='first-name' className='validate' />   
            </div>
                <div className="col s6 input-field">
                <input type="text" placeholder='Last Name' id='last-name' className='validate' />
            </div>
                    </div>
                <div className="row">
                    <div className="col s6 input-field">
                        <input type="text" placeholder='Number' id='number' className='validate' />
                    </div> 
                </div>
                <div className="row">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Search
        <i class="material-icons right">person_search</i>
    </button>
                </div>
                </form>
        </div>
        </div>
    );
}


export const Footer = () =>{
    return(
        <>
        <footer>
                <p class="grey-text text-lighten-4">This project was created for the Taleas Challenge.</p>
          <div class="footer-copyright">
               <p>© 2020 Rafaela Prendi </p>
                <p><i class="material-icons">email</i> rafaelaprendi7@gmail.com</p>
          </div>
        </footer>
        
        </>
    );
      
}
