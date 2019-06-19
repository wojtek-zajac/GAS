function formulaFill() {
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses');
    var formulaRangeTTP = ss.getRange('T2');
    var destinationRangeTTP = ss.getRange('T3:T');
    var formulaRangeAT = ss.getRange('V2');
    var destinationRangeAT = ss.getRange('V3:V');                                  
    var formulaTTP = formulaRangeTTP.getFormulaR1C1();
    var formulaAT = formulaRangeAT.getFormulaR1C1();
    
    destinationRangeTTP.setFormula(formulaTTP);
    destinationRangeAT.setFormula(formulaAT);
}
