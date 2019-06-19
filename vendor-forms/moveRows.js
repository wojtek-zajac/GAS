// Move the whole row to another Sheet on specific cells change

function moveLiveRows(e) {
    var title = 'Heads-up!';
    var message = 'It has been archived.';
    var s = e.source.getActiveSheet();
    
    Utilities.sleep(2000);  
    
    if (s.getName() !== "Responses" || e.range.columnStart !== 17 || e.value !== "Live") return;
    
    markAsLive();
    
    e.source.getSheetByName("Archive")
        .appendRow(s.getRange(e.range.rowStart, 1, 1, s.getLastColumn())
            .getValues()
            .reduce(function (a, b) {
                return a.concat(b)
            }))
    
    s.deleteRow(e.range.rowStart);
    
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 4);
}


function markAsLive() {
    var s = SpreadsheetApp.getActiveSheet();
    var sheetName = s.getSheetName();
    var r = s.getActiveCell();
    var cellContent = r.getValue();
    
    if(sheetName === "Responses" && r.getColumn() === 17 && cellContent === "Live") {
        var row = r.getRow();
        var time = new Date();
        
        time = Utilities.formatDate(time, "GMT+01:00", "MM/dd/yy HH:mm:ss");        
        
        SpreadsheetApp.getActiveSheet()
            .getRange('U' + row.toString())
            .setValue(time); 
    }
}

function moveBlockedRows(e) {
    var title = 'Heads-up!';
    var message = 'It has been archived.';
    var s = e.source.getActiveSheet();
    
    Utilities.sleep(3000);
    
    if (s.getName() !== "Responses" || e.range.columnStart !== 17 || e.value !== "Blocked") return;
    
    e.source.getSheetByName("Archive")
        .appendRow(s.getRange(e.range.rowStart, 1, 1, s.getLastColumn())
        .getValues()
        .reduce(function (a, b) {
            return a.concat(b)
        }))
    
    s.deleteRow(e.range.rowStart);
    
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 4);  
}

function moveDuplicateRows(e) {
    var title = 'Heads-up!';
    var message = 'It has been archived.';
    var s = e.source.getActiveSheet();
    
    Utilities.sleep(3000);  
  
    if (s.getName() !== "Responses" || e.range.columnStart !== 17 || e.value !== "Duplicate") return;
    
    e.source.getSheetByName("Archive")
        .appendRow(s.getRange(e.range.rowStart, 1, 1, s.getLastColumn())
        .getValues()
        .reduce(function (a, b) {
            return a.concat(b)
        }))
    
    s.deleteRow(e.range.rowStart);
    
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 4);  
}

function moveOhHoldRows(e) {
    var title = 'Heads-up!';
    var message = 'It has been archived.';
    var s = e.source.getActiveSheet();
  
    Utilities.sleep(3000);
  
    if (s.getName() !== "Responses" || e.range.columnStart !== 17 || e.value !== "On Hold") return;
    
    e.source.getSheetByName("Archive")
        .appendRow(s.getRange(e.range.rowStart, 1, 1, s.getLastColumn())
        .getValues()
        .reduce(function (a, b) {
            return a.concat(b)
        }))
    
    s.deleteRow(e.range.rowStart);
    
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 4);  
}
