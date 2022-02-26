import React, { Component } from 'react'

class FeedbackForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         message: '',
         email:'',
         contact:'',
         gender:'male'
      }
    }

    handleNameChange = (event)=>{
        this.setState({name: event.target.value})
    }

    handleMessageChange = event =>{
        this.setState({message:event.target.value})
    }

    handleEmailChange = event =>{
        this.setState({email:event.target.value})
    }

    handleContactChange = event =>{
        this.setState({contact:event.target.value})
    }

    handleGenderChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

  render() {
    return (
      <form>
          <div>
              <label>Name </label>
              <input 
                type= 'text' 
                value={this.state.name} 
                onChange={this.handleNameChange}/>
          </div>

          <div>
              <label>Email </label>
              <input 
                type= 'email' 
                value={this.state.email} 
                onChange={this.handleEmailChange}/>
          </div>

          <div>
              <label>Contact Number </label>
              <input 
                type= 'tel' 
                value={this.state.contact} 
                onChange={this.handleContactChange}/>
          </div>

          <div>
                <label>Male</label>
                <input 
                type= 'radio'
                value = 'male' 
                name='gender'
                checked={this.value==='male'}
                onChange={this.handleGenderChange}/>

                <label>Female</label>
                <input 
                type= 'radio'
                value = 'female'
                name='gender'
                checked={this.value==='female'}
                onChange={this.handleGenderChange}/>

                <label>Other</label>
                <input 
                type= 'radio'
                value = 'other'
                checked={this.value==='other'}
                name='gender'
                onChange={this.handleGenderChange}/>

          </div>
          <div>
              <label>Message</label>
              <textarea 
              value={this.state.message} 
              onChange={this.handleMessageChange}></textarea>
          </div>
          
      </form>
    )
  }
}

export default FeedbackForm