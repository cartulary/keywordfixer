const {Cc,Ci} = require("chrome");

var sss = Cc["@mozilla.org/content/style-sheet-service;1"]
                        .getService(Ci.nsIStyleSheetService);
var ios = Cc["@mozilla.org/network/io-service;1"]
                        .getService(Ci.nsIIOService);


function main() {

    var loc = require("sdk/self").data.url("keyword.css");
    var uri = ios.newURI(loc, null, null);
    if(!sss.sheetRegistered(uri, sss.USER_SHEET)) {
        sss.loadAndRegisterSheet(uri, sss.USER_SHEET);
    }
    
}

main();

