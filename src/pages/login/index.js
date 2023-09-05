import './style.css'
import LogoBar from '../../components/layout/logo-bar/logo-bar';
import Box1 from './components/box1/box1';
import FormLogin from '../../components/forms/formLogin/formLogin';

function Login() {
    return (
        <div className="App mobile-login">
            <LogoBar />
            <div className='flex-center mobile-login-content '>
                <Box1 />
                <FormLogin />
            </div>
        </div >
    );
}

export default Login;
