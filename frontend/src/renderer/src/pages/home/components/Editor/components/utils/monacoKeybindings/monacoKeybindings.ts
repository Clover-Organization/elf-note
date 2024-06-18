/* eslint-disable prettier/prettier */
/**
 * Sets up keybindings for the Monaco editor.
 * 
 * @param editor - The Monaco editor instance.
 * @param monaco - The Monaco object.
 */

interface MonacoProps {
    editor: any;
    monaco: any;
}

export const setupKeybindings: React.FC<MonacoProps> = (editor, monaco): void => {

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
        console.log('Saving document');
    });

    editor.addAction({
        id: "format",
        label: "Format",
        keybindings: [
            monaco.KeyMod.Alt | monaco.KeyMod.Shift | monaco.KeyCode.KeyF,
        ],
        contextMenuGroupId: "5_code_actions",
        contextMenuOrder: 5,

        run: editor => {
            console.log('Formatting document');
        }
    });
};
