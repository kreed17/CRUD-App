import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: "",
        email: "",
        phone: "",
        job: "",
        company: "",
        age: "",
        city: "",
        redirect: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/v1/users/${this.props.match.params.id}`)
    .then(res => {
        this.setState({ 
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
            job: res.data.job,
            company: res.data.company,
            age: res.data.age,
            city: res.data.city
        })
        console.log(res)
    });
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePhoneChange(e) {
    this.setState({phone: e.target.value})
  }

  handleJobChange(e) {
    this.setState({job: e.target.value})
  }

  handleCompanyChange(e) {
    this.setState({company: e.target.value})
  }

  handleAgeChange(e) {
    this.setState({age: e.target.value})
  }

  handleCityChange(e) {
    this.setState({city: e.target.value})
  }

  updateUser(event) {
    event.preventDefault();
    const userUpdate = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        job: this.state.job,
        company: this.state.company,
        age: this.state.age,   
        city: this.state.city  
    }
    console.log(userUpdate)
    axios.post(`http://localhost:8000/api/v1/users/${this.props.match.params.id}`, userUpdate)
    .then(res => { 
        console.log(res);
        this.setState({ redirect: this.state.redirect === false })
    })
    .catch(err => { console.log(err) });
  }

  render() {
    return (
      <div className="container" style={{marginTop: "50px"}}>
        <form onSubmit={this.updateUser} method="user">
        <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleNameChange} name="name" value={this.state.name}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleEmailChange} name="email" value={this.state.email}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handlePhoneChange} name="phone" value={this.state.phone}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Job</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleJobChange} name="job" value={this.state.job}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Company</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleCompanyChange} name="company" value={this.state.company}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Age</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleAgeChange} name="age" value={this.state.age}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">City</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleCityChange} name="city" value={this.state.city}/>
                    </div>
                </div>
            <hr/>
            <div style={{marginLeft: "0px"}} className="row">
                <button type="submit" className="btn btn-success" style={{marginLeft: "0px"}}>Update user</button>
            </div>
        </form>
        {this.state.redirect && (
            <Redirect to={'/users'}/>
        )}
      </div>
    )
  }
}
export default EditUser;