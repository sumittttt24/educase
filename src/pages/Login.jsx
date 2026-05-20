import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Navigate to profile on login
    navigate('/profile')
  }

  return (
    <div className="page-content login-page page-enter">
      <h1 className="login-title">
        Signin to your<br />PopX account
      </h1>
      <p className="login-subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="login-email">
            Email Address
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          id="btn-login"
          type="submit"
          className="btn btn-secondary login-btn"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
