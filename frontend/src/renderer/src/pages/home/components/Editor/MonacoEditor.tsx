/* eslint-disable prettier/prettier */

import React, { useRef, useEffect } from 'react';
import { useTheme } from '@renderer/global/components/theme-provider';
import { monaco } from './components/utils/monacoConfig/monaco.config';
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
 * A custom Monaco Editor component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.language - The language mode for the editor.
 * @param {string} props.value - The initial value of the editor.
 * @param {function} [props.onChange] - The callback function to be called when the editor content changes.
 * @returns {JSX.Element} The rendered Monaco Editor component.
 */
const MonacoEditor: React.FC<MonacoEditorProps> = ({ language, value, onChange = defaultOnChange }) => {
    const { theme, setTheme } = useTheme();

    /**
     * Sets the theme of the Monaco Editor.
     *
     * @param {string} theme - The theme to be set.
     * @returns {void}
     */
    const setEditorTheme = (theme: string): void => {
        monaco.editor.setTheme(theme);
    };

    const editorRef = useRef<HTMLDivElement | null>(null);
    let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null;

    useEffect(() => {
        setEditorTheme(theme === 'dark' ? 'vs-dark' : 'vs-light');
    }, [theme]);

    useEffect(() => {
        if (editorRef.current) {
            monacoEditor = monaco.editor.create(editorRef.current, {
                value,
                language,
                automaticLayout: true,
            });

            monacoEditor.onDidChangeModelContent(() => {
                if (monacoEditor) {
                    onChange(monacoEditor.getValue());
                }
            });
            setupKeybindings(monacoEditor);
        }
        return () => {
            if (monacoEditor) {
                monacoEditor.dispose();
                monacoEditor = null;
            }
        };
    }, [language, onChange, value]);

    return <div ref={editorRef} />;
};

export default MonacoEditor;
