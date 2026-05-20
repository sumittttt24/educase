import './Profile.css'

const PROFILE_PHOTO = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'

function Profile() {
  return (
    <div className="page-content profile-page page-enter" style={{ padding: 0 }}>
      {/* Header */}
      <div className="profile-header">
        <h1 className="profile-header-title">Account Settings</h1>
      </div>

      {/* User Info Card */}
      <div className="profile-card">
        <div className="profile-user-row">
          <div className="profile-avatar-wrapper">
            <img
              className="profile-avatar"
              src={PROFILE_PHOTO}
              alt="Marry Doe"
            />
            <div className="profile-camera-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="profile-user-info">
            <h2 className="profile-name">Marry Doe</h2>
            <p className="profile-email">Marry@Gmail.Com</p>
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
  )
}

export default Profile
