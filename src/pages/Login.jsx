import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  return (
    <div className="mobile-frame">
      <div className="login-page page-content">
        <div className="login-content">
          <h1 className="page-heading">
            Signin to your
            <br />
            PopX account
          </h1>
          <p className="page-subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              id="btn-login-submit"
              type="submit"
              className={`btn ${isFormValid ? 'btn-primary' : 'btn-disabled'}`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
