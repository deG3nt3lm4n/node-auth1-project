import React,{useState} from 'react'


const initialState = {
  username: '',
  password: ''
}

export default function Form() {

  const [userData, setUserData] = useState(initialState);


  const onChange = (e) => {
    const {value, name} = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/api/auth/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    }).then(res => res.json())
    .then(data => console.log(data));
  }



  return (
    <div>

      {/* Login form */}
      <div>
        <form onSubmit={onSubmit}>
          <h2>Login</h2>
          <label>
            Username:
            <input type="text" onChange={onChange} name="username" value={userData.username}/>
          </label>
          <label>
            Password:
            <input type="password" onChange={onChange} name="password" value={userData.password}/>
          </label>
          <button>Login</button>
        </form>
      </div>

      {/* Sign up Form */}
      <div>
        <form>
          <h2>Register</h2>
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button>Register</button>
        </form>
      </div>

    </div>
  )
}
