/* eslint-disable prettier/prettier */
// MonacoEditor.tsx

import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

import MonacoEnvironment from './components/utils/MonacoEnvironment';

interface MonacoEditorProps {
    // Props do seu componente
    language: string;
    value: string;
    onChange: (value: string) => void;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ language, value, onChange }) => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null;

    useEffect(() => {
        if (editorRef.current) {
            // Configuração do editor
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
            // Limpar o editor
            if (monacoEditor) {
                monacoEditor.dispose();
                monacoEditor = null;
            }
        };
    }, [language, onChange, value]);

    return <div ref={editorRef} style={{ width: '100%', height: '100%' }} />;
};

export default MonacoEditor;
