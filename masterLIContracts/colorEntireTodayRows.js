function uberColor() {
    var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AP");
    var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("EU");
    var sheet3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("GCG");
    dateCheck(sheet1);
    dateCheck(sheet2);
    dateCheck(sheet3);
    goToPending();
    wowAll();
}  

function dateCheck(sheetName) {
    var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    var headers = sheet1.getRange(1,18,sheet1.getLastRow()).getValues();
    var today = new Date().setHours(0,0,0,0);
    for(var n=0; n<headers.length; ++n) {
        var date = new Date(headers[n][0]).setHours(0,0,0,0);
        Logger.log('Test row '+n);
        if(date == today) {
            Logger.log('Set bg at '+n);
            sheet1.getRange(n+1,1,1,sheet1.getMaxColumns()).setBackground('#d9ead3');
        }
    }
}
  
function goToPending() {
    var ssx = SpreadsheetApp.getActiveSpreadsheet();
    var sheetx = ssx.getSheetByName(">> Pending");
    ssx.setActiveSheet(sheetx).setActiveSelection("A1");
}


function wowAll() {
    var message = 'All new items in all contracts have been marked in green.';
    var title = 'Awesome!';
    SpreadsheetApp
        .getActiveSpreadsheet()
        .toast(message, title, 4);
} 
  