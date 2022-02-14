export default function handleLogin(user, pass, isLoggedIn) {
    let username = 'User';
    let password = 'password';
    
    if (user === username) {
        if (pass === password) {
            isLoggedIn = true;
        }
        else {
            alert('Invalid login!');
        }
    }
    else {
        alert('Invalid login!');
    }

    return isLoggedIn;
}