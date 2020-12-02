import React, {useEffect} from 'react';
import Scrollbar from 'smooth-scrollbar';
// @ts-ignore
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import {Layout} from "antd";
import InputPanel from 'components/InputPanel';
import RunCode from 'components/RunCode';
import OutputPanel from 'components/OutputPanel';
import LanguageSelector from 'components/LanguageSelector';
import RoomInfo from 'components/RoomInfo';
import CodeEditor from 'components/CodeEditor';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

const CollabEditor: React.FC = () => {
    const {Content, Sider} = Layout;
    const dispatch = useDispatch();
    const username = useSelector((state: RootStateOrAny) => state.room.username)
    const id = useSelector((state: RootStateOrAny) => state.room.id)
    const theme = useSelector((state: RootStateOrAny) => state.editor.theme)
    const mode = useSelector((state: RootStateOrAny) => state.editor.mode)

    useEffect(() => {
        const scroll = document.getElementById("custom-scroll") as HTMLElement;
        Scrollbar.use(OverscrollPlugin);

        const options = {
            damping: 0.11
        };
        const overscrollOptions = {
            enable: true,
            effect: 'bounce',
            damping: 0.11,
            maxOverscroll: 100,
        };

        Scrollbar.init(scroll, {
            ...options,
            delegateTo: document,
            plugins: {
                overscroll: {...overscrollOptions},
            },
        })

    }, []);

    useEffect(() => {
        // @ts-ignore
        document.getElementById("editor").innerHTML = ""
        CodeEditor(dispatch, id, username, theme, mode)
    }, [dispatch, id, username, theme, mode])


    return (
        <Layout>
            <Sider
                id="custom-scroll"
                breakpoint="lg"
                collapsible={false}
                width={450}
                style={{
                    overflowY: "auto",
                    overflowX: "hidden",
                    height: '100%',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <LanguageSelector/>
                <InputPanel/>
                <RunCode/>
                <OutputPanel/>
                <RoomInfo/>
            </Sider>
            <Layout style={{marginLeft: 450}}>
                <Content style={{
                    float: "right",
                    height: "100%",
                    width: "100%",
                    margin: '24px 16px',
                    overflow: "hidden",
                    alignItems: "center",
                }}>
                    <div id='editor' style={{height: "100%", width: "100%"}}/>
                </Content>
            </Layout>
        </Layout>
    )
};

export default CollabEditor;
