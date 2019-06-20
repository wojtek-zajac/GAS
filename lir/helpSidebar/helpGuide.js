function openSidebar() {
    SpreadsheetApp
        .getUi()
        .createMenu('[LIR short guide]')
        .addItem('Setting New Application', 'showSidebarDude')
        .addToUi();
}
  
function showSidebarDude() {
    var html = HtmlService.createHtmlOutputFromFile('sidebar').setTitle('Setting Up the Integration').setWidth(500);
    
    SpreadsheetApp.getUi()
        .showSidebar(html);
}
