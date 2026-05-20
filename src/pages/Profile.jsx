import './Profile.css'

function Profile() {
  return (
    <div className="mobile-frame">
      <div className="profile-page page-content">
        <div className="profile-header">
          <h2 className="profile-header-title">Account Settings</h2>
        </div>

        <div className="profile-info-section">
          <div className="profile-user-row">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#f0e6ff', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#d4b8ff', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="60" fill="url(#avatarGrad)" />
                  <circle cx="60" cy="45" r="20" fill="#a855f7" opacity="0.6" />
                  <ellipse cx="60" cy="90" rx="32" ry="22" fill="#a855f7" opacity="0.4" />
                </svg>
              </div>
              <div className="profile-camera-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="profile-user-info">
              <h3 className="profile-name">Marry Doe</h3>
              <p className="profile-email">Marry@gmail.Com</p>
            </div>
          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          <div className="profile-divider"></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
