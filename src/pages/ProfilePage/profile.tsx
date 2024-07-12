import React from 'react'
import { UserProfileProvider } from './UserProfie/user-profile-context'
import UserSideBar from './UserProfie/UserProfileSide/user-sidebar'
import UserProfileMainContent from './UserProfie/UserProfileMain/user-profile-main'
import './profile.css'

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
