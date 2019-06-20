function onFormSubmit(e){
    checkDuplicates(); 
}  

function checkDuplicates() {
    var ss = SpreadsheetApp.openById('1GoVxizXpZVYgCsHfArtb8WnEQxtbL4xrbP6PzbR3iXM');
    var sheet = ss.getSheetByName("App Data");
    var dataRange = sheet.getRange('B3:B');
    var data = dataRange.getValues();
    var numRows = data.length;
    var numColumns = data[0].length;
    var formats = [];
    var values = [];
    var numValues = values.length;
    
    for (var i = 0; i < numRows; i++) {
        formats[i] = [];
        for (var j = 0; j < numColumns; j++) {
            formats[i][j] = 'WHITE';
            if (data[i][j] != '') {
                values.push([data[i][j], i, j]);
            }
        }
    }

    for (var k = 0 ; k < numValues - 1; k++) {
        if (formats[values[k][1]][values[k][2]] == 'WHITE') {
            for (var l = k + 1; l < numValues; l++) {
                if (values[k][0] == values[l][0]) {
                    formats[values[k][1]][values[k][2]] = '#f9f1a5';
                    formats[values[l][1]][values[l][2]] = '#e78a8a';
                }
            }
        }
    }

    dataRange.setBackgroundColors(formats);
}
