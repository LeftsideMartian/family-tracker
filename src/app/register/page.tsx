import ButtonLink from '@/components/ButtonLink';
import FloatingLabelInput from '@/components/FloatingLabelInput';
import { HOME_URL, LOGIN_URL } from '@/lib/constants';

const page = () => {
    return (
        <div>
            <h2 className='pageHeading'>Create account</h2>
            <form>
                <FloatingLabelInput type='text' id='email' labelText='Email' />
                <FloatingLabelInput
                    type='text'
                    id='password'
                    labelText='Password'
                />
                <FloatingLabelInput
                    type='text'
                    id='confirmPassword'
                    labelText='Confirm Password'
                />
                <ButtonLink
                    href={HOME_URL}
                    label='Continue'
                    isPrimary
                    className='w-full'
                />
                <p className='text-center my-5'>Or</p>
                <ButtonLink
                    href={LOGIN_URL}
                    label='Log in'
                    className='w-full'
                />
            </form>
        </div>
    );
};
export default page;
