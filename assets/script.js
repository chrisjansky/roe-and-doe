function res(){
podmenu_game_shortcut_var = 0;
bryle = 1;
outfit = 1;
bg = 1;
outfit_button = 0;

$(".shop_item").click(
  function() {
    window.open ('http://roeanddoe.sk/product','_self',false);
  });
  
$("#item_closed_in_right_x").click(
  function() {
     window.history.back();
  });  

$("#contact-us").css("height", $("#menu").height()-130);
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
    if(getCookie("bg") == 1){
      $( "#content" ).css("background-image", "url(./img/background.png)");
      bg = 1;
    }
    else if(getCookie("bg") == 2){
      $( "#content" ).css("background-image", "url(./img/background_2.jpg)");
      bg = 2;
    }
    else if(getCookie("bg") == 3){
      $( "#content" ).css("background-image", "url(./img/background_3.jpg)");
      bg = 3;
    }
    if(getCookie("bryl") == "nie"){
      $( "#bryle" ).css("background-image", "none");      
      bryle = 0;
    }
    else if( getCookie("bryl") == 2){
      $( "#bryle" ).css("width", "127px");
      $( "#bryle" ).css("height", "71px");
      $( "#bryle" ).css("marginLeft", "57px");  
      $( "#bryle" ).css("background-image", "url(./img/glasses_2.png)");
      bryle = 2;
    }
    else if( getCookie("bryl") == 1){
      $( "#bryle" ).css("width", "155px");
      $( "#bryle" ).css("height", "66px");
      $( "#bryle" ).css("marginLeft", "40px");  
      $( "#bryle" ).css("background-image", "url(./img/glasses.png)");
      bryle = 1;
    }
    if(getCookie("out") == 2){
      $( "#outfit" ).css("width", "550px");
      $( "#outfit" ).css("height", "733px"); 
      $( "#outfit" ).css("marginLeft", "200px"); 
      $( "#outfit" ).css("marginTop", "80px");
      $( "#menu, #content" ).css("min-height", "810px");
      $( "#outfit" ).css("background-image", "url(./img/outfit_2.png)"); 
      document.cookie="out=2; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 2;
    }
    else if( getCookie("out") == 3){
      $( "#outfit" ).css("width", "518px");
      $( "#outfit" ).css("height", "691px"); 
      $( "#outfit" ).css("marginLeft", "190px");      
      $( "#menu, #content" ).css("min-height", "770px");      
      document.cookie="out=3; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      $( "#outfit" ).css("background-image", "url(./img/outfit_3.png)");
      outfit = 3;
    }
    else if( getCookie("out") == 4){
      $( "#outfit" ).css("width", "529px");
      $( "#outfit" ).css("height", "705px"); 
      $( "#outfit" ).css("marginLeft", "198px"); 
      $( "#outfit" ).css("marginTop", "95px");      
      $( "#menu, #content" ).css("min-height", "800px");
      document.cookie="out=4; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      $( "#outfit" ).css("background-image", "url(./img/outfit_4.png)");
      outfit = 4;
    }
    else if( getCookie("out") == 1){
      $( "#outfit" ).css("width", "306px");
      $( "#outfit" ).css("height", "540px"); 
      $( "#outfit" ).css("marginLeft", "351px"); 
      $( "#outfit" ).css("marginTop", "260px");      
      $( "#menu, #content" ).css("min-height", "800px");       
      $( "#outfit" ).css("background-image", "url(./img/outfit.png)");
      document.cookie="out=1; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 1;
    }    
    
$("#make_outfit").click(
  function() {
    $( "#podmenu_game_shortcut, .game-buttons" ).css("visibility", "visible");
  });
$("#mail_add, #mail_subj, #mail_mess").click(
  function() {
    $( this ).css("text-align", "left");
  });
$("#podmenu_game_shortcut").click(
  function() {
    if(podmenu_game_shortcut_var == 0){
      $( "#podmenu_game" ).css("visibility", "visible");
      podmenu_game_shortcut_var = 1;
    }
    else {$( "#podmenu_game" ).css("visibility", "hidden"); podmenu_game_shortcut_var = 0;}
  });
$("#bryle_left").click(
  function() {
    if(bryle == 1){
      $( "#bryle" ).css("background-image", "none");      
      document.cookie="bryl=nie; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bryle = 0;
    }
    else if( bryle == 0){
      $( "#bryle" ).css("width", "127px");
      $( "#bryle" ).css("height", "71px");
      $( "#bryle" ).css("marginLeft", "57px");  
      $( "#bryle" ).css("background-image", "url(./img/glasses_2.png)");
      document.cookie="bryl=2; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bryle = 2;
    }
    else if( bryle == 2){
      $( "#bryle" ).css("width", "155px");
      $( "#bryle" ).css("height", "66px");
      $( "#bryle" ).css("marginLeft", "40px");  
      $( "#bryle" ).css("background-image", "url(./img/glasses.png)");
      document.cookie="bryl=1; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bryle = 1;
    }
  });
$("#bryle_right").click(
  function() {
    if(bryle == 1){
      $( "#bryle" ).css("width", "127px");
      $( "#bryle" ).css("height", "71px");
      $( "#bryle" ).css("marginLeft", "57px");  
      $( "#bryle" ).css("background-image", "url(./img/glasses_2.png)");
      document.cookie="bryl=2; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bryle = 2;
    }
    else if( bryle == 2){
      $( "#bryle" ).css("background-image", "none");
      document.cookie="bryl=nie; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bryle = 0;
    }
    else if( bryle == 0){
      $( "#bryle" ).css("width", "155px");
      $( "#bryle" ).css("height", "66px"); 
      $( "#bryle" ).css("marginLeft", "40px");  
      $( "#bryle" ).css("background-image", "url(./img/glasses.png)");
      document.cookie="bryl=1; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bryle = 1;
    }
  });
$("#outfit_left").click(
  function() {
    if(outfit == 1){
      $( "#outfit" ).css("width", "529px");
      $( "#outfit" ).css("height", "705px"); 
      $( "#outfit" ).css("marginLeft", "198px"); 
      $( "#outfit" ).css("marginTop", "95px");
      $( "#menu, #content" ).css("min-height", "800px");  
      $( "#outfit" ).css("background-image", "url(./img/outfit_4.png)");
      document.cookie="out=4; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 4;
    }
    else if( outfit == 4){
      $( "#outfit" ).css("width", "518px");
      $( "#outfit" ).css("height", "691px"); 
      $( "#outfit" ).css("marginLeft", "190px");
      $( "#menu, #content" ).css("min-height", "785px");     
      $( "#outfit" ).css("background-image", "url(./img/outfit_3.png)");
      document.cookie="out=3; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 3;
    }
    else if( outfit == 3){
      $( "#outfit" ).css("width", "550px");
      $( "#outfit" ).css("height", "733px"); 
      $( "#outfit" ).css("marginLeft", "200px"); 
      $( "#outfit" ).css("marginTop", "80px");      
      $( "#menu, #content" ).css("min-height", "810px");
      $( "#outfit" ).css("background-image", "url(./img/outfit_2.png)");
      document.cookie="out=2; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 2;
    }
    else if( outfit == 2){
      $( "#outfit" ).css("width", "306px");
      $( "#outfit" ).css("height", "540px"); 
      $( "#outfit" ).css("marginLeft", "351px"); 
      $( "#outfit" ).css("marginTop", "260px"); 
      $( "#menu, #content" ).css("min-height", "800px");    
      $( "#outfit" ).css("background-image", "url(./img/outfit.png)");
      document.cookie="out=1; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 1;
    }
  });
$("#outfit_right").click(
  function() {
    if(outfit == 1){
      $( "#outfit" ).css("width", "550px");
      $( "#outfit" ).css("height", "733px"); 
      $( "#outfit" ).css("marginLeft", "200px"); 
      $( "#outfit" ).css("marginTop", "80px");
      $( "#menu, #content" ).css("min-height", "810px");
      $( "#outfit" ).css("background-image", "url(./img/outfit_2.png)"); 
      document.cookie="out=2; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 2;
    }
    else if( outfit == 2){
      $( "#outfit" ).css("width", "518px");
      $( "#outfit" ).css("height", "691px"); 
      $( "#outfit" ).css("marginLeft", "190px");      
      $( "#menu, #content" ).css("min-height", "770px");      
      document.cookie="out=3; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      $( "#outfit" ).css("background-image", "url(./img/outfit_3.png)");
      outfit = 3;
    }
    else if( outfit == 3){
      $( "#outfit" ).css("width", "529px");
      $( "#outfit" ).css("height", "705px"); 
      $( "#outfit" ).css("marginLeft", "198px"); 
      $( "#outfit" ).css("marginTop", "95px");      
      $( "#menu, #content" ).css("min-height", "800px");
      document.cookie="out=4; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      $( "#outfit" ).css("background-image", "url(./img/outfit_4.png)");
      outfit = 4;
    }
    else if( outfit == 4){
      $( "#outfit" ).css("width", "306px");
      $( "#outfit" ).css("height", "540px"); 
      $( "#outfit" ).css("marginLeft", "351px"); 
      $( "#outfit" ).css("marginTop", "260px");      
      $( "#menu, #content" ).css("min-height", "800px");       
      $( "#outfit" ).css("background-image", "url(./img/outfit.png)");
      document.cookie="out=1; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      outfit = 1;
    }
  });
$("#change_bg_left").click(
  function() {
    if(bg == 1){
      $( "#content" ).css("background-image", "url(./img/background_3.jpg)");
      document.cookie="bg=3; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bg = 3;
    }
    else if( bg == 3){
      $( "#content" ).css("background-image", "url(./img/background_2.jpg)");
      document.cookie="bg=2; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bg = 2;
    }
    else if( bg == 2){
      $( "#content" ).css("background-image", "url(./img/background.png)");
      document.cookie="bg=1; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bg = 1;
    }
  });
$("#change_bg_right").click(
  function() {
    if(bg == 1){
      $( "#content" ).css("background-image", "url(./img/background_2.jpg)");
      document.cookie="bg=2; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bg = 2;
    }
    else if( bg == 2){
      $( "#content" ).css("background-image", "url(./img/background_3.jpg)");
      document.cookie="bg=3; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bg = 3;
    }
    else if( bg == 3){
      $( "#content" ).css("background-image", "url(./img/background.png)");
      document.cookie="bg=1; expires=Thu, 18 Dec 2020 12:00:00 GMT; path=/";
      bg = 1;
    }
  });
$("#outfit").click(
  function() {
  if(outfit_button == 0){
      $( "#outfit_button" ).css("visibility", "visible");
      outfit_button = 1;
    }
    else if( outfit_button == 1){
      $( "#outfit_button" ).css("visibility", "hidden");
      outfit_button = 0;}
  });
}
$(window).load(function() {res();});