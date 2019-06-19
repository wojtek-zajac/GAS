function removeOther() {
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses');
    var lrow = ss.getLastRow();
    var range = ss.getRange(2, 2, lrow -1, 1);
    var data = range.getValues();
  
    for (var i=0; i < data.length; i++) {
      if (data[i][0] == 'Other') {
        data[i][0] = '';
      } /*else if (data[i][0] == "y") {
        data[i][0] = "Yes";
      }*/
    }
    
    range.setValues(data);
}

function specifyOtherFill (){
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses');
    var numRows = ss.getLastRow();

    for (var i=1; i<numRows; i++){
        var vendor = ss.getRange(i,2).getValue();
        var specifyOther = ss.getRange(i,3).getValue();

        if (specifyOther === ''){
            ss.getRange(i,3).setValue(vendor);
            ss.getRange(i,2).clearContent();
        } 
    }
}
