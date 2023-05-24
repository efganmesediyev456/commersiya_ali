<template>
  <div>
    <div id="header-wrap">

      <div class="modallar" v-if="vhide">
        <div class="header">
          Ugurla elave olundu
        </div>
      </div>



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

                  <nuxt-link class="cart for-buy"  to="/cart"> <i class="icon icon-clipboard"></i><span>Cart:( {{cartCount}} )</span></nuxt-link>


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
                      <nuxt-link to="/">
                        Home
                      </nuxt-link>

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

    <section id="popular-books" class="bookshelf">
      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <div class="section-header align-center">
              <div class="title">
                <span>Some quality items</span>
              </div>
              <h2 class="section-title">Popular Books</h2>
            </div>

            <ul class="tabs">
              <li @click="filter('all')" data-tab-target="all-genre"  :class="{'tab':true, 'active':activeCategory=='all'}">All Genre</li>
              <li @click="filter('business')" data-tab-target="business" :class="{'tab':true, 'active':activeCategory=='business'}">Business</li>
              <li @click="filter('technology')" data-tab-target="technology" :class="{'tab':true, 'active':activeCategory=='technology'}">Technology</li>
              <li @click="filter('romantic')" data-tab-target="romantic" :class="{'tab':true, 'active':activeCategory=='romantic'}">Romantic</li>
              <li @click="filter('adventure')" data-tab-target="adventure" :class="{'tab':true, 'active':activeCategory=='adventure'}">Adventure</li>
              <li @click="filter('fictional')" data-tab-target="fictional" :class="{'tab':true, 'active':activeCategory=='fictional'}">Fictional</li>
            </ul>

            <div class="tab-content">



              <div id="all-genre" data-tab-content class="active">
                <div class="row">

                  <div v-for="book in books" :key="book.id" class="col-md-3">
                    <figure class="product-style">
                      <img :src="book.image" alt="Books" class="product-item">
                      <button @click="addCart(book)"   type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                      <figcaption>
                        <h3>{{book.title}}</h3>
                        <p>{{book.author}}</p>
                        <div class="item-price">{{book.price}}</div>
                      </figcaption>
                    </figure>
                  </div>



                </div>


              </div>

            </div>

          </div><!--inner-tabs-->

        </div>
      </div>
    </section>


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

                  <nuxt-link to="/">
                    Home
                  </nuxt-link>

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

import {mapGetters, mapActions}  from "vuex";


export default {
  name: 'ShopPage',
  methods: {
    ...mapActions(['addCart']),
    filter(item){

      if(item=='all') {
        this.books = this.booksesl;
        this.activeCategory='all';
        return this.books;
      }
      this.activeCategory=item;

      this.books= this.booksesl.filter((e)=>{
        return e.category==item
      });



    }
  },
  computed:{
    cartCount(){
      var p=0;
      this.$store.state['cart'].map((e)=>{

        this.vhide=true;
        p+=e.count
        console.log(p)
        setTimeout(()=>{
          this.vhide=false;

        },2500);
      });




      return p;
    }
  },
  data(){
    return {
      activeCategory:'all',
      vhide:false,
      p:0,
      booksesl:[
        {
          id:1,
          image:'/_nuxt/public/images/tab-item1.jpg',
          title:'Portrait photography',
          author:'Bratt Smith',
          price:40.00,
          count:1,
          category:'business'
        },
        {
          id:2,
          image:'/_nuxt/public/images/tab-item2.jpg',
          title:'Portrait photography',
          author:'Bratt Smith',
          price:40.00,
          count:1,
          category:'art'


        },
        {
          id:3,
          image:'/_nuxt/public/images/tab-item3.jpg',
          title:'Portrait photography',
          author:'Bratt Smith',
          price:40.00,
          count:1,
          category:'art'


        }
      ],
      books:[
        {
          id:1,
          image:'/_nuxt/public/images/tab-item1.jpg',
          title:'Portrait photography',
          author:'Bratt Smith',
          price:40.00,
          count:1,
          category:'business'
        },
        {
          id:2,
          image:'/_nuxt/public/images/tab-item2.jpg',
          title:'Portrait photography',
          author:'Bratt Smith',
          price:40.00,
          count:1,
          category:'art'


        },
        {
          id:3,
          image:'/_nuxt/public/images/tab-item3.jpg',
          title:'Portrait photography',
          author:'Bratt Smith',
          price:40.00,
          count:1,
          category:'art'


        }
      ]
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8000/api/books').then((res)=>{
      this.booksesl=res.data;
      this.books=res.data;
    });
  }


}
</script>


<style scoped lang="scss">
.modallar{



  .header{
    position: absolute;
    top:200px;
    color:white;
    width: 300px;
    background: green;
    text-align: center;
    font-size: 22px;
    z-index: 56656565665656;
    transform: translateX(-100%);
    border-radius:0  12px 12px 0;
    height: 50px;
    line-height: 50px;
    margin-top:22px;


    @keyframes animate {
      0%{
        transform: translateX(-100%);
      }
      20%{
        transform: translateX(0%);
      }
      50%{
        transform: translateX(0%);
      }
      80%{
        transform: translateX(0%);
      }
      80%{
        transform: translateX(-100%);
      }
    }
    animation: animate 3s ease-in-out forwards;
  }

}
</style>
