import '@/components/styles.css';
import { HTMLInputTypeAttribute } from 'react';

interface FloatingLabelInputProps {
    type: HTMLInputTypeAttribute;
    id: string;
    labelText: string;
}

const FloatingLabelInput = (props: FloatingLabelInputProps) => {
    return (
        <div className='inputGroup'>
            <input type={props.type} id={props.id} placeholder=' ' />
            <label htmlFor={props.id}>{props.labelText}</label>
        </div>
    );
};
export default FloatingLabelInput;
