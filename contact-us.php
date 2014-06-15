<?php
$title = "Contact Us";
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
if(!empty($_POST['message'])){
mail("ssasenaa@gmail.com", $_POST['subject'], $_POST['message']."\n\n Prosim, manualne odpisat na e-mail: ".$_POST['mail'], $headers); }
include("./header.php"); 
?>
<body>
  <div class="l-container">
  <div id="menu">
      <div id="menu_up">
        <a href="./">
          <img src="images/logo.png" alt="Roe&Doe logo" id="logo">
        </a>
      </div>
      <div id="menu_down">
        <div id="menu_entries">
          <a href="/">HOME</a>
          <a href="/shop">E-SHOP</a>
          <a href="/blog">BLOG</a>
          <a href="/story">STORY</a>
          <a href="/contact-us">{ contact us}</a>
        </div>
      </div>
      <nav class="l-fixed-nav">
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
      </nav>
    </div>
  <div id="content">
    <div id="contact-us">
      <div id="contact-left">
        <div id="contact-button"></div>
        <div id="contact-text">
          Did our website impresse you and you want to cooperate with us ? 
          We are sisters open to all creative ideas and interesting projects 
          and we are allowed to learn anything from you. If you're interested     
          to contact us, just write us a message to our e-mail and we will gladly answer your question.   
          So, LET´S DO IT !   <br><br>                                                                             
          If you are not satisfied with us or our products, or rather, you can also write to us.         
        </div>
      </div>
      <div id="contact-right">
        <form  action="contact-us" method="post">
          <input placeholder="your e-mail address" type="text" name="mail" id="mail_add" />
          <input placeholder="subject" name="subject" type="text" id="mail_subj" />
          <textarea placeholder="message" name="message" type="text" id="mail_mess" ></textarea>
          <input type="submit" id="mail_submit" value="" />
        </form>        
      </div>
    </div>    
  </div>
  </div>
</body>
</html>