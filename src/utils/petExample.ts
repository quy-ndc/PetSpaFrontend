interface Pet {
    name: string;
    species: string;
    breed: string;
    owner: string;
    status: string;
}

const generateRandomPet = (): Pet => {
    const names = ["Buddy", "Scarlet", "Edgar", "Maya", 'Holy', 'Princess', 'Kage', 'Sange'];
    const speciez = ["Dog", "Cat", "Bird", "Other"];
    const breeds = ["Huskey", "Shiba", 'Pug', 'Pit bull', 'German Shepherd', 'Chihuahua', 'Orange', 'Bengal', 'Other']
    const firstNames = ["John", "Jane", "Mike", "Emily", "Chris", "Sarah", "David", "Laura", "James", "Emma", "Daniel", "Sophia", "Oliver", "Isabella", "Mason", "Liam", "Ava", "William", "Ethan", "Mia"];
    const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Davis", "Wilson", "Clark", "Lewis", "Walker", "Hall", "Adams", "Baker", "Martinez", "Perez", "Thompson", "White", "Harris", "Martinez", "Robinson", "Gonzalez"];
    const statuses = ["Active", "Inactive"];

    const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

    const generateRandomName = () => {
        return `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
    };

    const name = getRandomElement(names);
    const species = getRandomElement(speciez);
    const breed = getRandomElement(breeds);
    const owner = generateRandomName();
    const status = getRandomElement(statuses);

    return { name, species, breed, owner, status };
};

export const generateExamplePet = (count: number): Pet[] => {
    return Array.from({ length: count }, generateRandomPet);
};
