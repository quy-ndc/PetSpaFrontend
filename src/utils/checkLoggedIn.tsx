const checkUserLoggedIn = async () => {
    const token = sessionStorage.getItem('jwtToken');
    if (token) {
        window.location.href = "http://localhost:5173";
    }
}

export default checkUserLoggedIn