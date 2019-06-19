function changeFontSize() {  
    var s = SpreadsheetApp.getActive().getSheetByName('Responses');
    var r1 = s.getRange('A2:A');
    var r2 = s.getRange('B2:C');
    var r3 = s.getRange('D2:V');
    var r4 = s.getRange('Q2:Q');

    r1.setFontSize(8);
    r2.setFontSize(11).setFontWeight('bold');
    r3.setFontSize(8);
    r4.setFontWeight('bold');
}
