import './style.css'
import LogoBar from '../../components/layout/logo-bar/logo-bar';
import Box1 from './components/box1/box1';
import FormLogin from '../../components/forms/formLogin';
import FormSignUp from '../../components/forms/formSignUp';
import UseUser from '../../hooks/useUser';

function Login() {
    const { showSignUp, showLogin } = UseUser()

    return (
        <div className="mobile-login">
            <LogoBar />

            <div className='flex-center mobile-login-content'>
                {!showLogin && !showSignUp && <Box1 />}
                {showLogin && <FormLogin />}
                {showSignUp && <FormSignUp />}
            </div>
        </div >
    );
}

export default Login;
