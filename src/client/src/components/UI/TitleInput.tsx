import {CSSProperties, FC, InputHTMLAttributes, ReactNode} from 'react';
import {Input, Typography} from "antd";

interface ITitleInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    style?: CSSProperties;
    children: ReactNode;
}

const TitleInput: FC<ITitleInputProps> = ({style, children, ...rest}) => {
    return (
        <div style={{...style}}>
            <Typography style={{marginBottom: '8px', fontWeight: '500'}}>{children}</Typography>
            <Input {...rest} />
        </div>
    );
};

export default TitleInput;
