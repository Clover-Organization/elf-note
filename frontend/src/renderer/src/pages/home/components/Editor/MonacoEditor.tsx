/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import * as monaco from 'monaco-editor';

const MonacoEditor: React.FC = () => {
    useEffect(() => {
        const editor = monaco.editor.create(document.getElementById('editor')!, {
            value: `function hello() {
  console.log('Hello, world!');
}`,
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true,
        });

        return () => {
            editor.dispose();
        };
    }, []);

    return (
        <div id="editor" style={{ width: '100%', height: '100%' }}></div>
    );
};

export default MonacoEditor;