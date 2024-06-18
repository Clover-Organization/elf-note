/* eslint-disable prettier/prettier */

/**
 * Sets up keybindings for the Monaco editor.
 * 
 * @param editor - The Monaco editor instance.
 * @param monaco - The Monaco object.
 */

export const setupKeybindings = (editor: any, monaco: any): void => {

    // editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
    //     console.log('Saving document');
    // });

    editor.addAction({
        id: "save",
        label: "Save",
        keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
        ],
        contextMenuGroupId: "0_save_group",
        contextMenuOrder: 0,

        run: editor => {
            console.log('File saved');
        }
    });
};
