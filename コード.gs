function setTitleFromGithub() {
  
  //github_apiで稟議書ファイルを取得。利用するAPIはContents APIで一旦一覧取得
  var url = "https://api.github.com/repos/sugimura-private/request-for-approval/contents/";
  var token = PropertiesService.getScriptProperties().getProperties();
  
  var option = {
    method: 'get',
    contentType: 'application/json; charset=utf-8',
    muteHttpExceptions: true,
  };
  
  var response = UrlFetchApp.fetch(url,option);
//  var response = UrlFetchApp.fetch(url);
  var datas = JSON.parse(response);
  Logger.log(datas);
  var data = [];
  for(var i = 0; i < datas.length; i++){
    data.push([i,datas[i].path]);
  }
  Logger.log(data);
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1,1,data.length,data[0].length).setValues(data);

}




function test(){
  var response = UrlFetchApp.fetch('https://api.github.com/repos/sugimura-private/request-for-approval/contents') 
}

function limitCheck(){

  var url = "https://api.github.com/users/sugimura-private";
  
  var response = UrlFetchApp.fetch(url);
  Logger.log(response);
  Logger.log(response.getAllHeaders());
  
}
