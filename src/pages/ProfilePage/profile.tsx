import React from 'react'
import { useParams } from 'react-router-dom'
import SingleBanner from '../../components/banner/SingleBanner'
import UserSideBar from './UserProfie/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSetting'
import ChangePassword from './UserProfie/ChangePassword'
import Order from './UserProfie/Order'
import Pet from './UserProfie/PetList'
import "./Profile.css"
import img from "../../assets/images/hygiene-image.jpg"
const Profile = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { activepage } = useParams()
    // alert(activepage)
    return (
        <div className='userprofile'>
            <SingleBanner
                heading={'My Profile'}
                bannerimage={img}
            />
            {/* UserProfile , showing {activepage} */}

            <div className='userprofilein'>
                <div className='left'>
                    <UserSideBar activepage={activepage} />
                </div>
                <div className='right'>
                    {activepage === 'accountsettings' && <AccountSettings />}
                    {activepage === 'changepassword' && <ChangePassword />}
                    {activepage === 'orders' && <Order />}
                    {activepage === 'petstable' && <Pet />}
                    {activepage === 'legalnotice' && <LegalNotice />}
                </div>
            </div>
        </div>
    )
}

export default Profile
