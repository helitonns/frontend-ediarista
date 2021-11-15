import React, { ChangeEvent, useState } from 'react';
import { TextFieldProps } from '@material-ui/core';
import { TextFieldStyled } from '../TextField/TextField.style';
import { FileContainer, UploadIcon } from './FileField.style';

export interface FileFieldProps extends Omit<TextFieldProps, 'onChange'> {
    onChange: (files: FileList) => void;
}

const FileField: React.FC<FileFieldProps> = ({ onChange, ...props }) => {
    const [filePath, setFilePath] = useState('');

    function handleFileChange(event: ChangeEvent) {
        const target = event.target as HTMLInputElement;
        const files = target.files;

        if (files !== null && files.length) {
            setFilePath(files[0]?.name || '');
            onChange(files);
        }
    }

    return (
        <FileContainer>
            <TextFieldStyled
                label={'Selecione um arquivo'}
                value={filePath}
                InputProps={{
                    endAdornment: <UploadIcon className={'twf-upload'} />,
                }}
                {...props}
                fullWidth
            />
            <TextFieldStyled
                type={'file'}
                {...props}
                fullWidth
                onChange={handleFileChange}
            />
        </FileContainer>
    );
};

export default FileField;
