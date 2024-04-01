import {Flex, Select, SelectProps, Typography} from "antd";
import {FallOutlined, RiseOutlined} from "@ant-design/icons";
import {FC, ReactNode} from "react";

interface IconLabelProps {
    icon: ReactNode;
    label: string;
}

const IconLabel: FC<IconLabelProps> = ({icon, label}) => (
    <Flex style={{color: '#1677ff'}} align={"center"} gap={8}>
        {icon}{label}
    </Flex>
);

const fontSize: number = 16

const options: SelectProps['options'] = [
    {value: 'a', label: <IconLabel icon={<FallOutlined style={{fontSize: fontSize}}/>} label="Дате обновления"/>},
    {value: 'b', label: <IconLabel icon={<RiseOutlined style={{fontSize: fontSize}}/>} label="Дате обновления"/>},
    {value: 'c', label: <IconLabel icon={<FallOutlined style={{fontSize: fontSize}}/>} label="Дате размещения"/>},
    {value: 'd', label: <IconLabel icon={<RiseOutlined style={{fontSize: fontSize}}/>} label="Дате размещения"/>},
    {value: 'e', label: <IconLabel icon={<FallOutlined style={{fontSize: fontSize}}/>} label="Цене"/>},
    {value: 'f', label: <IconLabel icon={<RiseOutlined style={{fontSize: fontSize}}/>} label="Цене"/>},
    {value: 'g', label: <IconLabel icon={<FallOutlined style={{fontSize: fontSize}}/>} label="Релевантности"/>},
    {value: 'h', label: <IconLabel icon={<RiseOutlined style={{fontSize: fontSize}}/>} label="Релевантности"/>},
];

const SortBySearch = () => {
    return (
        <Flex wrap={'wrap'} align={"center"}>
            <Typography>Сортировать по:</Typography>
            <Select
                variant="borderless"
                placement={'bottomRight'}
                dropdownMatchSelectWidth={false}
                defaultValue={['a']}
                options={options}
            />
        </Flex>
    );
};

export default SortBySearch;