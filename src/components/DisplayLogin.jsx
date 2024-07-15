import React, { useState } from 'react';
import users from '../assets/login'; // Mock user data
import './DisplayLogin.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const DisplayLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isLoginMode) {
            handleLogin();
        } else {
            handleSignUp();
        }
    };

    const handleLogin = () => {
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };

    const handleSignUp = () => {
        const newUser = {
            id: users.length + 1,
            username: username,
            password: password,
            email: email,
        };

        users.push(newUser);
        console.log('New User added:', newUser);
        navigate('/');
    };

    const toggleMode = () => {
        setUsername('');
        setPassword('');
        setEmail('');
        setError('');
        setIsLoginMode(prevMode => !prevMode);
    };

    return (
        <div className="login-container">
            <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                {!isLoginMode && (
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                )}
                <br />
                <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
                <br />
                <button type="button" onClick={toggleMode}>
                    Switch to {isLoginMode ? 'Sign Up' : 'Login'}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default DisplayLogin;
