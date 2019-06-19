function emailNotifications(e) {
    var googleLogoUrl = 'https://goo.gl/dAFuaD';  
    var googleLogoBlob = UrlFetchApp
        .fetch(googleLogoUrl)
        .getBlob()
        .setName('googleLogoBlob');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = e.source.getActiveSheet();
    var maxRow = sheet.getMaxRows();
    var sheetName = sheet.getName();  
    var eRange = e.range;
    var eColumnPosition = eRange.getColumn();
    var eRowPosition = eRange.getRow();
    var range = sheet.getRange('A1:R');

    if (sheetName == 'Responses' && eColumnPosition == 17) {
        ss.getSheetByName('Responses');  
        var eCell = sheet.getActiveCell().getValue().toString();
        var customerColumnPosition = eColumnPosition - 13;  
        var customerCell = range.getCell(eRowPosition, customerColumnPosition); 
        var vendor1ColumnPosition = eColumnPosition - 15;
        var vendor1Cell = range.getCell(eRowPosition, vendor1ColumnPosition);
        var vendor2ColumnPosition = eColumnPosition - 14;
        var vendor2Cell = range.getCell(eRowPosition, vendor2ColumnPosition);
        var requestorColumnPosition = eColumnPosition - 4;
        var requestorCell = range.getCell(eRowPosition, requestorColumnPosition);
        var commentColumnPosition = eColumnPosition + 1;
        var commentCell = range.getCell(eRowPosition, commentColumnPosition);
        var customer = customerCell.getValue().toString();
        var vendor1 = vendor1Cell.getValue().toString();
        var vendor2 = vendor2Cell.getValue().toString();
        var comment = commentCell.getDisplayValue().replace(new RegExp('\r?\n','g'), '<br />').toString(); // Handles either type of line break :D
        var requestor = requestorCell.getValue();
        var ccRecipients = "w.zajac+1@smartrecruiters.com, w.zajac+2@smartrecruiters.com";
        var bccRecipients = "w.zajac@smartrecruiters.com";   
        var replyTo = "fyi_partners@smartrecruiters.com";
        var senderName = "Partner Support Notification";
        var subject = 'Integration Status Update - ' + vendor1 + '' + vendor2 + ' for ' + customer + ' is ' + eCell;
        var body = "<html><body>" 
            + "<table cellpadding='8',cellspacing ='5', width ='550'>"
            + "<tr bgcolor = '#00ae41', style = 'padding: 18px'>"     // SR brand color
            + "<center><font color='#fff'>The integration with " 
            + "<strong>" + vendor1 + " " + vendor2 + "</strong>"
            + " for <strong>" + customer + "</strong>" 
            + " has changed its status to <br><br>" 
            + "<strong>" + eCell + "</strong>" + "</center></font>"  
            + "</tr>"
            + "<tr><td bgcolor = '#F8F9F8', style = 'padding-top: 20px; padding-right: 25px; padding-bottom: 20px; padding-left: 25px;'>" 
            + "<strong> Comments: </strong><br><br>" 
            + "<em><font size='1', face='sans-serif'>" +  comment + "</em></font>"  
            + "</tr>"
            + "<tr><td bgcolor = '#EAEBEA', style = 'padding: 10px'><font size='0,5'>"
            + "<strong>See also:</strong><img src='cid:googleLogo', width='77' align='right'><br>"
            + "<a href='http://bit.ly/2uyBpcA'>Current pipeline</a><br>"
            + "<a href='http://bit.ly/2uvDyGo'>Archive</a>"            
            + "</font></tr></table></body></html>";    
        
        MailApp.sendEmail({
            to: requestor,
            cc: ccRecipients,
            bcc: bccRecipients,
            name: senderName,
            replyTo: replyTo,
            subject: subject,
            htmlBody: body,
            inlineImages:
                {
                    googleLogo: googleLogoBlob
                }      
        });
    }
}
