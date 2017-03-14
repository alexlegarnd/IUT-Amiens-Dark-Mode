chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://ent.iut-amiens.fr";
    chrome.tabs.create({ url: newURL });
});
