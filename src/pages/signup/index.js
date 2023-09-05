import './style.css';
import LogoBar from '../../components/layout/logo-bar/logo-bar';
import FormSignUp from '../../components/forms/FormSignUp/FormSignUp'

function SignUp() {
    return (
        <div className="mobile-signup">
            <LogoBar />

            <div className='flex-center mobile-signup-content'>
                <FormSignUp />
            </div>
        </div>
    );
}

export default SignUp;
