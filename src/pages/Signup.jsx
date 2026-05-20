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
    isAgency: 'yes',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="mobile-frame">
      <div className="signup-page page-content">
        <div className="signup-content">
          <h1 className="page-heading">
            Create your
            <br />
            PopX account
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="signup-fullname">
                Full Name<span className="required">*</span>
              </label>
              <input
                id="signup-fullname"
                type="text"
                name="fullName"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-phone">
                Phone number<span className="required">*</span>
              </label>
              <input
                id="signup-phone"
                type="tel"
                name="phone"
                placeholder="Marry Doe"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-email">
                Email address<span className="required">*</span>
              </label>
              <input
                id="signup-email"
                type="email"
                name="email"
                placeholder="Marry Doe"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-password">
                Password<span className="required">*</span>
              </label>
              <input
                id="signup-password"
                type="password"
                name="password"
                placeholder="Marry Doe"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-company">Company name</label>
              <input
                id="signup-company"
                type="text"
                name="company"
                placeholder="Marry Doe"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="agency-group">
              <p className="agency-label">
                Are you an Agency?<span className="required">*</span>
              </p>
              <div className="radio-group">
                <label className="radio-option" htmlFor="agency-yes">
                  <input
                    id="agency-yes"
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">Yes</span>
                </label>
                <label className="radio-option" htmlFor="agency-no">
                  <input
                    id="agency-no"
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">No</span>
                </label>
              </div>
            </div>

            <button
              id="btn-signup-submit"
              type="submit"
              className="btn btn-primary"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
