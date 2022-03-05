import React , {useState} from 'react'
import './style.css'
function FeedbackForm() {

  const initValues = {
    fullName :'',
    email:'',
    contact:'',
    gender:'',
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
    // const {value} = ;
    // setValues((values)=> ({
    //     ...values,
    //     [value]:''
    // }))
    e.target.fullName.value=''
    e.target.email.value=''
    e.target.contact.value=''
    e.target.language.value=''
    e.target.gender.value=''
    e.target.message.value=''
  }

  // const resetValues = {
  //   fullName :'',
  //   email:'',
  //   contact:'',
  //   gender:'',
  //   language:'',
  //   message:''
  // }
  // const [reset,setReset] = useState(resetValues)

  // handleClearForm = ()=>{
  //   setReset(val=>)
  // }
  // useEffect((e)=>setValues(e.target.fullName.value=''),[])

  return (
    <form onSubmit={onSubmit} >
      <div className='form__container'>
      <h1 className='heading'>Feedback Form</h1>

      <label>Full Name  <br/>
      <input type='text'
        name='fullName'
        value={values.fullName}
        onChange = {changeInputHandle}
      />
      </label> 
      <br/>
      
      <label>Email-Id <br/>
      <input type='email'
        name='email'
        value={values.email}
        onChange = {changeInputHandle}
      />
      </label> 
      <br/>
      
      <label>Phone Contact <br/>
      <input type= 'tel'
        name='contact'
        value={values.contact} 
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

      <label>Message <br/>
      <textarea 
        name='message'
        value={values.message} 
        onChange = {changeInputHandle}
      /> 
      </label>
      <br/>
      <button type='button' >Submit</button>
    </div>
    </form>
    
  )
}

export default FeedbackForm