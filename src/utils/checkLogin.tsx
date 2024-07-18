const checkSessionAndRedirect = () => {
    const jwtToken = sessionStorage.getItem('jwtToken');
    if (!jwtToken || jwtToken == undefined || jwtToken.trim() == "") {
        window.location.href = 'http://localhost:5173//login';
    }
};

export default checkSessionAndRedirect
