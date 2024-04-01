import {CSSProperties, FC, ReactNode} from 'react';
import {Card as CardAntd} from "antd";

interface ICardProps {
    style?: CSSProperties;
    children: ReactNode;
}

const Card: FC<ICardProps> = ({style, children}) => {
    return (
        <CardAntd style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 10px', ...style}}>
            {children}
        </CardAntd>
    );
};

export default Card;