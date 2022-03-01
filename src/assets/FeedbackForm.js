import React , {useState} from 'react'
import './style.css'
function FeedbackForm() {

  const initValues = {
    fullName:'',
    email:'',
    contact:'',
    gender:'male',
    language:'',
    message:''
  }

  const [values, setValues] = useState(initValues);

  const changeInputHandle = e =>{
    const {name, value} = e.target;
    setValues((values)=> ({
        ...values,
        [name]:value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log('data',values)
    const {value} = e.target;
    setValues((values) =>({
      ...values,
      value:''
    }))

  }

  return (
    <form className='form__container'onSubmit={onSubmit} >

    <h1>Feedback Form</h1>

    <label>Full Name : <br/>
    <input type='text'
      name='fullName'
      value={values.fullName}
      onChange = {changeInputHandle}
    />
    </label> 
    <br/>
    
    <label>Email-Id :<br/>
    <input type='email'
      name='email'
      value={values.email}
      onChange = {changeInputHandle}
    />
    </label> 
    <br/>
    
    <label>Phone Contact :<br/>
    <input type= 'tel'
      name='contact'
      value={values.contact} 
      onChange = {changeInputHandle}
    /> 
    </label>
    <br/>

    <label>Select language :<br/>
    <select name='language' onChange = {changeInputHandle} value={values.language}>
      <option value='vanillaJs'>VanillaJS</option>
      <option value='reactJs'>ReactJS</option>
      <option value='vueJs'>VueJS</option>
      <option value='nextJs'>NextJS</option>

    </select>
    </label>
    <br/>
    
    <label>Gender :
    <div>
    <input type= 'radio'
      name='gender'
      value='male'
      onChange = {changeInputHandle}
    />Male 
    <input type= 'radio'
      name='gender'
      value='female'
      onChange = {changeInputHandle}
    />Female 
    <input type= 'radio'
      name='gender'
      value='other'
      onChange = {changeInputHandle}
    />Other  
    </div> 
    </label>
    <br/>

    <label>Message :<br/>
    <textarea 
      name='message'
      value={values.message} 
      onChange = {changeInputHandle}
    /> 
    </label>
    <br/>
    <button>Submit</button>
    </form>
    
  )
}

export default FeedbackForm