function markRowLive() {
    var s = SpreadsheetApp.getActiveSheet();
    var sheetName = s.getSheetName();
    var r = s.getActiveCell();
    var cellContent = r.getValue();
    
    if (
        sheetName === 'Assessments' &&
        r.getColumn() === 2 &&
        cellContent === 'Live'
    ) { 
        var row = r.getRow();
        var time = new Date();
  
        time = Utilities.formatDate(time, 'GMT+01:00', 'MM/dd/yy'); 
   
        SpreadsheetApp
            .getActiveSheet()
            .getRange('G' + row.toString())
            .setValue(time); 
    }
}
