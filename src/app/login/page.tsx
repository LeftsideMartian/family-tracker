import FloatingLabelInput from '@/components/FloatingLabelInput';

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
                <div className='btnGroup' style={{ marginTop: '-0.3rem' }}>
                    <button className='btn'>Cancel</button>
                    <button className='btn btn-primary'>Login</button>
                </div>
            </form>
        </div>
    );
};
export default Login;
