import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';


function App() {
  const [userName, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmpassword] = useState("")

  const [validname, setValidname] = useState(true)
  const [validEmail, setvalidEmail] = useState(true)
  const [validPassword, setvalidPassword] = useState(true)
  const [validconfirmPassword, setValidconfirmpassword] = useState(true)


  const validateUser = (e) => {
    // e.preventDefault()
    // console.log(e.target);
    const { name, value } = e.target
    console.log(value);
    // console.log(value);
    if (name === "userName") {
      if (!!value.match(/^[A-Za-z" "]+$/)) {
        setName(value)
        setValidname(true)

      } else {
        setName(value)
        setValidname(false)
      }
    } else if (name === "email") {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;
      // let re=value.endsWith("@gmail.com")
      if (!!re.test(value) && value.endsWith("@gmail.com")) {
        setEmail(value)
        setvalidEmail(true)
      } else {
        setEmail(value)
        setvalidEmail(false)
      }

    } else if (name === "password") {
      var re = /[A-Z]/.test(value) && /[0-9]/.test(value)&& /^[@#][A-Za-z0-9]{7,13}$/.test(value);
      if (!!re) {
        setPassword(value)
        setvalidPassword(true)
      } else {
        setPassword(value)
        setvalidPassword(false)
      }

    } else if (name === "confirmPassword") {
      if (value == password) {
        setConfirmpassword(value)
        setValidconfirmpassword(true)
      } else {
        setConfirmpassword(value)
        setValidconfirmpassword(false)
      }
    }
  }
  
  const handleSubmit = () => {
    if (userName && email && password && confirmPassword) {
      alert(`Name : ${userName}
Email : ${email}
      `)
    } else {
      alert('Please Fill The Form!')
    }
  }

  const clearform = () => {
    setName("")
    setEmail("")
    setConfirmpassword("")
    setPassword("")
  }


  return (
    <div id='image' style={{ height: "100vh", width: '100%' }} className="d-flex justify-content-center align-items-center">
      <div id='form1'  className='  rounded shadow'>
        <div>
          <h1 className='text-center p-5' style={{ color: 'white' }}>REGISTER</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '-20px' }}>
            <TextField name='userName' value={userName || ""} onChange={(e) => validateUser(e)} id="filled-basic" label="Name" variant="filled" className='w-75 ms-5 mt-3 rounded' style={{ backgroundColor: '#d9d9d9', height: '50px' }} />
           {
              !validname &&
              <div style={{ color: '#ff0000', fontSize: '13px', fontFamily: "'Noto Sans JP', sans-serif;" }} className=' ms-5'>
                *Inavlid Name
              </div> 
              
            } 
           

            <TextField name='email' value={email || ""} onChange={(e) => validateUser(e)} id="filled-basic" label="Email" variant="filled" className='w-75 ms-5 mt-3 rounded' style={{ backgroundColor: '#d9d9d9', height: '50px' }} />

            {
              !validEmail &&
              <div style={{ color: '#ff0000', fontSize: '13px', fontFamily: "'Noto Sans JP', sans-serif;", }} className=' ms-5'>
                *Email must be valid
              </div>
            }
            <TextField type='password' name='password' value={password || ""} onChange={(e) => validateUser(e)} id="filled-basic" label="Password" variant="filled" className='w-75 ms-5 mt-3 rounded' style={{ backgroundColor: '#d9d9d9', height: '50px' }} />

            {
              !validPassword &&
              <div style={{ color: '#ffffff', fontSize: '12px', fontFamily: "'Noto Sans JP', sans-serif;", }} className='mt-1 ms-5'>
                Password contains one Capital letter and start with @ or #,It should be alphanumeric,Length between 8 to 14.              
                </div>
            }

            <TextField type='password' name='confirmPassword' value={confirmPassword || ""} onChange={(e) => validateUser(e)} id="filled-basic" label="Confirm Password" variant="filled" className='w-75 ms-5 mt-3 rounded' style={{ backgroundColor: '#d9d9d9', height: '50px' }} />
            {
              !validconfirmPassword &&
              <div style={{ color: '#ff0000', fontSize: '13px', fontFamily: "'Noto Sans JP', sans-serif;", }} className=' ms-5'>
                *The password confirmation does not match
              </div>
            }
            <div className='d-flex'>
              <button type='submit' style={{ marginLeft: '100px' }} class="btn btn-light mt-4"
                disabled={validname && validEmail && validPassword && validconfirmPassword ? false : true}>SIGN UP</button>
              <button onClick={clearform} type='button' style={{ marginLeft: '50px' }} class="btn btn-light mt-4">CLEAR</button>
            </div>

            <p className='text-center mt-5' style={{ color: "white" }}>Have an Account?<a style={{ textDecoration: 'none', color: 'blue' }}>Login Here!</a></p>
          </div>
        </form>
      </div>


    </div>
  );
}

export default App;
