const getLast30DaysInIntervals = () => {
    const days = [];
    for (let i = 30; i >= 0; i -= 3) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        days.push(`${day}-${month}`);
    }
    return days.slice(0, 11);
};

export default getLast30DaysInIntervals;