import {ConfigProvider, theme, ThemeConfig} from 'antd';
import AppRouter from "./components/AppRouter.tsx";
import locale from 'antd/locale/ru_RU';

const config: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
        colorTextBase: '#334059',
        colorTextDescription: '#909ebb',
        colorTextPlaceholder: '#909ebb',
        colorBgLayout: '#fff',
    },
    components: {
        Form: {
            itemMarginBottom: 20,
        },
    },
};

function App() {
    return (

        <ConfigProvider theme={config} locale={locale}>
            <AppRouter/>
        </ConfigProvider>
    )
}

export default App;
