interface Account {
    fullName: string;
    gender: string;
    email: string;
    phone: string;
    role: string;
    status: string;
}

const generateRandomAccount = (): Account => {
    const genders = ["Male", "Female", "Other"];
    const roles = ["Admin", "Staff", "Customer", "Doctor"];
    const statuses = ["Active", "Inactive"];
    const firstNames = ["John", "Jane", "Mike", "Emily", "Chris", "Sarah", "David", "Laura", "James", "Emma", "Daniel", "Sophia", "Oliver", "Isabella", "Mason", "Liam", "Ava", "William", "Ethan", "Mia"];
    const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Davis", "Wilson", "Clark", "Lewis", "Walker", "Hall", "Adams", "Baker", "Martinez", "Perez", "Thompson", "White", "Harris", "Martinez", "Robinson", "Gonzalez"];
    
    const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

    const generateRandomEmail = (name: string) => `${name.split(' ').join('.').toLowerCase()}@example.com`;

    const generateRandomPhone = () => `0-${Math.floor(100 + Math.random() * 999)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`;

    const generateRandomName = () => {
        return `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
    };

    const fullName = generateRandomName();
    const gender = getRandomElement(genders);
    const email = generateRandomEmail(fullName);
    const phone = generateRandomPhone();
    const role = getRandomElement(roles);
    const status = getRandomElement(statuses);

    return { fullName, gender, email, phone, role, status };
};

export const generateExampleAccounts = (count: number): Account[] => {
    return Array.from({ length: count }, generateRandomAccount);
};
