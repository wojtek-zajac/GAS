function goToFirstEmptyCellOnA() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    sheet.setActiveSelection(sheet.getRange("A"+getFirstEmptyCellInRow(0)));
}
  
function getFirstEmptyCellInRow(rowNum) {
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getDataRange();
    var values = range.getValues();

    for (var row=0; row<values.length; row++) {
        if (!values[row][rowNum]) break;
    }

    return row+1;
}
  