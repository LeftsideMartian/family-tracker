import '@/components/styles.css';
import HeaderLogo from './icons/HeaderLogo';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <HeaderLogo />
                </div>
                <button className='btn'>Login</button>
            </nav>

            <hr className='headerLine' />
        </header>
    );
};
export default Header;
