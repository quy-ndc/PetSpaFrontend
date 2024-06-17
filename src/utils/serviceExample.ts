interface Service {
    serviceName: string;
    type: string[];
    minPrice: number;
    maxPrice: number;
    discount: number;
    rating: number;
    status: string;
}

const generateRandomService = (): Service => {
    const serviceNames = ["Ultrasonography", "Hospitalisation", "Laser therapy", "Blood pressure measuremen", "Microchipping", "Radiography", "MRI/CT", "Rabies vaccine", "Consultation", "Medical bathing", "Luxury grooming package", "Facial haircut", "Haircut", "Pawdicure", "Physiotherapy", "Acupuncture", "Therapeutic massage", "Urine test", "Blood test", "Allergy testing", "Soft tissue surgeries", "Specialist surgeries", "Spaying (female cat)"];
    const types = ["Clinical", "Hoslistic", "Surgical", "Grooming"];
    const statuses = ['Active', "Inactive"];

    const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];
    const getRandomTypes = (): string[] => {
        const shuffled = types.sort(() => 0.5 - Math.random());
        const count = Math.floor(Math.random() * 2) + 1; // Randomly get 1 or 2 elements
        return shuffled.slice(0, count);
    };

    const serviceName = getRandomElement(serviceNames);
    const type = getRandomTypes();
    const minPrice = Math.floor(1000000 + Math.random() * 9000000);
    const maxPrice = Math.floor(9000000 + Math.random() * 900000000)
    const discount = Math.floor(Math.random() * 100)
    const rating = Math.floor(Math.random() * 5)
    const status = getRandomElement(statuses);

    return { serviceName, type, minPrice, maxPrice, rating, discount, status };
};

export const generateExampleServices = (count: number): Service[] => {
    return Array.from({ length: count }, generateRandomService);
};
