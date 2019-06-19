function moveDsRows(f) {
    var title = 'Heads-up!';
    var message = 'It has been archived.';
    var s = f.source.getActiveSheet();
  
    Utilities.sleep(2000);  
  
    if (s.getName() !== "Responses" || f.range.columnStart !== 17 || f.value !== "Client Introduced") return;
  
    markDsAsLive();
  
    f.source.getSheetByName("Archive")
        .appendRow(s.getRange(f.range.rowStart, 1, 1, s.getLastColumn())
        .getValues()
        .reduce(function (a, b) {
            return a.concat(b)
        }))
    
    s.deleteRow(f.range.rowStart);
    
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 4);
}

function markDsAsLive() {
    var s = SpreadsheetApp.getActiveSheet();
    var sheetName = s.getSheetName();
    var r = s.getActiveCell();
    var cellContent = r.getValue();

    if(sheetName === "Responses" && r.getColumn() === 17 && cellContent === "Client Introduced") { 
        var row = r.getRow();
        var time = new Date();
        
        time = Utilities.formatDate(time, "GMT+01:00", "MM/dd/yy HH:mm:ss");        

        SpreadsheetApp.getActiveSheet().getRange('U' + row.toString()).setValue(time); 
    }
}
