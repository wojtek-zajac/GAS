function firstActionTimestamp() {
    var s = SpreadsheetApp.getActiveSheet();
    var sheetName = s.getSheetName();
    var r = s.getActiveCell();
    var cellContent = r.getValue();
    
    if(sheetName === "Responses" && r.getColumn() === 17 &&  
       cellContent === "Pending for Onboarding" ||
       cellContent === "Pending with Partner" ||
       cellContent === "Pending with Customer" ||
       cellContent === "Pending with ProfServ" ||
       cellContent === "Pending with Requestor" ||
       cellContent === "Custom") { 
        var row = r.getRow();
        var time = new Date();
        
        time = Utilities.formatDate(time, "GMT+01:00", "MM/dd/yy HH:mm:ss");        
   
        SpreadsheetApp.getActiveSheet().getRange('S' + row.toString()).setValue(time);   
    }
}
