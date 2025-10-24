import FloatingLabelInput from '@/components/FloatingLabelInput';
import './styles.css';

const Login = () => {
    return (
        <div>
            <h2 className='pageHeading'>Login</h2>
            <form>
                <FloatingLabelInput type='text' id='email' labelText='Email' />
                <FloatingLabelInput
                    type='text'
                    id='password'
                    labelText='Password'
                />
                <button className='btn btn-primary w-full'>Continue</button>
                {/* <p className='text-center mt-5'>Or</p> */}
                <button className='btn createAccountButton'>
                    Create new account
                </button>
            </form>
        </div>
    );
};
export default Login;
