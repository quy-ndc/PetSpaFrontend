import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import "./booking-pet-picker.css";
import api from '../../../service/apiService';

interface BookingPetPickerProps {
    value: string | null;
    onChange: (selectedOption: { value: string, label: string } | null) => void;
}

interface Pet {
    pet_id: number;
    pet_name: string;
    species: string;
}

const BookingPetPicker: React.FC<BookingPetPickerProps> = ({ value, onChange }) => {
    const [account, setAccount] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [pets, setPets] = useState<{ value: string, label: string }[]>([]);

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchAccountData = async () => {
        try {
            const response = await api.get(`/pet/${account.userId}/ownPet`);
            const petOptions = response.data.data?.map((pet: Pet) => ({
                value: pet.pet_id.toString(),
                label: `${pet.pet_name} (${pet.species.toLowerCase()})`,
            }));
            setPets(petOptions);
        } catch (error) {
            console.error("Error fetching pets data:", error);
        }
    };

    useEffect(() => {
        if (account) {
            fetchAccountData();
        }
    }, [account]);

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>;
    }

    return (
        <Select
            className="booking-pet-picker"
            classNamePrefix="select"
            isClearable
            isSearchable
            name="pets"
            options={pets}
            placeholder="Choose a pet..."
            onChange={onChange}
            value={pets.find(option => option.value === value)}
        />
    );
};

export default BookingPetPicker;
