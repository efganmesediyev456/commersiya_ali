<template>
  <div>
    <div id="header-wrap">

      <div class="top-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="social-links">
                <ul>
                  <li>
                    <a href="#"><i class="icon icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon icon-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon icon-youtube-play"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icon icon-behance-square"></i></a>
                  </li>
                </ul>
              </div><!--social-links-->
            </div>
            <div class="col-md-6">
              <div class="right-element">
                <a href="#" class="user-account for-buy"><i class="icon icon-user"></i><span>Account</span></a>
                <a href="#" class="cart for-buy"><i class="icon icon-clipboard"></i><span>Cart:( {{cartCount}} )</span></a>

                <div class="action-menu">

                  <div class="search-bar">
                    <a href="#" class="search-button search-toggle" data-selector="#header-wrap">
                      <i class="icon icon-search"></i>
                    </a>
                    <form role="search" method="get" class="search-box">
                      <input class="search-field text search-input" placeholder="Search" type="search">
                    </form>
                  </div>
                </div>

              </div><!--top-right-->
            </div>

          </div>
        </div>
      </div><!--top-content-->

      <header id="header">
        <div class="container">
          <div class="row">

            <div class="col-md-2">
              <div class="main-logo">
                <a href="index.html">
                  <nuxt-link to="/">
                    <img src="@/public/images/main-logo.png" alt="logo">
                  </nuxt-link>

                </a>
              </div>

            </div>

            <div class="col-md-10">

              <nav id="navbar">
                <div class="main-menu stellarnav">
                  <ul class="menu-list">
                    <li class="menu-item active">
                      <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="menu-item"><a href="#about" class="nav-link" data-effect="About">About</a></li>
                    <li class="menu-item">
                      <nuxt-link to="/shop">Shop</nuxt-link>
                    </li>
                    <li class="menu-item"><a href="#latest-blog" class="nav-link" data-effect="Articles">Articles</a></li>
                    <li class="menu-item"><a href="#contact" class="nav-link" data-effect="Contact">Contact</a></li>
                  </ul>

                  <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                  </div>

                </div>
              </nav>

            </div>

          </div>
        </div>
      </header>

    </div><!--header-wrap-->




    <div class="wrap cf">
      <div class="heading cf">
        <h1>My Cart</h1>
        <nuxt-link class="continue" to="/login">Continue Shopping</nuxt-link>

      </div>
      <div class="cart">
        <!--    <ul class="tableHead">
              <li class="prodHeader">Product</li>
              <li>Quantity</li>
              <li>Total</li>
               <li>Remove</li>
            </ul>-->
        <ul class="cartWrap">



          <li v-for="c in getCart" class="items odd">

            <div class="infoWrap">
              <div class="cartSection">
                <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                <p class="itemNumber">{{c.id+`#####`}}</p>
                <h3>{{c.title}}</h3>

                <p> <input type="text"  class="qty" placeholder="" :value="c.count"/> x {{c.price}}</p>

                <p class="stockStatus"> In Stock</p>
              </div>

              <img style="width: 100px" :src="c.image" alt="">


              <div class="prodTotal cartSection">
                <p>$ {{c.count * c.price}}</p>
              </div>
              <div class="cartSection removeWrap">
                <a  @click="removeCart(c)"   class="remove">x</a>
              </div>
            </div>
          </li>



          <!--<li class="items even">Item 2</li>-->

        </ul>
      </div>


      <div class="subtotal cf">
        <ul>
          <li class="totalRow"><span class="label">Subtotal</span><span class="value">$ {{subtotal}}</span></li>

          <li class="totalRow"><span class="label">Shipping</span><span class="value">${{shipping}}</span></li>

          <li class="totalRow"><span class="label">Tax</span><span class="value">${{tax}}</span></li>
          <li class="totalRow final"><span class="label">Total</span><span class="value">${{total}}</span></li>
          <li class="totalRow"><a href="#" class="btn continue">Checkout</a></li>
        </ul>
      </div>
    </div>













    <footer id="footer">
      <div class="container">
        <div class="row">

          <div class="col-md-4">

            <div class="footer-item">
              <div class="company-brand">
                <img src="images/main-logo.png" alt="logo" class="footer-logo">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.</p>
              </div>
            </div>

          </div>

          <div class="col-md-2">

            <div class="footer-menu">
              <h5>About Us</h5>
              <ul class="menu-list">
                <li class="menu-item">
                  <a href="#">vision</a>
                </li>
                <li class="menu-item">
                  <a href="#">articles </a>
                </li>
                <li class="menu-item">
                  <a href="#">careers</a>
                </li>
                <li class="menu-item">
                  <a href="#">service terms</a>
                </li>
                <li class="menu-item">
                  <a href="#">donate</a>
                </li>
              </ul>
            </div>

          </div>
          <div class="col-md-2">

            <div class="footer-menu">
              <h5>Discover</h5>
              <ul class="menu-list">
                <li class="menu-item">
                  <a href="#">Home</a>
                </li>
                <li class="menu-item">
                  <a href="#">Books</a>
                </li>
                <li class="menu-item">
                  <a href="#">Authors</a>
                </li>
                <li class="menu-item">
                  <a href="#">Subjects</a>
                </li>
                <li class="menu-item">
                  <a href="#">Advanced Search</a>
                </li>
              </ul>
            </div>

          </div>
          <div class="col-md-2">

            <div class="footer-menu">
              <h5>My account</h5>
              <ul class="menu-list">
                <li class="menu-item">
                  <a href="#">Sign In</a>
                </li>
                <li class="menu-item">
                  <a href="#">View Cart</a>
                </li>
                <li class="menu-item">
                  <a href="#">My Wishtlist</a>
                </li>
                <li class="menu-item">
                  <a href="#">Track My Order</a>
                </li>
              </ul>
            </div>

          </div>
          <div class="col-md-2">

            <div class="footer-menu">
              <h5>Help</h5>
              <ul class="menu-list">
                <li class="menu-item">
                  <a href="#">Help center</a>
                </li>
                <li class="menu-item">
                  <a href="#">Report a problem</a>
                </li>
                <li class="menu-item">
                  <a href="#">Suggesting edits</a>
                </li>
                <li class="menu-item">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
        <!-- / row -->

      </div>
    </footer>

    <div id="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <div class="copyright">
              <div class="row">

                <div class="col-md-6">
                  <p>© 2022 All rights reserved. Free HTML Template by <a href="https://www.templatesjungle.com/" target="_blank">TemplatesJungle</a></p>
                </div>

                <div class="col-md-6">
                  <div class="social-links align-right">
                    <ul>
                      <li>
                        <a href="#"><i class="icon icon-facebook"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="icon icon-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="icon icon-youtube-play"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="icon icon-behance-square"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div><!--grid-->

          </div><!--footer-bottom-content-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
  // middleware: 'auth',

  name: 'ShopPage',
  computed:{
    ...mapGetters(['getCart']),
    cartCount(){
      var p=0;
      this.subtotal=0;
      this.total=0;
      this.$store.state['cart'].map((e)=>{

        this.subtotal+=e.price*e.count;

        this.vhide=true;
        p+=e.count
        setTimeout(()=>{
          this.vhide=false;

        },2500);
      });
      this.total=this.subtotal+this.tax+this.shipping;





      return p;
    }
  },
  methods:{
    ...mapActions(['removeCart'])
  },
  data(){
    return {
      subtotal:42,
      shipping:0,
      tax:12,
      total:42,
    }
  }




}
</script>


<style lang="scss" scoped>


@import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,400italic|Montserrat:400,700);

$fontSans : 'Montserrat', sans-serif;
$fontSerif : 'Droid Serif', serif;


@mixin transition($transition-property, $transition-time, $method) {
  -webkit-transition: $transition-property $transition-time $method;
  -moz-transition: $transition-property $transition-time $method;
  -ms-transition: $transition-property $transition-time $method;
  -o-transition: $transition-property $transition-time $method;
  transition: $transition-property $transition-time $method;
}
*{ box-sizing:border-box;}



body {
  color: #333;
  -webkit-font-smoothing: antialiased;
  font-family: $fontSerif;

}
img {
  max-width:100%;
}
.cf:before,.cf:after {content: " ";display: table;}
.cf:after {clear: both;}
.cf {*zoom: 1;}


.wrap {
  width: 75%;
  max-width: 960px;
  margin: 0 auto;
  padding: 5% 0;
  margin-bottom: 5em;

}

.projTitle {
  font-family: $fontSans;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  padding: 1em 0;
  border-bottom: 1px solid #dadada;
  letter-spacing: 3px;
  text-transform: uppercase;
  span {
    font-family: $fontSerif;
    font-weight: normal;
    font-style: italic;
    text-transform: lowercase;
    color: #777;

  }
}
// CART HEADER
.heading {
  padding: 1em 0;
  border-bottom: 1px solid #D0D0D0;

  h1 {
    font-family: $fontSerif;
    font-size: 2em;
    float: left;
  }
  a.continue {
    &:link , &:visited {
      text-decoration: none;
      font-family: $fontSans;
      letter-spacing: -.015em;
      font-size: .75em;
      padding: 1em;
      color: #fff;
      background: #82ca9c;
      font-weight: bold;
      border-radius: 50px;
      float: right;
      text-align: right;
      @include transition(all, .25s, linear);
    }
    &:after {
      content: "\276f";
      padding: .5em;
      position: relative;
      right:0;
      @include transition(all, .15s, linear);

    }
    &:hover , &:focus, &:active {
      background: #f69679;

      &:after {
        right: -10px;
      }
    }
  }
}

// TABLE HEADING

.tableHead {
  display: table;
  width: 100%;
  font-family: $fontSans;
  font-size: .75em;
  li {
    display: table-cell;
    padding: 1em 0;
    text-align: center;
    &.prodHeader {
      text-align: left;
    }
  }
}

// CART Items

.cart {
  padding: 1em 0 ;

  .items {
    display: block;
    width: 100%;
    vertical-align: middle;
    padding: 1.5em;

    border-bottom: 1px solid #fafafa;
    &.even {
      background: #fafafa;
    }
    .infoWrap {
      display: table;
      width: 100%;
    }
    .cartSection {
      display: table-cell;

      vertical-align: middle;


      .itemNumber {
        font-size: .75em;
        color: #777;
        margin-bottom: .5em;
      }

      h3 {

        font-size: 1em;
        font-family: $fontSans;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .025em;


      }
      p {
        display: inline-block;
        font-size: .85em;

        color: #777777;
        font-family: $fontSans;
        .quantity {
          font-weight: bold;
          color: #333;
        }

        &.stockStatus {
          color: #82CA9C;
          font-weight: bold;
          padding: .5em 0 0 1em;
          text-transform: uppercase;
          &.out {
            color: #F69679;
          }
        }

      }
      .itemImg {
        width: 4em;

        float: left;
      }
      &.qtyWrap , &.prodTotal {
        text-align: center;
        p {
          font-weight: bold;
          font-size: 1.25em;
        }

      }

      input.qty {
        width: 2em;
        text-align: center;
        font-size: 1em;
        padding: .25em;
        margin: 1em .5em 0 0;

      }
      .itemImg {
        width: 8em;
        display: inline;
        padding-right: 1em;
      }


    }
  }

}

.special {
  display: block;
  font-family: $fontSans;
  .specialContent {
    padding: 1em 1em 0;
    display: block;
    margin-top:.5em;
    border-top: 1px solid #dadada;
    &:before {
      content: "\21b3";
      font-size: 1.5em;
      margin-right: 1em;
      color: #6f6f6f;
      font-family: helvetica, arial, sans-serif;
    }}

}

a.remove {
  text-decoration: none;
  font-family: $fontSans;
  color: #ffffff;
  font-weight: bold;
  background: #e0e0e0;
  padding: .5em;
  font-size: .75em;
  display: inline-block;
  border-radius: 100%;
  line-height: .85;
  @include transition(all, .25s, linear);
  &:hover {
    background: #f30;
  }
}

.promoCode {
  border:2px solid #efefef;
  float: left;
  width: 35%;
  padding: 2%;
  label {
    display: block;
    width: 100%;
    font-style: italic;
    font-size: 1.15em;

    margin-bottom: .5em;
    letter-spacing: -.025em;

  }
  input {
    width: 85%;
    font-size: 1em;
    padding: .5em;
    float: left;
    border: 1px solid #dadada;
    &:active, &:focus {
      outline: 0;

    }
  }
  a.btn {
    float: left;
    width: 15%;
    padding: .75em 0;
    border-radius: 0 1em 1em 0;
    text-align: center;
    border: 1px solid #82ca9c;
    &:hover {
      border: 1px solid #f69679;
      background: #f69679;
    }
  }
}

.btn {
  &:link , &:visited {
    text-decoration: none;
    font-family: $fontSans;
    letter-spacing: -.015em;
    font-size: 1em;
    padding: 1em 3em;
    color: #fff;
    background: #82ca9c;
    font-weight: bold;
    border-radius: 50px;
    float: right;
    text-align: right;
    @include transition(all, .25s, linear);
  }
  &:after {
    content: "\276f";
    padding: .5em;
    position: relative;
    right:0;
    @include transition(all, .15s, linear);

  }
  &:hover , &:focus, &:active {
    background: #f69679;
    &:after {
      right: -10px;
    }
  }

  .promoCode & {
    font-size: .85em;
    paddding: .5em 2em;
  }
}

/* TOTAL AND CHECKOUT  */
.subtotal {
  float: right;
  width: 35%;
  .totalRow {
    padding: .5em;
    text-align: right;

    &.final {
      font-size: 1.25em;
      font-weight: bold;
    }
    span {
      display: inline-block;
      padding: 0 0 0 1em;
      text-align: right;

    }
    .label {
      font-family: $fontSans;
      font-size: .85em;
      text-transform: uppercase;
      color: #777;
    }
    .value {

      letter-spacing: -.025em;
      width: 35%;
    }
  }
}

@media only screen and (max-width:39.375em){

  .wrap {
    width: 98%;
    padding: 2% 0;
  }
  .projTitle{
    font-size: 1.5em;
    padding: 10% 5%;
  }
  .heading {
    padding: 1em;
    font-size: 90%;
  }
  .cart {
    .items {

      .cartSection {
        width: 90%;
        display: block;float: left;
        &.qtyWrap {
          width: 10%;
          text-align: center;
          padding: .5em 0;
          float: right;
          &:before {
            content: "QTY";
            display: block;
            font-family: $fontSans;
            padding: .25em;
            font-size: .75em;
          }
        }
        &.prodTotal , &.removeWrap {
          display: none;
        }
        .itemImg {
          width: 25%;
        }
      }
    }}
  .promoCode , .subtotal{
    width: 100%;
  }

  a.btn.continue {
    width: 100%;
    text-align: center;
  }
}
.remove{
  margin-bottom: 45px;
}
</style>
