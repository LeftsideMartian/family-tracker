import { LOGIN_URL } from '@/lib/constants';
import './styles.css';
import ButtonLink from '@/components/ButtonLink';

export default function Home() {
    return (
        <div className='homeContent'>
            <h1>Family Tracker</h1>
            <h2 className='homePageSubheading'>
                Manage your schedules, meals, and household
            </h2>
            <ButtonLink href={LOGIN_URL} isPrimary label='Get started' />
        </div>
    );
}
