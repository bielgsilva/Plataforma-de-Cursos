import './style.css'
import LogoBar from '../../components/layout/logo-bar/logo-bar';
import Box1 from './components/box1/box1';
import FormLogin from './components/formLogin.js/formLogin';

function Login() {
    return (
        <div className="App">
            <LogoBar />
            <div className='container'>
                <Box1 />
                <FormLogin />
            </div>
        </div >
    );
}

export default Login;
