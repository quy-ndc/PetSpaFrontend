import React from 'react'
import { useParams } from 'react-router-dom'
import SingleBanner from '../../components/banner/SingleBanner'
import UserSideBar from './UserProfie/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSetting'
import "./Profile.css"
import img from '../../assets/images/background.png'
const profile = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { activepage } = useParams()
    // alert(activepage)
    return (
        <div>
            <SingleBanner
                heading={'My Profile'}
                bannerimage=''
            />
            {/* UserProfile , showing {activepage} */}

            <div className='userprofile'>
                <div className='left'>
                    <UserSideBar activepage={activepage} />
                </div>
                <div className='right'>
                    {activepage === 'accountsettings' && <AccountSettings />}
                </div>
            </div>
        </div>
    )
}

export default profile
