import PurchaseItem from "./PurchaseItem.tsx";
import {Flex} from "antd";

const PurchaseList = () => {
    return (
        <Flex gap={30} vertical style={{maxWidth: '100%'}}>
            <PurchaseItem/>
            <PurchaseItem/>
            <PurchaseItem/>
        </Flex>
    );
};

export default PurchaseList;