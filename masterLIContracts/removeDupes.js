Array.prototype.countItem = function (item) {
    var counts = {};
    for (var i = 0; i < this.length; i++) {
        var num = this[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts[item] || 0;
}

function findDuplicatesOnAllSheets() {
    var nondupes = []; 
    SpreadsheetApp.getActive().getSheets()
        .forEach(function (s) {
            s.getRange('A2:A')
            .getValues()
            .reduce(function (a, b) {
                return a.concat(b);
            })
            .forEach(function (x, i, v) { 
                if (x && nondupes.countItem(x) == 0) {
                    nondupes.push(x)
                } else if (x && nondupes.countItem(x) >= 1) {
                    // s.getRange(i + 2, 1)
                    // .setBackground('red');
                    s.getRange(i + 2, 1,1,20)
                    .clearContent(); 
                }
            });
        });
    uberSort();
    unpostedDupesComplete(); 
}


function unpostedDupesComplete() {
    var message = 'All "Unposted" duplicates across the spreadsheet have been removed.';
    var title = 'Awesome!';
    SpreadsheetApp.getActiveSpreadsheet().toast(message, title, 5);
} 
