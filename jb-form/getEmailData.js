function newJobBoardSuggestions() {
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("gmail_data") 
    var label = GmailApp.getUserLabelByName("aaaNJBSugg");
    var threads = label.getThreads();
      
    for (var i=0; i<threads.length; i++) {
      var messages = threads[i].getMessages();
   
      for (var j=0; j<messages.length; j++) {
        var msg = messages[j].getPlainBody();
        var sub = messages[j].getSubject();
        var dat = messages[j].getDate();
                
        ss.appendRow([sub, dat, msg]);         
      }
    
    threads[i].removeLabel(label);  
    }
}
