import React , {useState} from 'react'
import './style.css'
function FeedbackForm() {

  const initValues = {
    fullName :'',
    email:'',
    contact:'',
    gender:'other',
    language:'reactJs',
    message:''
  }

  const [values, setValues] = useState(initValues);

  const changeInputHandle = e =>{
    const {name, value} = e.target;
    setValues((values)=> ({
        ...values,
        [name]:  value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log('data',values)
    alert("Your form has been submitted")
    setValues(initValues);
  }


  return (
    <>
    <h1 className='heading'>Feedback Form</h1>
    <form onSubmit={onSubmit} >
      <div className='form__container'>
      

      <label>Full Name  <br/>
      <input type='text'
        name='fullName'
        placeholder=' Your Name'
        value={values.fullName}
        required
        onChange = {changeInputHandle}
      />
      </label> 
      <br/>
      
      <label>Email-Id <br/>
      <input type='email'
        name='email'
        placeholder=' example@app.com'
        value={values.email}
        required
        onChange = {changeInputHandle}
      />
      </label> 
      <br/>
      
      <label>Phone Contact <br/>
      <input type= 'tel'
        name='contact'
        value={values.contact}
        pattern="[0-9]{10}"
        placeholder=' Enter valid 10 digit number'
        required 
        onChange = {changeInputHandle}
      /> 
      </label>
      <br/>

      <label>Select language <br/>
      <select name='language' onChange = {changeInputHandle} value={values.language}>
        <option value='vanillaJs'>VanillaJS</option>
        <option value='reactJs'>ReactJS</option>
        <option value='vueJs'>VueJS</option>
        <option value='nextJs'>NextJS</option>

      </select>
      </label>
      <br/>
      
      <label>Gender 
      <div>
      <input type= 'radio'
        name='gender'
        value='male'
        onChange = {changeInputHandle}
        checked = {values.gender === 'male' }
      />Male 
      <input type= 'radio'
        name='gender'
        value='female'
        onChange = {changeInputHandle}
        checked = {values.gender === 'female' }
      />Female 
      <input type= 'radio'
        name='gender'
        value='other'
        onChange = {changeInputHandle} 
        checked = {values.gender === 'other' }
      />Other  
      </div> 
      </label>
      <br/>

      <label>Message <br/>
      <textarea 
        name='message'
        placeholder='Type your message here...'
        value={values.message} 
        required
        onChange = {changeInputHandle}
      /> 
      </label>
      <br/>
      <button >Submit</button>
    </div>
    </form>
    </>
  )
}

export default FeedbackForm