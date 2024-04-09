import {FC} from "react";
import Container from "../components/UI/Container.tsx";
import H1Typography from "../components/UI/H1Typography.ts";
import {Checkbox, ConfigProvider, Divider, Flex, Input, InputNumber, Select, Typography} from "antd";
import H5Typography from "../components/UI/H5Typography.ts";
import {Collapse, TypographyInput} from "../styles/SettingsPageStyle.ts";
import {RangeDatePicker} from "../components/UI/RangeDatePicker.tsx";

const SettingsPage: FC = () => {
    return (
        <Container>
            <H1Typography>
                Настройки поиска
            </H1Typography>
            <Divider style={{marginBottom: '0', marginTop: '5px'}}/>
            <ConfigProvider theme={{}}>
                <Collapse ghost>
                    <Collapse.Panel header={<H5Typography>Закупки</H5Typography>} key="1">
                        <Flex justify={"space-between"} wrap={'wrap'} gap={16}>
                            <Flex flex={'1'} style={{minWidth: 'fit-content'}} gap={8} vertical>
                                <Typography style={{fontWeight: '500'}}>Закон</Typography>
                                <Checkbox>44-ФЗ</Checkbox>
                                <Checkbox>223-ФЗ</Checkbox>
                                <Checkbox>ПП РФ 615 (Капитальный ремонт)</Checkbox>
                                <Checkbox>94-ФЗ</Checkbox>
                            </Flex>
                            <Flex flex={'1'} style={{minWidth: 'fit-content'}} gap={8} vertical>
                                <Typography style={{fontWeight: '500'}}>Этап закупки</Typography>
                                <Checkbox>Подача заявок</Checkbox>
                                <Checkbox>Работа комиссии</Checkbox>
                                <Checkbox>Закупка завершена</Checkbox>
                                <Checkbox>Закупка отменена</Checkbox>

                            </Flex>
                        </Flex>
                    </Collapse.Panel>
                    <Collapse.Panel header={<H5Typography>Цена</H5Typography>} key="2">
                        <Flex gap={30} wrap={'wrap'}>
                            <Flex style={{flex: '0 1 auto', maxWidth: '100%'}} vertical>
                                <TypographyInput>Тип цены</TypographyInput>
                                <Select
                                    style={{maxWidth: '300px'}}
                                    defaultValue="classGWS"
                                    options={[
                                        {
                                            value: 'classGWS',
                                            label: 'Начальная (максимальная) цена контракта (договора)'
                                        },
                                        {value: 'classUnitGWS', label: 'Цена единицы товара, работы, услуги'}]}
                                    optionRender={(option) => (
                                        <span style={{whiteSpace: 'pre-wrap'}}>{option.data.label}</span>

                                    )}
                                />
                            </Flex>
                            <Flex style={{flex: '1 1 auto'}} align={"flex-end"} gap={8}>
                                <div style={{maxWidth: '150px'}}>
                                    <TypographyInput>Минимальная</TypographyInput>
                                    <InputNumber style={{width: '100%'}} min={0} placeholder={'0'}/>
                                </div>
                                <Divider style={{
                                    backgroundColor: '#334059',
                                    maxWidth: '8px',
                                    minWidth: '8px',
                                    margin: '0 0 15px'
                                }}/>
                                <div style={{maxWidth: '150px'}}>
                                    <TypographyInput>Максимальная</TypographyInput>
                                    <InputNumber style={{width: '100%'}} min={0} placeholder={'9 000 000 000'}/>
                                </div>
                            </Flex>
                        </Flex>
                    </Collapse.Panel>
                    <Collapse.Panel header={<H5Typography>Дата</H5Typography>} key="3">
                        <Flex style={{columnGap: '30px', rowGap: '20px'}} wrap={"wrap"}>
                            <div>
                                <TypographyInput>Размещение</TypographyInput>
                                <RangeDatePicker style={{width: '250px'}}/>
                            </div>
                            <div>
                                <TypographyInput>Обновление</TypographyInput>
                                <RangeDatePicker style={{width: '250px'}}/>
                            </div>
                            <div>
                                <TypographyInput>Окончание подачи заявок</TypographyInput>
                                <RangeDatePicker style={{width: '250px'}}/>
                            </div>
                        </Flex>
                    </Collapse.Panel>
                    <Collapse.Panel header={<H5Typography>Заказчик</H5Typography>} key="4">
                        <Flex style={{columnGap: '30px', rowGap: '20px'}} wrap={"wrap"}>
                            <div style={{width: '100%'}}>
                                <TypographyInput>Организация</TypographyInput>
                                <Input style={{width: '100%'}}
                                       placeholder={'Введите полностью или часть полного или сокращенного наименования организации, ИНН или ОГРН'}/>
                            </div>
                        </Flex>
                    </Collapse.Panel>
                    <Collapse.Panel header={<H5Typography>Участник закупки</H5Typography>} key="5">
                        <Flex style={{columnGap: '30px', rowGap: '20px'}} wrap={"wrap"}>
                            <div style={{width: '100%'}}>
                                <TypographyInput>Наименование участника</TypographyInput>
                                <Input style={{width: '100%'}}
                                       placeholder={'Введите ИНН, полное или сокращенное наименование, ФИО участника размещения закупки'}/>
                            </div>
                        </Flex>
                    </Collapse.Panel>
                </Collapse>
            </ConfigProvider>
        </Container>
    );
};

export default SettingsPage;