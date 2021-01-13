# office_click_collector

This is a simple Google extension to collect mouse and keyboard clicks from the online version of the office software. 

To get started, in Google's extension page chrome://extensions/, toggle devoloper mode. Then click on "Load Unpacked" and navigate the the folder where this extension is located. Once done that, the extension should be loaded in the tool bar. 

To use the extension, open any office file online (I used word to test). Press Ctrl+Shit+I (might varry for different computer) to open the source code menu. Navigate to console. Then click on the extension icon in the tool bar. You can then click in the office file and the timestamps and the location of the click will be printed out in the concolse. 

Known issue: So far mouse clicks only works in the menus, not in the document area (key clicks works in both areas). It seems that they are located in different frames of the webpages, that's why only works in the menus. 
