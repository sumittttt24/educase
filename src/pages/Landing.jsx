import { useNavigate } from 'react-router-dom'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="page-content landing-page page-enter">
      <div className="landing-content">
        <h1 className="landing-title">
          Welcome to PopX
        </h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
        </p>
      </div>
      <div className="landing-actions">
        <button
          id="btn-create-account"
          className="btn btn-primary"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        <button
          id="btn-already-registered"
          className="btn btn-outline"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default Landing
