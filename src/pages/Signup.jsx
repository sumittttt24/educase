import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Navigate to profile after account creation
    navigate('/profile')
  }

  return (
    <div className="page-content signup-page page-enter">
      <h1 className="signup-title">
        Create your<br />PopX account
      </h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="signup-fullname">
            Full Name<span className="required">*</span>
          </label>
          <input
            id="signup-fullname"
            type="text"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-phone">
            Phone number<span className="required">*</span>
          </label>
          <input
            id="signup-phone"
            type="tel"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-email">
            Email address<span className="required">*</span>
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-password">
            Password<span className="required">*</span>
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="signup-company">
            Company name
          </label>
          <input
            id="signup-company"
            type="text"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
          />
        </div>

        <div className="radio-group">
          <span className="radio-label">
            Are you an Agency?<span className="required">*</span>
          </span>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={() => handleChange('isAgency', 'yes')}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={() => handleChange('isAgency', 'no')}
              />
              No
            </label>
          </div>
        </div>

        <div className="signup-btn-wrapper">
          <button
            id="btn-create-account-submit"
            type="submit"
            className="btn btn-primary"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
