import './style.css';
import LogoBar from '../../components/layout/logo-bar/logo-bar';
import FormSignUp from './components/FormSignUp'

function SignUp() {
    return (
        <div className="App">
            <LogoBar />

            <div className='flex-center'>
                <FormSignUp />
            </div>
        </div>
    );
}

export default SignUp;
