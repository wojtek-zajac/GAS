function goToAssessments() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Assessments");
    
    ss.setActiveSheet(sheet).setActiveSelection("A1");
}
