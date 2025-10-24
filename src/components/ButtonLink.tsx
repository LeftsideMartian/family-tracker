import Link from 'next/link';

interface ButtonLinkProps {
    isPrimary?: boolean;
    href: string;
    label: string;
    className?: string;
}

const ButtonLink = (props: ButtonLinkProps) => {
    return (
        <button
            className={`btn ${props.isPrimary ? 'btn-primary' : ''} ${
                props?.className
            }`}
        >
            <Link href={props.href}>{props.label}</Link>
        </button>
    );
};
export default ButtonLink;
