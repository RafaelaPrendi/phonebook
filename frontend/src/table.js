import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Editbtn} from './components';
import {Deletebtn} from './components';

export default class Table extends React.Component {
 
 constructor(props){
 super(props);
 this.getHeader = this.getHeader.bind(this);
 this.getRowsData = this.getRowsData.bind(this);
 this.getKeys = this.getKeys.bind(this);
 }
 
 getKeys = function(){
 return Object.keys(this.props.data[0]);
 }
 
 getHeader = function(){
  var keys = this.getKeys();
 return keys.map((key, index)=>{
 return <th key={key}>{key.toUpperCase()}</th>
 })
 }
 
 getRowsData = function(){
 var items = this.props.data;
 var keys = this.getKeys();
 return items.map((row, index)=>{
 return <tr key={index}><RenderRow key={index} data={row} keys={keys}/>
 <td><Editbtn /> <Deletebtn /></td>
 
 </tr>
 })
 }
 
 render() {
 return (
    <div className="row">
            <div className="col s6">
                 <div className="row">
            <div className="col s6">
            <table>
                <thead>
                <tr>{this.getHeader()}
                <td><b>ACTION</b></td>
                </tr>
                </thead>
                <tbody>
                {this.getRowsData()}
                </tbody>
                </table>
            </div>
        </div>
            </div>
        </div>
 );
 }
}
const RenderRow = (props) =>{
 return props.keys.map((key, index)=>{
 return <td key={props.data[key]}>{props.data[key]}</td>
 })
}