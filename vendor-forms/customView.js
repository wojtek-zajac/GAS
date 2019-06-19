function menuFilter() {
    SpreadsheetApp.getUi()
        .createMenu('(Custom View/Filtering)')
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Status')
            .addItem('Pending', 'showPending')
            .addItem('New', 'showNew')
            .addItem('On Hold', 'showOnHold')
        .addSeparator()
            .addItem('Blocked/Duplicate', 'showBlocked')
            .addItem('Live', 'showLive'))
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Type')
            .addItem('New Vendor Inquiry/Request','showNewVendor')
            .addItem('Existing Contract Activation','showExistingContract')
            .addItem('Partner Referral Request','showReferral'))     
            .addItem('Show All', 'showAll')
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi().createMenu('Narrowing')
            .addItem('Clean View', 'hideColumns')
            .addItem('Show Timestamps', 'showTimestamps')
            .addItem('Show All', 'showColumns'))
        .addToUi();
  }
    
function showPending() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'Q';
    var allowedStatuses = [
        'Pending for Onboarding',
        'Pending with ProfServ',
        'Pending with Partner',
        'Pending with Customer',
        'Custom',
        'Pending with Requestor',
        ''];
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();
  
    showAll();
    
    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function showNew() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'Q';
    var allowedStatuses = ('');
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();

    showAll();

    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function showOnHold() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'Q';
    var allowedStatuses = 'On Hold';
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();

    showAll();

    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function showBlocked() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'Q';
    var allowedStatuses = ['Blocked', 'Duplicate'];
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();

    showAll();

    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function showLive() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'Q';
    var allowedStatuses = 'Live';
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();

    showAll();

    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function showAll() {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    
    activeSheet.showRows(1, activeSheet.getMaxRows());
}

function showNewVendor() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'I';
    var allowedStatuses = ['New Vendor Inquiry', 'New Vendor Request', ''];
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();

    showAll();

    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function showExistingContract() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'I';
    var allowedStatuses = 'Existing Contract Activation';
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();

    showAll();

    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function showReferral() {
    var FIRST_ROW_INDEX = 2;
    var COLUMN_ID = 'I';
    var allowedStatuses = 'Partner Referral Request';
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 
    var lastRow = activeSheet.getLastRow();

    showAll();

    for (var i = FIRST_ROW_INDEX; i <= lastRow; i++) {
        var status = activeSheet.getRange(COLUMN_ID + i).getValue();
        
        if (allowedStatuses.indexOf(status) == -1) {
            activeSheet.hideRows(i)
        }
    }
}

function hideColumns() {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 

    activeSheet.hideColumns(1);
    activeSheet.hideColumns(5,4);
    activeSheet.hideColumns(11);
    activeSheet.hideColumns(13,4);
    activeSheet.hideColumns(19,4);
}

function showTimestamps(){
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 

    activeSheet.showColumns(1);
    activeSheet.showColumns(19,4);
}

function showColumns() {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
    var activeSheet = activeSpreadsheet.getActiveSheet(); 

    activeSheet.showColumns(1);
    activeSheet.showColumns(5,4);
    activeSheet.showColumns(11);
    activeSheet.showColumns(13,4);
    activeSheet.showColumns(19,4);
}
