import { useNavigate } from 'react-router-dom'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="mobile-frame">
      <div className="landing-page page-content">
        <div className="landing-top-area"></div>
        <div className="landing-bottom">
          <h1 className="page-heading">Welcome to PopX</h1>
          <p className="page-subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
          <button
            id="btn-create-account"
            className="btn btn-primary"
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
          <button
            id="btn-login"
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
