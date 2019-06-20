function colorRowsComplete() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getActiveSheet();
    dateCheck(sh);
    woow();
}

function dateCheck(sh) {
    var headers = sh.getRange(1,18,sh.getLastRow()).getValues();
    var today = new Date().setHours(0,0,0,0);
    for (var n=0; n < headers.length; ++n) {
        var date = new Date(headers[n][0]).setHours(0,0,0,0);
        Logger.log('Test row '+n);
        if (date == today) {
            Logger.log('Set bg at '+n);
            sh.getRange(n+1,1,1,sh.getMaxColumns())
            .setBackground('#d9ead3');
        }
    }
}

function woow() {  
    var ssGG = SpreadsheetApp.getActiveSpreadsheet(); 
    var shNameGG = ssGG.getSheetName();
    var message = 'All new items in ' + shNameGG + ' have been marked in green.';
    var title = 'Great!';
    SpreadsheetApp
        .getActiveSpreadsheet()
        .toast(message, title, 3);
} 
