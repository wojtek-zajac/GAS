function gmail_sheet() {
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("New Marketplace Requests");
    var label = GmailApp.getUserLabelByName("New Mrkpl Req");
    var threads = label.getThreads();
      
    for (var i=0; i<threads.length; i++) {
    var messages = threads[i].getMessages();
        
        for (var j=0; j<messages.length; j++) {
            var msg = messages[j].getPlainBody();
            var sub = messages[j].getSubject();
            var dat = messages[j].getDate();
        
            ss.appendRow([msg, sub, dat]);       
        }

        threads[i].removeLabel(label);  
    }
}
