function sendHtmlEmailWithInlineImage() {
    var googleLogoUrl = 'http://media.favecentral.com/img/general/11530993_204458.png';
    var googleLogoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob().setName('googleLogoBlob');
    
    MailApp.sendEmail({
        to: 'w.zajac@smartrecruiters.com',
        subject: 'Logos',
        htmlBody: "inline Google Logo  <img src='cid:googleLogo', width='25'>  images! <br>",
        inlineImages: { googleLogo: googleLogoBlob }
    });
}
