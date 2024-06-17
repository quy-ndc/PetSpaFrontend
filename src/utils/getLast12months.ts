const getLast12Months = () => {
    const months = [];
    const date = new Date();

    for (let i = 11; i >= 0; i--) {
        const pastDate = new Date(date.getFullYear(), date.getMonth() - i, 1);
        const month = pastDate.toLocaleString('default', { month: 'short' });
        const year = pastDate.getFullYear();
        months.push(`${month}-${year}`);
    }

    return months;
};

export default getLast12Months;