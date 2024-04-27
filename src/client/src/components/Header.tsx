import {useState} from "react";
import {EisIcon} from "../../img/EisIcon.tsx";
import {Divider, Drawer, Dropdown, Flex, Menu as MenuAntd, MenuProps, Typography} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {Burger, HeaderAntd, Logo, Menu, StyledAvatar, User} from "../styles/HeaderStyle.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {RoutePath} from "../router/routes.tsx";

const menuItems: MenuProps['items'] = [
    {
        key: RoutePath.search,
        label: 'Поиск закупок',
    },
    {
        key: RoutePath.settings,
        label: 'Настройки поиска',
    },
    {
        key: RoutePath.main,
        label: 'Документация',
    },
]

const items: MenuProps['items'] = [
    {
        key: RoutePath.user,
        label: ' Личный кабинет',
        onClick: () => {

        },
    },
    {
        key: RoutePath.user,
        label: '???',
        onClick: () => {

        },
    },
    {
        type: 'divider',
    },
    {
        key: RoutePath.user,
        label: 'Выход',
        onClick: () => {
            console.log("Logout");
        },
        danger: true,
    },
];

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [current, setCurrent] = useState<string>(location.pathname);
    const [open, setOpen] = useState<boolean>(false);


    const handleItemMenuClick: MenuProps['onClick'] = (e) => {
        navigate(e.key)
        setCurrent(e.key)
        setOpen(false)
    };

    return (
        <HeaderAntd style={{
            backgroundColor: '#fff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        }}>
            <Flex style={{maxWidth: '1150px', width: '100%', height: '100%', margin: 'auto'}}
                  justify={"space-between"} align={"center"}>
                <Logo gap={5}>
                    <EisIcon/>
                    <Flex vertical gap={5} style={{marginTop: '2px'}}>
                        <Typography
                            style={{color: '#1677ff'}}>TENDER</Typography>
                        <Typography>TRACKER</Typography>
                    </Flex>
                </Logo>
                <Menu style={{minWidth: '370px'}} mode="horizontal" items={menuItems} onClick={handleItemMenuClick}
                      selectedKeys={[current]}>
                </Menu>
                <User gap={10} align={"center"}>
                    <Typography.Text style={{fontSize: '16px'}}>Иванов Иван</Typography.Text>
                    <Dropdown menu={{items, selectable: true, onClick: handleItemMenuClick, selectedKeys: [current]}}
                              placement="bottomRight">
                        <StyledAvatar icon={<UserOutlined/>}></StyledAvatar>
                    </Dropdown>
                </User>
                <Burger>
                    <MenuFoldOutlined style={{fontSize: '20px'}} onClick={() => setOpen(true)}/>
                </Burger>
                <Drawer
                    closeIcon={<MenuUnfoldOutlined style={{fontSize: '20px'}}/>}
                    onClose={() => setOpen(false)}
                    open={open} placement={'right'}
                    extra={
                        <Typography.Text style={{fontSize: '16px'}}>Иванов Иван</Typography.Text>
                    }>

                    <MenuAntd style={{border: 'none'}} items={menuItems} onClick={handleItemMenuClick}
                              selectedKeys={[current]}>
                    </MenuAntd>
                    <Divider style={{margin: '0'}}/>
                    <MenuAntd style={{border: 'none'}} items={items} onClick={handleItemMenuClick}
                              selectedKeys={[current]}>
                    </MenuAntd>
                </Drawer>
            </Flex>
        </HeaderAntd>
    );
};

export default Header;