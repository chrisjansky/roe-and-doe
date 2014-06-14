<?php
$title = "Contact Us";
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
if(!empty($_POST['message'])){
mail("ssasenaa@gmail.com", $_POST['subject'], $_POST['message']."\n\n Prosim, manualne odpisat na e-mail: ".$_POST['mail'], $headers); }
include("./header.php"); 
?>
<body>
  <div id="menu" style="min-height: 100% !important">
    <div id="menu_up">
      <a href="./">
        <img src="./img/logo.png" alt="Roe&Doe logo" id="logo">
      </a>
    </div>
    <div id="menu_down">
      <div id="menu_entries">
        <a href="/">HOME</a><br>
        <a href="/shop">E-SHOP</a><br>
        <a href="/blog">BLOG</a><br>
        <a href="/story">STORY</a><br>
        <a href="/contact-us">{ contact us }</a><br>
      </div>
      <div id="basket">
        BASKET<br>
        0,00 €
      </div>
      <div id="language">
        <a href="./">
          <div id="english">EN</div>
        </a>
        <a href="./">
          <div id="slovak">SK</div>
        </a>
      </div>
    </div>
  </div>
  <div id="content" style="min-height: 100% !important">
    <div id="contact-us">
      <div id="contact-left">
        <div id="contact-button"></div>
        <div id="contact-text">
          Did our website impresse you and you want to cooperate with us ? 
          We are sisters open to all creative ideas and interesting projects 
          and we are allowed to learn anything from you. If you're interested     
          to contact us, just write us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a message to our e-mail and we will gladly answer your question.   
          So, LET´S DO IT !   <br><br>                                                                             
          If you are not satisfied with us or our products, or rather, you can also write to us.         
        </div>
      </div>
      <div id="contact-right">
        <form  action="contact-us" method="post">
          <input placeholder="your e-mail address" type="text" name="mail" id="mail_add" />  <br>
          <input placeholder="subject" name="subject" type="text" id="mail_subj" />  <br>
          <textarea placeholder="message" name="message" type="text" id="mail_mess" ></textarea>  <br>
          <input type="submit" id="mail_submit" value="" />
        </form>        
      </div>
    </div>    
  </div>
</body>
</html>