const getLast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() -1 - i);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        days.push(`${day}-${month}`);
    }
    return days;
};

export default getLast7Days;