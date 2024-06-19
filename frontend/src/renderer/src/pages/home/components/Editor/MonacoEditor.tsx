/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '@renderer/global/components/theme-provider';
import { setupKeybindings } from './components/utils/monacoKeybindings/monacoKeybindings';

interface MonacoEditorProps {
    language: string;
    value: string;
    onChange?: (value: string) => void;
}

const defaultOnChange = (value: string): void => {
    console.log(value);
};

/**
 * A React component that wraps the Monaco Editor.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.language - The language mode for the editor.
 * @param {string} props.value - The initial value of the editor.
 * @param {function} [props.onChange] - The callback function to handle editor changes.
 * @returns {JSX.Element} The rendered Monaco Editor component.
 */

const MonacoEditor: React.FC<MonacoEditorProps> = ({ language, value, onChange = defaultOnChange }: { language: string; value: string; onChange?: void | any; }): JSX.Element => {

    const { theme, setTheme } = useTheme();
    const [editorTheme, setEditorTheme] = React.useState(theme === 'dark' ? 'vs-dark' : 'vs-light');

    useEffect(() => {
        setEditorTheme(theme === 'dark' ? 'vs-dark' : 'vs-light');
    }, [theme]);

    return (
        <Editor
            width={"98vw"}
            defaultLanguage={language}
            defaultValue={value}
            onChange={onChange}
            theme={editorTheme}
            onMount={setupKeybindings}
        />
    );
};
export default MonacoEditor;