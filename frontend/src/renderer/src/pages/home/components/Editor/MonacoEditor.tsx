/* eslint-disable prettier/prettier */
// MonacoEditor.tsx

import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useTheme } from '@renderer/global/components/theme-provider';

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
 * @param language - The language mode for the editor.
 * @param value - The initial value of the editor.
 * @param onChange - The callback function to be called when the content of the editor changes.
 */
const MonacoEditor: React.FC<MonacoEditorProps> = ({ language, value, onChange = defaultOnChange }) => {
    const { theme, setTheme } = useTheme();
    const setEditorTheme = (theme: string):void => {
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

            // Evento de mudança de conteúdo
            monacoEditor.onDidChangeModelContent(() => {
                if (monacoEditor) {
                    onChange(monacoEditor.getValue());
                }
            });
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
