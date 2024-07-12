import React from 'react'
import { UserProfileProvider } from './UserProfie/user-profile-context'
import UserSideBar from './UserProfie/UserProfileSide/user-sidebar'
import UserProfileMainContent from './UserProfie/UserProfileMain/user-profile-main'

const Profile: React.FC = () => {

    return (
        <div className="user-profile-container">
            <div className='user-profile-main-content'>
                <div
                    className='user-profile-nav-content-container'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: 10
                    }}>
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
