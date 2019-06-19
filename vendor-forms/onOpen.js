// Toast message. Requires setting up an onOpen trigger in the Spreadsheet events settings.

function welcome() {
    var message = 'Check out the new Custom View/Filtering menu.';
    var title = 'Heads Up!';
    
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 20);
}
