/* eslint-disable prettier/prettier */
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

/**
 * Sets up keybindings for the Monaco editor.
 * 
 * @param monacoEditor - The Monaco editor instance.
 */
export const setupKeybindings = (monacoEditor: monaco.editor.IStandaloneCodeEditor | null): void => {
    if (!monacoEditor) return;

    monacoEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
        console.log('Saving document');
    });
};
