function emailNotificationsAssessments(e) {
    var googleLogoUrl = 'https://goo.gl/dAFuaD';  
    var googleLogoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob().setName('googleLogoBlob');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = e.source.getActiveSheet();
    var maxRow = sheet.getMaxRows();
    var sheetName = sheet.getName();  
    var eRange = e.range;
    var eColumnPosition = eRange.getColumn();
    var eRowPosition = eRange.getRow();
    var range = sheet.getRange('A1:AD');

    if (sheetName == 'Assessments' && eColumnPosition == 2) {
        ss.getSheetByName('Assessments');  
        var eCell = sheet.getActiveCell().getValue().toString();
        var customerColumnPosition = eColumnPosition + 1;  
        var customerCell = range.getCell(eRowPosition, customerColumnPosition); 
        var vendorColumnPosition = eColumnPosition - 1;
        var vendorCell = range.getCell(eRowPosition, vendorColumnPosition);
        var notesColumnPosition = eColumnPosition + 28;
        var notesCell = range.getCell(eRowPosition, notesColumnPosition);
        var customer = customerCell.getValue().toString();
        var vendor = vendorCell.getValue().toString();
        var notes = notesCell.getValue().replace(new RegExp('\r?\n','g'), '<br />').toString();
        var recipient = "w.zajac@smartrecruiters.com";
        var ccRecipients = "w.zajac+1@smartrecruiters.com, w.zajac+2@smartrecruiters.com";
        var replyTo = "fyi_partners@smartrecruiters.com";
        var senderName = "Partner Support Notification";    
        var subject = "Partner Onboarding Status Update - " + vendor + " is " + eCell;
        var body = "<html><body>" 
            + "<table cellpadding='8',cellspacing ='5', width ='550'>"
            + "<tr bgcolor = '#00ae41', style = 'padding: 18px'>"     // SR brand color
            + "<center><font color='#fff'>The onboarding of " 
            + "<strong>" + vendor + "</strong>"
            + " has changed its status to <br><br>" 
            + "<strong>" + eCell + "</strong>" + "</center></font>"  
            + "</tr>"
            + "<tr><td bgcolor = '#F8F9F8', style = 'padding-top: 20px; padding-right: 25px; padding-bottom: 20px; padding-left: 25px;'>" 
            + "<strong> Comments: </strong><br><br>" 
            + "<em><font size='1', face='sans-serif'>" +  notes + "</em></font>"  
            + "</tr>"
            + "<tr><td bgcolor = '#EAEBEA', style = 'padding: 10px'><font size='0,5'>"
            + "<strong>See also:</strong><img src='cid:googleLogo', width='77' align='right'><br>"
            + "<a href='http://bit.ly/2tC0crY'>Current pipeline</a><br>"
            + "<a href='http://bit.ly/2uEL7Lr'>Recent/upcoming Go-Lives</a><br>" 
            + "</font></tr></table></body></html>";      
        
        MailApp.sendEmail({
            to: recipient,
            cc: ccRecipients,
            name: senderName,
            replyTo: replyTo,
            subject: subject,
            htmlBody: body,
            inlineImages: { googleLogo: googleLogoBlob }     
        });
    }
}
