import React, { Component } from 'react'

class FeedbackForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         message: '',
         email:'',
         contact:'',
         gender:''
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

    handleSubmit = event =>{
        // alert(`${this.state.name} ${this.state.gender} ${this.state.email} ${this.state.contact}`)
        event.preventDefault()
        console.log(`Name: ${this.state.name} Email: ${this.state.email} Contact: ${this.state.contact}`)
    }

  render() {

        const {name, email, contact, gender, message} = this.state
    return (
      <form onSubmit={this.handleSubmit}>

          <h1>Feedback Form</h1>
          <div>
              <label>Name </label>
              <input 
                type= 'text' 
                value={name} 
                onChange={this.handleNameChange}/>
          </div>
            <br/>
          <div>
              <label>Email </label>
              <input 
                type= 'email' 
                value={email} 
                onChange={this.handleEmailChange}/>
          </div>
          <br/>

          <div>
              <label>Contact Number </label>
              <input 
                type= 'tel' 
                value={contact} 
                pattern="[0-9]{10}"
                onChange={this.handleContactChange}/>
          </div>
          <br/>

          <div>
                <label>Male</label>
                <input 
                type= 'radio'
                value = 'male' 
                name= {gender}
                checked={this.value==='male'}
                onChange={this.handleGenderChange}/>

                <label>Female</label>
                <input 
                type= 'radio'
                value = 'female'
                name={gender}
                checked={this.value==='female'}
                onChange={this.handleGenderChange}/>

                <label>Other</label>
                <input 
                type= 'radio'
                value = 'other'
                checked={this.value==='other'}
                name={gender}
                onChange={this.handleGenderChange}/>

          </div>
          <br/>
          <div>
              <label>Message</label>
              <textarea 
              value={message} 
              onChange={this.handleMessageChange}></textarea>
          </div>
          <br/>
          
          <button>Submit</button>
      </form>
    )
  }
}

export default FeedbackForm