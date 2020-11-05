import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { editorMode } from "actions";

const ThemeSelector: React.FC = () => {

    const {Option} = Select;
    const dispatch = useDispatch();

    const themes = ['3024-day', '3024-night', 'abcdef', 'ambiance-mobile', 'ambiance', 'base16-dark', 'base16-light', 'bespin', 'blackboard', 'cobalt', 'colorforth', 'darcula', 'dracula', 'duotone-dark', 'duotone-light', 'eclipse', 'elegant', 'erlang-dark', 'gruvbox-dark', 'hopscotch', 'icecoder', 'idea', 'isotope', 'lesser-dark', 'liquibyte', 'lucario', 'material', 'mbo', 'mdn-like', 'midnight', 'monokai', 'neat', 'neo', 'night', 'oceanic-next', 'panda-syntax', 'paraiso-dark', 'paraiso-light', 'pastel-on-dark', 'railscasts', 'rubyblue', 'seti', 'shadowfox', 'solarized', 'ssms', 'the-matrix', 'tomorrow-night-bright', 'tomorrow-night-eighties', 'ttcn', 'twilight', 'vibrant-ink', 'xq-dark', 'xq-light', 'yeti', 'zenburn'];

    const handleChange = (e: string) => {
        dispatch(editorMode(e))
    }

    return (
        <div>
            <Select defaultValue={useSelector((state: RootStateOrAny) => state.editor.theme)} onChange={handleChange}>
            {themes.map((theme) => (
                    <Option value={theme} key={theme}>
                        {theme}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default ThemeSelector;