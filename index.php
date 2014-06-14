<?php
$title = "Home";
include("./header.php"); 
?>
<body>
  <div id="menu">
    <div id="menu_up">
      <a href="./">
        <img src="images/logo.png" alt="Roe&Doe logo" id="logo">
      </a>
    </div>
    <div id="menu_down">
      <div id="menu_entries">
        <a href="/">{ home }</a><br>
        <a href="/shop">E-SHOP</a><br>
        <a href="/blog">BLOG</a><br>
        <a href="/story">STORY</a><br>
        <a href="/contact-us">CONTACT US</a><br>
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
  <div id="content">
    <div id="make_outfit"></div>
    <a href="./hot">
      <div id="skip"></div>
    </a>
    <div id="podmenu_game_shortcut"></div>
    <div id="podmenu_game">
      <div class="podmenu_game_entry" id="roeordoe">ROE or DOE</div>
      <div class="podmenu_game_entry" id="take_photo"><span class="podmenu_twoline">TAKE A PHOTO</span><span class="podmenu_twoline2"> of your face</span></div>
      <div class="podmenu_game_entry" id="change_bg">
        <div id="change_bg_left"></div>
        <span class="podmenu_twoline">CHANGE</span><span class="podmenu_twoline2">background</span>
        <div id="change_bg_right"></div>
      </div>
      <div class="podmenu_game_entry" id="draw_bg"><span class="podmenu_twoline">DRAW your</span><span class="podmenu_twoline2">own background</span></div>
      <div class="podmenu_game_entry" id="save_n_share">SAVE and SHARE</div>
      <a href="SHARE-NA-SOC-SIET">
        <div class="podmenu_share_entry" id="twitter"></div>
      </a>
      <a href="SHARE-NA-SOC-SIET">
        <div class="podmenu_share_entry" id="fb"></div>
      </a>
      <a href="SHARE-NA-SOC-SIET">
        <div class="podmenu_share_entry" id="pinterst"></div>
      </a>
      <a href="SHARE-NA-SOC-SIET">
        <div class="podmenu_share_entry" id="gplus"></div>
      </a>
    </div>
    <div id="head">
      <div id="bryle"></div>
    </div>
    <div id="outfit"></div>
    <div class="game-buttons" id="bryle_left"></div>
    <div class="game-buttons" id="bryle_right"></div>
    <div class="game-buttons" id="outfit_left"></div>
    <div class="game-buttons" id="outfit_right"></div>
    <div id="outfit_button"></div>
  </div>
</body>
</html>