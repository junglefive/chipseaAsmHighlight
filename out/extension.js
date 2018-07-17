'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "chipsea" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });
    //   a snippet-based completion item.
    vscode.languages.registerCompletionItemProvider('chipsea', {
        provideCompletionItems(document, position, token, context) {
            return [
                new vscode.CompletionItem('Hello World!'),
                createSnippetItem()
            ];
        }
    });
    function createSnippetItem() {
        // Read more here:
        // https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItem
        // https://code.visualstudio.com/docs/extensionAPI/vscode-api#SnippetString
        // For SnippetString syntax look here:
        // https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets
        let item = new vscode.CompletionItem('Good part of the day', vscode.CompletionItemKind.Snippet);
        item.insertText = new vscode.SnippetString("Good ${1|morning,afternoon,evening|}. It is ${1}, right?");
        item.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");
        return item;
    }
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map