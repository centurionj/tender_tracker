import {FC} from "react";
import {Checkbox, Divider, Flex, Row} from 'antd';
import Container from "../components/UI/Container.tsx";
import SortBySearch from "../components/SortBySearch.tsx";
import PurchaseList from "../components/PurchaseList.tsx";
import H1Typography from "../components/UI/H1Typography.ts";

const SearchPage: FC = () => {
    return (
        <Container>
            <H1Typography>
                Результаты поиска
            </H1Typography>
            <Flex style={{columnGap: '8px', rowGap: '0px'}} wrap={'wrap'} align={"center"}
                  justify={"space-between"}>
                <Checkbox>Открыть лоты</Checkbox>
                <SortBySearch/>
            </Flex>
            <Divider style={{marginBottom: '15px', marginTop: '5px'}}/>
            <PurchaseList/>
            <Row>
                <div style={{flex: '75%'}}>

                </div>
                <div style={{flex: '25%'}}>
                </div>
            </Row>
        </Container>
    );
};

export default SearchPage;