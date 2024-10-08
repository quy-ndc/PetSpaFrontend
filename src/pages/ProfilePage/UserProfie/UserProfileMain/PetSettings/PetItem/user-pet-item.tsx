import React, { useEffect, useState } from "react";
import "./user-pet-item.css";
import Drawer from '@mui/material/Drawer';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import UserPetEdit from "./user-pet-edit";
import api from "../../../../../../service/apiService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface UserPetItemProp {
    petid: string;
    name: string;
    gender: string;
    age: string;
    species: string;
    breed: string | null;
}

const UserPetItem: React.FC<UserPetItemProp> = ({ petid, name, gender, age, species, breed }) => {

    const handleDeletePet = async (petId: string) => {
        try {
            const response = await api.put(`/pet/delete?pet_id=${petId}`);
            toast.success('Delete pet successful')
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } catch (err) {
            toast.error('Delete pet unsuccessful')
            console.error('Delete pet error:', err);
        }
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const MedicalRecord = (anchor: Anchor) => (
        <div
            className="medical-record-drawer"
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="medical-record-appointment">
                <h2>Appointment record</h2>
                <div className="medical-record-appointment-detail">
                    <p>24/6/2024</p>
                    <h4>Grooming</h4>
                </div>
                <div className="medical-record-appointment-detail">
                    <p>24/6/2024</p>
                    <h4>Grooming</h4>
                </div>
                <div className="medical-record-appointment-detail">
                    <p>24/6/2024</p>
                    <h4>Grooming</h4>
                </div>
            </div>
            <div className="medical-record-medicine">
                <h2>Medicine Taken</h2>
                <p>Heartgard (ivermectin)</p>
                <p>Sentinel (milbemycin oxime)</p>
                <p>Trifexis (spinosad + milbemycin oxime)</p>
            </div>
        </div>
    );

    return (
        <>
            <div className="user-profile-pet-item">
                <div className="user-profile-pet-item-container">
                    <h2 className="user-profile-pet-item-name">
                        {gender.toLowerCase() == "male" ? (
                            <MaleIcon className="pet-male-icon" />
                        ) :
                            <FemaleIcon className="pet-female-icon" />
                        }
                        <span>{name} ({age})</span>
                    </h2>
                    <div className="user-profile-pet-item-breed">
                        {species.toLowerCase() === "dog" ? (
                            <svg width="24" height="24" version="1.0" viewBox="0 0 1 1">
                                <path fill="#1e1916" d="M.73555824.90496726.73066243.90567084.72594252.90628648l-.004544.00049838-.00433881.0003811-.00422153.00029317-.00401633.0001759-.00386973.00008794H.70122895L.6976817.90760572.694281.9074005.6910269.90710734.6879194.90672623.68492913.90622785.68211478.90567084.67941768.90502589l-.0025505-.0007329L.67443394.90347213.67211795.90256333.66994855.90156657.66786708.9005112.66593221.89936786.6640853.89813658.66235564.89684666.66074326.8954688.65921882.8940323.65781163.89250786.6564924.89092479.65526112.88928307.65411778.88755343.65306241.88576513.65121548.88201266.64966172.87802565.64840113.87380412.64737505.86937737.64658351.8647161l-.000557-.00483718L.64561609.85486584.64535223.84967686.64520566.844312.64517635.83882986.64523497.83320115.6452936.82745518.64541086.82162125.64555746.8096016l.0000293-.00609777L.63916652.66785768l-.0267364.12523888C.60680142.81631502.6004691.83812628.63424138.85571601c.02392205.021137-.00281434.04998414-.02884715.0464662C.52729583.90496726.53855325.85293096.54558915.816315L.54981067.76284224.5624753.65378589.55192146.62634592C.46678715.60453465.40909283.5883521.34365903.55317263L.29722214.55950494C.27541087.56302287.2810396.5876485.27892881.60383106L.27189292.6481865l-.0386974.10061326-.00281435.00841376C.2275668.7642494.2282704.79168938.23812064.80576118l.02110768.04224467c.01547897.02318913.0197005.08229061-.02392203.06329372h.00070359l-.0323651-.0133682C.18042632.88811041.16142942.8240838.15298635.77764691l.00140718-.0661667c-.0204041-.0055994-.02884717.1118707-.0204041.13652563l.0204041.06118294C.16002224.92888929.1368038.9359545.12062123.9359545c-.0379938 0-.05487995-.03872674-.06261943-.07109184L.0523731.84023704C.04252283.80294682.04744796.7459561.06644488.7128874L.0762951.6924833C.09247766.65167513.07137.62282796.06644488.6017203.0502623.5355829.03689412.47155629.08262742.40823326L.08684895.40333744C.0847382.398383.07137.38785848.06363051.36320354.04604078.3069164.03056181.2147462.0523731.2147462L.06714846.21404261c.03658664 0 .0253292.1519753.06965534.14212503L.45341896.3596856.5097061.34423594C.5294066.3385779.54699633.3259133.56528964.31465588L.6018763.29214102C.64268446.3336528.6792711.3596856.73907619.38149685c.01618255.12383172-.00211077.151301-.01758973.22514856L.71585775.63689976C.70389673.68969826.70037878.74454891.70319315.79942887l.00140716.0253292c-.00140717.02603281.01407178.0281729.03447588.0345052.0133682.00700658.02251486.03303938-.00351795.04570399h.00070358-.00070358zM.8031028.14649805.8046859.1476707l.0016417.00117264.00331274.00255052.00342999.0027264.00348863.00290231.00354726.00304889.0035766.00316615.0036352.00328341.00366453.00337137.00366452.00348863.00366452.00351795.00724111.00721179.00354726.0036352.00351795.00363522.00343.0036059.00334204.00360589.02251486.02389272c.01407179.01477537.03588306.0126646.05487996.01688614l.0077395.00070359c.02040407.01128674.01407178.0338016.00703588.05065842L.9473386.301317C.92693452.34983533.86783302.35335328.82561766.33083844L.80732435.32098818H.80099204L.78762385.32943126l-.0260328.02113699C.70671109.3266462.66238495.29847332.62720549.2604795L.70882185.15775548l.02743997-.039401.00562873-.0133682.0063323-.01474606S.77355207.0585494.78832744.0648817c.01477536.00636162.02392204.03377229.0204041.04784407L.80450998.12961191.8031028.14649805h.0007036" font-weight="400" />
                            </svg>
                        ) : species.toLowerCase() === "cat" ? (
                            <svg width="24" height="30" viewBox="0 0 400 380">
                                <path d="M 151.34904,307.20455 L 264.34904,307.20455 C 264.34904,291.14096 263.2021,287.95455 236.59904,287.95455 C 240.84904,275.20455 258.12424,244.35808 267.72404,244.35808 C 276.21707,244.35808 286.34904,244.82592 286.34904,264.20455 C 286.34904,286.20455 323.37171,321.67547 332.34904,307.20455 C 345.72769,285.63897 309.34904,292.21514 309.34904,240.20455 C 309.34904,169.05135 350.87417,179.18071 350.87417,139.20455 C 350.87417,119.20455 345.34904,116.50374 345.34904,102.20455 C 345.34904,83.30695 361.99717,84.403577 358.75805,68.734879 C 356.52061,57.911656 354.76962,49.23199 353.46516,36.143889 C 352.53959,26.857305 352.24452,16.959398 342.59855,17.357382 C 331.26505,17.824992 326.96549,37.77419 309.34904,39.204549 C 291.76851,40.631991 276.77834,24.238028 269.97404,26.579549 C 263.22709,28.901334 265.34904,47.204549 269.34904,60.204549 C 275.63588,80.636771 289.34904,107.20455 264.34904,111.20455 C 239.34904,115.20455 196.34904,119.20455 165.34904,160.20455 C 134.34904,201.20455 135.49342,249.3212 123.34904,264.20455 C 82.590696,314.15529 40.823919,293.64625 40.823919,335.20455 C 40.823919,353.81019 72.349045,367.20455 77.349045,361.20455 C 82.349045,355.20455 34.863764,337.32587 87.995492,316.20455 C 133.38711,298.16014 137.43914,294.47663 151.34904,307.20455 z" />
                            </svg>
                        ) : (
                            null
                        )}
                        {breed != null ? (
                            <span>{breed}</span>
                        ) : null}
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',

                    }}>
                        <UserPetEdit
                            petid={petid}
                            name={name}
                            age={age}
                            gender={gender}
                            species={species}
                            breed={breed || ""}
                        />
                        <button
                            onClick={() => handleDeletePet(petid)}
                            className="user-profile-pet-delete"
                        >
                            Delete
                        </button>
                    </div>
                    {/* <button
                        className="user-profile-pet-medical"
                        onClick={toggleDrawer("right", true)}
                    >
                        See medical history
                    </button> */}
                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                    >
                        {MedicalRecord("right")}
                    </Drawer>
                </div>
            </div>
        </>
    );
};

export default UserPetItem;