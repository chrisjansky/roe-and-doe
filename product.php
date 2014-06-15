<?php
$title = "Product";
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
          <a href="/shop">{ e-shop }</a>
          <a href="/blog">BLOG</a>
          <a href="/story">STORY</a>
          <a href="/contact-us">CONTACT US</a>
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
        <div id="wrapper_items">
          <div id="item_closed_in">
            <div id="item_closed_in_left">
              <img src="images/produkt_sample.png" alt="Vintage Notepad for girls" />
              <div id="butt_zoom_in"></div>
              <div id="butt_zoom_out"></div>
              <div class="product-gallery__controls">
                <div id="arr_left"></div>
                <div id="cislovanie"></div>
                <div id="arr_right"></div>
              </div>
            </div>
            <div id="item_closed_in_right">
              <div id="item_closed_in_right_x"></div>
              <div id="item_closed_in_right_left">
                <div id="item_closed_in_right_left_nadpis"></div>
                <p>This vintage notepad has cover which consists of grower pattern. The colours are blue, green and pink. Pages are blank, because everybody can write or draw there whatever. It depends just on your creativity.</p>
                <div id="item_closed_in_right_left_text"></div>
              </div>
            </div>
            <div id="thing_nummer_zehn">
              <textarea placeholder="add a comment..." type="text" name="comment" id="add_comment"></textarea>
              <div id="tri_veci"></div>
            </div>
            <div id="thing_nummer_elf">
              <div id="elf_submit"></div>
              <div id="elf_goto"></div>
              <div id="elf_basket"></div>
            </div>
          </div>
      </div>    
    </div>
  </div>
</body>
</html>