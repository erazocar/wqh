import axios from "axios";
import React from "react";
import dataCaller from '../apicalls/caller.js'

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            comment: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //Simple check
        var dataCheck = (this.state.name === '' || this.state.email === '' || this.state.comment === '')
        if (dataCheck) {alert("Please input all required fields!"); return}

        //Definition of the call type
        var callerType = "contactInfo"
        //Creating a new time stamp.
        var date = new Date();
        //Creating the request as form data.
        var contactData = new FormData()
        contactData.append('name', JSON.stringify(this.state.name))
        contactData.append('email', JSON.stringify(this.state.email))
        contactData.append('comments', JSON.stringify(this.state.comment))
        contactData.append('unixtime', date.getTime())     
        
        axios({
            method: dataCaller[callerType]["type"],
            url: dataCaller[callerType]["url"],
            data: contactData,
            // headers: {'Content-Type': 'multipart/form-data; boundary="boundary"'}
        }).then((res) => {
            console.log(`Submitted successfully ${res}, with ${contactData}`)
        }).catch((err)=>{
            console.log(`this is your error: ${err}`)
        })
    }

    onNameChange = (e) =>{
        this.setState({name: e.target.value})
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onCommentChange = (e) => {
        this.setState({comment: e.target.value})
    }

    render() {
        return (
        <div>
        <form onSubmit={this.handleSubmit.bind(this)} method="POST" action="#">
        <div className="form-group">
            <label htmlFor="InputName1">Name</label>
            <input type="text" className="form-control" id="exampleName" defaultValue={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name" />
        </div>
        <div className="form-group">
            <label htmlFor="InputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Comments</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={this.onCommentChange.bind(this)} defaultValue={this.state.comment} rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark mb-3">Submit</button>
        </form>
        </div>
        )
    }
}

export default Form