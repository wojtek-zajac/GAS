function onW() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Custom Menu')
        .addItem('First item', 'menuItem1')
        .addToUi();
}

function menuItem1(){
    showURL("https://www.youtube.com/watch?v=Wfzp4cdcuYc");
}

function onEditIndia() {  
    var s = SpreadsheetApp.getActiveSheet();
    if (s.getName() == 'IN') {
        showURL("https://www.youtube.com/watch?v=Wfzp4cdcuYc");
    }
}

function showURL(href){
    var app = UiApp.createApplication().setHeight(50).setWidth(200);
    var link = app.createAnchor('https://www.youtube.com/watch?v=Wfzp4cdcuYc', href).setId("link");
    var doc = SpreadsheetApp.getActive();
    app.setTitle("Open Link");
    app.add(link);  
    doc.show(app);
}
