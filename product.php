<?php
$title = "Product";
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
        <a href="/shop">{ e-shop }</a><br>
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
  <div id="content" style="min-height: 100% !important">
    <div id="contact-us" style="margin-top: 0 !important; height: 100% !important; overflow: hidden">
      <div id="wrapper_items">
        <div id="item_closed_in">
          <div id="item_closed_in_left">
            <img src="./img/produkt_sample.png" alt="Vintage Notepad for girls" style="margin-bottom: 15px" />
            <div id="butt_zoom_in"></div>
            <div id="arr_left"></div>
            <div id="cislovanie"></div>
            <div id="butt_zoom_out"></div>
            <div id="arr_right"></div>
          </div>
          <div id="item_closed_in_right">
            <div id="item_closed_in_right_left">
              <div id="item_closed_in_right_left_nadpis"></div>
              <div id="item_closed_in_right_left_text"></div>
            </div>
            <div id="item_closed_in_right_x"></div>
          </div>
          <div id="thing_nummer_zehn">
            <textarea placeholder="add a comment..." type="text" name="comment" id="add_comment"></textarea>
            <div id="tri_veci"></div>
          </div>
          <div id="thing_nummer_elf">
            <div id="elf_submit"></div>
            <div id="elf_basket"></div>
            <div id="elf_goto"></div>
          </div>
        </div>
    </div>    
  </div>
</body>
</html>