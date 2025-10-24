import '@/components/styles.css';
import HeaderLogo from './icons/HeaderLogo';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <HeaderLogo />
                </div>
                <button className='getStartedButton'>Get Started</button>
            </nav>

            <hr className='headerLine' />
        </header>
    );
};
export default Header;
