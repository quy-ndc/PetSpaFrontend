interface Service {
    shelterName: string;
    capacity: number;
    status: string;
}

const generateRandomService = (): Service => {
    const shelterNames = ["Ultrasonography", "Hospitalisation", "Laser therapy", "Blood pressure measuremen", "Microchipping", "Radiography", "MRI/CT", "Rabies vaccine", "Consultation", "Medical bathing", "Luxury grooming package", "Facial haircut", "Haircut", "Pawdicure", "Physiotherapy", "Acupuncture", "Therapeutic massage", "Urine test", "Blood test", "Allergy testing", "Soft tissue surgeries", "Specialist surgeries", "Spaying (female cat)"];
    const statuses = ['Available', "Full"];

    const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

    const shelterName = getRandomElement(shelterNames);
    const capacity = Math.floor(Math.random() * 30)
    const status = getRandomElement(statuses);

    return { shelterName, capacity, status };
};

export const generateExampleShelters = (count: number): Service[] => {
    return Array.from({ length: count }, generateRandomService);
};
