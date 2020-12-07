import './App.css';
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

export default function Table(props) {
    return(
     <div className="row">
            <div className="col s6">
                 <div className="row">
            <div className="col s6">
            <table>
                 <thead>
                   <th>ID</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Type</th>
                   <th>Number</th>
                   <tbody>
                      {props.data.map((data) => {
                            return (
                                <tr key={data.iid}>
                                    <td>{data.iid}</td>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.type}</td>
                                    <td>{data.number}</td>
                                </tr>
                            );
                        })}
                   </tbody>
                 </thead>
               </table>
            </div>
        </div>
            </div>
        </div>);
   
}