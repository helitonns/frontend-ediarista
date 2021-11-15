import React from 'react';
import InputMask from 'react-input-mask';
import TextFied from '../TextField/TextField';
import { OutlinedTextFieldProps } from '@material-ui/core';

export interface TextFieldMaskProps extends Omit<OutlinedTextFieldProps, 'variant'> {
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
    mask,
    value,
    onChange,
    onBlur,
    ...props
})=> {
    return (
        <InputMask mask={mask} value={value as string} onChange={onChange} onBlur={onBlur}>
            {()=>{
                return <TextFied {...props} variant={'outlined'} />;
            }}
        </InputMask>
    );
}

export default TextFieldMask;