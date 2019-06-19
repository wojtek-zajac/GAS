function blockedBackTopending(e) {
    var message = 'It is back in Pipeline.';
    var title = 'Heads-up!';
    var s = e.source.getActiveSheet();
  
    Utilities.sleep(3000);
  
    if (s.getName() !== "Archive" || e.range.columnStart !== 17 || e.value !== "Re-engage") return;
    
    e.source.getSheetByName("Responses")
        .appendRow(s.getRange(e.range.rowStart, 1, 1, s.getLastColumn())
        .getValues()
        .reduce(function (a, b) {
            return a.concat(b)
        }));

    s.deleteRow(e.range.rowStart);

    sortByColumnQ();
  
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 4);  
}

function sortByColumnQ() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Responses");
    var range = sheet.getRange("A2:V");
  
    range.sort({column: 1});
}
