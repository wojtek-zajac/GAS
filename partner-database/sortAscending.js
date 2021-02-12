function onEditASS(event) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Assessments");
    var editedCell = sheet.getActiveCell();
    var columnToSortBy = 1;
    var tableRange = "A2:AK";
    var message = 'The list has been sorted ascending - check for your entry.';
    var title = 'Heads-up!';
  
    if (editedCell.getColumn() == columnToSortBy) {   
        var range = sheet.getRange(tableRange);
        
        range.sort({
            column : columnToSortBy,
            ascending: true
        });
        
        SpreadsheetApp
            .getActiveSpreadsheet()
            .toast(message, title, 4);
    }
}
  
