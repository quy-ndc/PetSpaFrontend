const checkUser = async () => {
    const token = sessionStorage.getItem('jwtToken');
    if (!token || token == null || token == undefined || token.trim() == "") {
        window.location.href = "http://localhost:5173";
    }
}

export default checkUser

const checkUserLoggedIn = async () => {
    const token = sessionStorage.getItem('jwtToken');
    if (token) {
        window.location.href = "http://localhost:5173";
    }
}