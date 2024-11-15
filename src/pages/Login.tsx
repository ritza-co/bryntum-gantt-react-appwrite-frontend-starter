import { useEffect, useState } from 'react';

import { useUser } from '../lib/context/user';
import { useNavigate } from 'react-router-dom';

function Login() {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.current) {
            navigate('/');
        }
    }, [user?.current]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='login-form-container'>
            <form>
                <fieldset disabled={user?.isLoading}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => {
                            user?.setError(null);
                            setEmail(event.target.value);
                        }}
                        autoComplete='email'
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => {
                            user?.setError(null);
                            setPassword(event.target.value);
                        }}
                    />
                    <div className='button-container'>
                        <button
                            className="button"
                            type="button"
                            onClick={() => user?.login(email, password)}
                        >
            Login
                        </button>
                        <button
                            className="button"
                            type="button"
                            onClick={() => user?.register(email, password)}
                        >
            Register
                        </button>
                    </div>
                    {user?.error ? <p className='error-message'>{user.error}</p> : <p className='error-message'></p>}
                </fieldset>
            </form>
        </div>
    );
}

export default Login;