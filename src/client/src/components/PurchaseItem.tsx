import {Flex, Typography} from "antd";
import {CostDateFlex, CostFlex, FirstFlex, MainFlex} from "../styles/PurchaseItemStyle.ts";

const PurchaseItem = () => {
    return (
        <MainFlex style={{
            backgroundColor: '#fff',
            boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e4e7f2',
            borderRadius: '5px'
        }}>
            <FirstFlex flex={'70 1 70%'} style={{padding: '20px 24px'}} vertical>
                <Typography.Text style={{fontSize: '12px', color: "#909ebb", marginBottom: '7px'}}>
                    Закупка, осуществляемая в соответствии с частью 12 статьи 93 Закона № 44-ФЗ
                </Typography.Text>

                <Flex wrap={"wrap"} align={"center"}
                      style={{marginBottom: '12px', rowGap: '0px', columnGap: '30px'}}>
                    <Typography.Link style={{flexShrink: '0', fontSize: '19px', fontWeight: '500'}}>
                        № 3120000120
                    </Typography.Link>
                    <Typography.Text style={{flexShrink: '1', fontSize: '13px', fontWeight: '700'}}>
                        Закупка отменена
                    </Typography.Text>
                </Flex>
                <div>
                    <Typography style={{fontSize: '12px', color: "#909ebb", paddingBottom: '3px'}}>
                        Объект закупки
                    </Typography>
                    <Typography.Paragraph style={{fontSize: '14px'}}>
                        Поставка спецодежды для нужд Государственного учреждения здравоохранения «Забайкальское краевое
                        бюро судебно-медицинской экспертизы»
                    </Typography.Paragraph>
                </div>
                <div>
                    <Typography style={{fontSize: '12px', color: "#909ebb", paddingBottom: '3px'}}>
                        Заказчик
                    </Typography>
                    <Typography.Link style={{fontSize: '13px', fontWeight: '400'}}>
                        ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ КАМЧАТСКОГО КРАЯ "СОБОЛЕВСКАЯ РАЙОННАЯ
                        БОЛЬНИЦА"
                    </Typography.Link>
                </div>
            </FirstFlex>
            <CostFlex flex={'30 0 auto'}
                      style={{padding: '16px'}}
                      justify={"space-between"}
                      vertical>
                <div>
                    <Typography style={{fontSize: '12px', color: "#909ebb",}}>
                        Начальная цена
                    </Typography>
                    <Typography style={{fontSize: '19px', fontWeight: '500'}}>
                        1 066 600 066 600,00 ₽
                    </Typography>
                </div>
                <CostDateFlex vertical>
                    <Flex gap={16}>
                        <div style={{flex: '1'}}>
                            <Typography style={{fontSize: '12px', color: "#909ebb", paddingBottom: '3px'}}>
                                Размещено
                            </Typography>
                            <Typography style={{fontSize: '14px', fontWeight: '400'}}>
                                28.06.2024
                            </Typography>
                        </div>
                        <div style={{flex: '1'}}>
                            <Typography style={{fontSize: '12px', color: "#909ebb", paddingBottom: '3px'}}>
                                Обновлено
                            </Typography>
                            <Typography.Text style={{fontSize: '14px', fontWeight: '400'}}>
                                28.06.2024
                            </Typography.Text>
                        </div>
                    </Flex>
                    <div>
                        <Typography style={{fontSize: '12px', color: "#909ebb", paddingBottom: '3px'}}>
                            Окончание подачи заявок
                        </Typography>
                        <Typography.Text style={{fontSize: '14px', fontWeight: '400'}}>
                            28.06.2024
                        </Typography.Text>
                    </div>
                </CostDateFlex>
            </CostFlex>
        </MainFlex>
    );
};

export default PurchaseItem;