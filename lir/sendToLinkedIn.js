var ss;
var sheet;
var eventRowNum;
var eventColumnNum;
var eventTriggerColumnNum;
var eventCell;
var eventCellValue;
var eventRowRange;
var eventRowObject;
var eventRowArray;
var eventCompany;
var eventSeatHolder;
var eventEmail;
var eventLiId;
var eventKey;

function conditionsAllow(event) {
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventColumnNum = event.range.columnStart;
    eventTriggerColumnNum = 17;
    eventCellValue = sheet.getRange(eventRowNum, eventColumnNum).getValue();
    eventRowRange = sheet.getRange(eventRowNum, 1, 1, 9);
    eventRowObject = eventRowRange.getValues();
    eventRowArray = eventRowObject[0];
    eventCompany = eventRowArray[1];
    eventSeatHolder = eventRowArray[5];
    eventEmail = eventRowArray[6];
    eventLiId = eventRowArray[7];
    eventKey = eventRowArray[8];
    
    if (eventColumnNum === eventTriggerColumnNum &&
        eventCellValue == "Send the request to LinkedIn" &&
        eventCompany != "" &&
        eventSeatHolder != "" &&
        eventEmail != "" &&
        eventLiId != "" &&
        eventKey != "") {
            return true;
    }
}

function conditionsNotAllow(event) {
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventColumnNum = event.range.columnStart;
    eventTriggerColumnNum = 17;
    eventCellValue = sheet.getRange(eventRowNum, eventColumnNum).getValue();
    eventRowRange = sheet.getRange(eventRowNum, 1, 1, 9);
    eventRowObject = eventRowRange.getValues();
    eventRowArray = eventRowObject[0];
    eventCompany = eventRowArray[1];
    eventSeatHolder = eventRowArray[5];
    eventEmail = eventRowArray[6];
    eventLiId = eventRowArray[7];
    eventKey = eventRowArray[8];
    
    if (eventColumnNum === eventTriggerColumnNum &&
        (eventCompany == "" ||
        eventSeatHolder == "" ||
        eventEmail == "" ||
        eventLiId == "" ||
        eventKey == "")) {
            return true;
    }
}

function htmlBody(event) {
    var htmlBody;
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventRowRange = sheet.getRange(eventRowNum, 1, 1, 9);
    eventRowObject = eventRowRange.getValues();
    eventRowArray = eventRowObject[0];
    eventCompany = eventRowArray[1];
    eventSeatHolder = eventRowArray[5];
    eventEmail = eventRowArray[6];
    eventLiId = eventRowArray[7];
    eventKey = eventRowArray[8];
    htmlBody = "<html><body>Please enable the <strong>LinkedIn CSA integration</strong> for the following customer: <br><br>" +
    "- Customer Account Name: <strong>" + eventCompany + "</strong><br>" +
    "- Customer Contact Name: <strong>" + eventSeatHolder + "</strong><br>" +
    "- Customer Contact Email: <strong>" + eventEmail + "</strong><br>" +
    "- Customer LinkedIn Contract ID(s): <strong>" + eventLiId + "</strong><br>" +
    "- LinkedIn API Key: <strong>" + eventKey + "</strong><br></body></html>";
    
    return htmlBody;
}

function sendEmail(event) {
    var liSupport;
    var ccRecipients;
    var replyTo;
    var senderName;
    var subject;
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventRowRange = sheet.getRange(eventRowNum, 1, 1, 9);
    eventRowObject = eventRowRange.getValues();
    eventRowArray = eventRowObject[0];
    eventCompany = eventRowArray[1];
    liSupport = "sr@linkedin.com, fyi_partners@smartrecruiters.com";
    ccRecipients = "fyi_partners@smartrecruiters.com";
    replyTo = "fyi_partners@smartrecruiters.com";
    senderName = "SmartRecruiters Support";
    subject = "SmartRecruiters LinkedIn CSA enablement request - " + eventCompany;
    
    MailApp.sendEmail({
        to: liSupport,
        cc: ccRecipients,
        name: senderName,
        replyTo: replyTo,
        subject: subject,
        htmlBody: htmlBody(event),
    });
}

function todayDate() {
    var date = new Date();
    date = Utilities.formatDate(date, "GMT+01:00", "MM/dd/yy");
    
    return date;
}

function setDateSent(event) {
    var dateSentColumnNum;
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    dateSentColumnNum = 11;
    
    sheet
        .getRange(eventRowNum, dateSentColumnNum)
        .setValue(todayDate())
        .setBackground("#ccf2a9");
}

function setNote(event) {
    var notesColumnNum;
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    notesColumnNum = 16;
    
    sheet
        .getRange(eventRowNum, notesColumnNum)
        .setValue("Sent to LI for provisioning")
        .setBackground("#f9f1a5");
}

function markTriggerCellComplete(event) {
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventColumnNum = event.range.columnStart;
    
    sheet
        .getRange(eventRowNum, eventColumnNum)
        .setValue("«")
        .setBackground("#f9f1a5");
}

function setNewDataValidation(event) {
    ss = SpreadsheetApp.openById('1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM');
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventColumnNum = event.range.columnStart;
    eventCell = sheet.getRange(eventRowNum, eventColumnNum);
    var dataValidation = SpreadsheetApp.newDataValidation();
    var option = new Array();
    option[0] = "Send it to Everest";
    dataValidation.setAllowInvalid(true);
    dataValidation.setHelpText("Some help text here");
    dataValidation.requireValueInList(option, true);
    eventCell.setDataValidation(dataValidation);
 }

function toast(event) {
    var toastMessage;
    var toastTitle;
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventRowRange = sheet.getRange(eventRowNum, 1, 1, 9);
    eventRowObject = eventRowRange.getValues();
    eventRowArray = eventRowObject[0];
    eventCompany = eventRowArray[1];
    toastMessage = eventCompany + " LIR enablement request has been sent to LinkedIn.";
    toastTitle = 'Heads up!';
    
    ss
        .toast(toastMessage, toastTitle, 8);
}

function displayError(event) {
    ss = SpreadsheetApp.openById("1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM");
    sheet = ss.getSheetByName("App Data");
    eventRowNum = event.range.rowStart;
    eventColumnNum = event.range.columnStart;
    
    sheet
        .getRange(eventRowNum, eventColumnNum)
        .setValue("Error. Some data missing")
        .setBackground("#e78a8a");
}

function sendToLi(event) {
    if (conditionsAllow(event)) {
        sendEmail(event);
        setDateSent(event);
        setNote(event);
        markTriggerCellComplete(event);
        setNewDataValidation(event);
        toast(event);
    } else if (conditionsNotAllow(event)) {
        displayError(event);
    }
}
