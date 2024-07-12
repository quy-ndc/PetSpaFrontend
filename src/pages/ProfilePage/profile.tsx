import React from 'react'
import "./profile.css"
import UserSideBar from './UserProfie/user-sidebar'
import { UserProfileProvider } from './UserProfie/user-profile-context'
import UserProfileMainContent from './UserProfie/user-profile-main'


const Profile: React.FC = () => {

    return (
        <div className="user-profile-container">
            <div className='user-profile-main-content'>
                <div className='user-profile-nav-content-container'>
                    <UserProfileProvider>
                        <UserSideBar />
                        <UserProfileMainContent />
                    </UserProfileProvider>
                </div>
            </div>
        </div>
    )
}

export default Profile
