import React, { Component } from 'react'
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AddForm,SearchForm, Header, Editbtn, Deletebtn, Footer}  from './components';

import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
        first_name: "",
        last_name: "",
        type: "",
        number: "",
    };
    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
}