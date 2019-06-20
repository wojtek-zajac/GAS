function sortDocumentationData(event){
    //var sheet = event.source.getActiveSheet();
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Documentation-Data") 
    var editedCell = sheet.getActiveCell();
    var columnToSortBy = 1;
    var tableRange = "A2:D";
  
    if(editedCell.getColumn() == columnToSortBy){   
        var range = sheet.getRange(tableRange);
    
        range.sort({
            column: columnToSortBy,
            ascending: true
        });
    }
}
