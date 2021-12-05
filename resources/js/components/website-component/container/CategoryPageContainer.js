import React,{useState,useEffect} from 'react'
//import CategoryPage from '../main/CategoryPage'
import {listCategory} from '../redux/categorypage/CategoryPageActions'
import { connect } from 'react-redux'

 function CategoryPageContainer(props) {
    var pathArray = window.location.pathname.split('/');
    var seg1 = pathArray[2];
    var seg2 = pathArray[3];
    var seg3 = pathArray[4];
    
    const [seg, setSeg] = useState(seg1);

    useEffect(() => {
      props.listCategory(seg,seg2,seg3);
      
    }, [])
    console.log(props.pageData.categoryPage+"haramohan");
    console.log(seg);
    return (
        <div>
            <div className="breadcrumb">
          <div className="container">
            <div className="breadcrumb-inner">
              <ul className="list-inline list-unstyled">
                <li><a href="#">Home</a></li>
                <li className="active">Handbags</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="body-content outer-top-xs">
          <div className="container">
            <div className="row">
              <div className="col-md-3 sidebar">
                <div className="side-menu animate-dropdown outer-bottom-xs">
                  <div className="head"><i className="icon fa fa-align-justify fa-fw" /> Categories</div>
                  <nav className="yamm megamenu-horizontal">
                    <ul className="nav">
                      <li className="dropdown menu-item">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Clothing</a>
                        <ul className="dropdown-menu mega-menu">
                          <li className="yamm-content">
                            <div className="row">
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">Jackets</a></li>
                                  <li><a href="#">Sunglasses</a></li>
                                  <li><a href="#">Sport Wear</a></li>
                                  <li><a href="#">Blazers</a></li>
                                  <li><a href="#">Shirts</a></li>
                                  <li><a href="#">Shorts</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Handbags</a></li>
                                  <li><a href="#">Jwellery</a></li>
                                  <li><a href="#">Swimwear</a></li>
                                  <li><a href="#">Tops</a></li>
                                  <li><a href="#">Flats</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">Winter Wear</a></li>
                                  <li><a href="#">Night Suits</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Toys &amp; Games</a></li>
                                  <li><a href="#">Jeans</a></li>
                                  <li><a href="#">Shirts</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">School Bags</a></li>
                                  <li><a href="#">Lunch Box</a></li>
                                  <li><a href="#">Footwear</a></li>
                                  <li><a href="#">Wipes</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Sandals</a></li>
                                  <li><a href="#">Shorts</a></li>
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Jwellery</a></li>
                                  <li><a href="#">Bags</a></li>
                                  <li><a href="#">Night Dress</a></li>
                                  <li><a href="#">Swim Wear</a></li>
                                  <li><a href="#">Toys</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown menu-item">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-laptop" aria-hidden="true" />Electronics</a>
                        <ul className="dropdown-menu mega-menu">
                          <li className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-lg-4">
                                <ul>
                                  <li><a href="#">Gaming</a></li>
                                  <li><a href="#">Laptop Skins</a></li>
                                  <li><a href="#">Apple</a></li>
                                  <li><a href="#">Dell</a></li>
                                  <li><a href="#">Lenovo</a></li>
                                  <li><a href="#">Microsoft</a></li>
                                  <li><a href="#">Asus</a></li>
                                  <li><a href="#">Adapters</a></li>
                                  <li><a href="#">Batteries</a></li>
                                  <li><a href="#">Cooling Pads</a></li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-lg-4">
                                <ul>
                                  <li><a href="#">Routers &amp; Modems</a></li>
                                  <li><a href="#">CPUs, Processors</a></li>
                                  <li><a href="#">PC Gaming Store</a></li>
                                  <li><a href="#">Graphics Cards</a></li>
                                  <li><a href="#">Components</a></li>
                                  <li><a href="#">Webcam</a></li>
                                  <li><a href="#">Memory (RAM)</a></li>
                                  <li><a href="#">Motherboards</a></li>
                                  <li><a href="#">Keyboards</a></li>
                                  <li><a href="#">Headphones</a></li>
                                </ul>
                              </div>
                              <div className="dropdown-banner-holder"><a href="#"><img alt="" src="/frontend/images/banners/banner-side.png" /></a></div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown menu-item">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-paw" aria-hidden="true" />Shoes</a>
                        <ul className="dropdown-menu mega-menu">
                          <li className="yamm-content">
                            <div className="row">
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">Jackets</a></li>
                                  <li><a href="#">Sunglasses</a></li>
                                  <li><a href="#">Sport Wear</a></li>
                                  <li><a href="#">Blazers</a></li>
                                  <li><a href="#">Shirts</a></li>
                                  <li><a href="#">Shorts</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Handbags</a></li>
                                  <li><a href="#">Jwellery</a></li>
                                  <li><a href="#">Swimwear</a></li>
                                  <li><a href="#">Tops</a></li>
                                  <li><a href="#">Flats</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">Winter Wear</a></li>
                                  <li><a href="#">Night Suits</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Toys &amp; Games</a></li>
                                  <li><a href="#">Jeans</a></li>
                                  <li><a href="#">Shirts</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">School Bags</a></li>
                                  <li><a href="#">Lunch Box</a></li>
                                  <li><a href="#">Footwear</a></li>
                                  <li><a href="#">Wipes</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Sandals</a></li>
                                  <li><a href="#">Shorts</a></li>
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Jwellery</a></li>
                                  <li><a href="#">Bags</a></li>
                                  <li><a href="#">Night Dress</a></li>
                                  <li><a href="#">Swim Wear</a></li>
                                  <li><a href="#">Toys</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown menu-item">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-clock-o" />Watches</a>
                        <ul className="dropdown-menu mega-menu">
                          <li className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-lg-4">
                                <ul>
                                  <li><a href="#">Gaming</a></li>
                                  <li><a href="#">Laptop Skins</a></li>
                                  <li><a href="#">Apple</a></li>
                                  <li><a href="#">Dell</a></li>
                                  <li><a href="#">Lenovo</a></li>
                                  <li><a href="#">Microsoft</a></li>
                                  <li><a href="#">Asus</a></li>
                                  <li><a href="#">Adapters</a></li>
                                  <li><a href="#">Batteries</a></li>
                                  <li><a href="#">Cooling Pads</a></li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-lg-4">
                                <ul>
                                  <li><a href="#">Routers &amp; Modems</a></li>
                                  <li><a href="#">CPUs, Processors</a></li>
                                  <li><a href="#">PC Gaming Store</a></li>
                                  <li><a href="#">Graphics Cards</a></li>
                                  <li><a href="#">Components</a></li>
                                  <li><a href="#">Webcam</a></li>
                                  <li><a href="#">Memory (RAM)</a></li>
                                  <li><a href="#">Motherboards</a></li>
                                  <li><a href="#">Keyboards</a></li>
                                  <li><a href="#">Headphones</a></li>
                                </ul>
                              </div>
                              <div className="dropdown-banner-holder"><a href="#"><img alt="" src="/frontend/images/banners/banner-side.png" /></a></div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown menu-item">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-diamond" />Jewellery</a>
                        <ul className="dropdown-menu mega-menu">
                          <li className="yamm-content">
                            <div className="row">
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">Jackets</a></li>
                                  <li><a href="#">Sunglasses</a></li>
                                  <li><a href="#">Sport Wear</a></li>
                                  <li><a href="#">Blazers</a></li>
                                  <li><a href="#">Shirts</a></li>
                                  <li><a href="#">Shorts</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Handbags</a></li>
                                  <li><a href="#">Jwellery</a></li>
                                  <li><a href="#">Swimwear</a></li>
                                  <li><a href="#">Tops</a></li>
                                  <li><a href="#">Flats</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">Winter Wear</a></li>
                                  <li><a href="#">Night Suits</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Toys &amp; Games</a></li>
                                  <li><a href="#">Jeans</a></li>
                                  <li><a href="#">Shirts</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">School Bags</a></li>
                                  <li><a href="#">Lunch Box</a></li>
                                  <li><a href="#">Footwear</a></li>
                                  <li><a href="#">Wipes</a></li>
                                </ul>
                              </div>
                              <div className="col-sm-12 col-md-3">
                                <ul className="links list-unstyled">
                                  <li><a href="#">Sandals</a></li>
                                  <li><a href="#">Shorts</a></li>
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Jwellery</a></li>
                                  <li><a href="#">Bags</a></li>
                                  <li><a href="#">Night Dress</a></li>
                                  <li><a href="#">Swim Wear</a></li>
                                  <li><a href="#">Toys</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown menu-item">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-heartbeat" />Health and Beauty</a>
                        <ul className="dropdown-menu mega-menu">
                          <li className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-lg-4">
                                <ul>
                                  <li><a href="#">Gaming</a></li>
                                  <li><a href="#">Laptop Skins</a></li>
                                  <li><a href="#">Apple</a></li>
                                  <li><a href="#">Dell</a></li>
                                  <li><a href="#">Lenovo</a></li>
                                  <li><a href="#">Microsoft</a></li>
                                  <li><a href="#">Asus</a></li>
                                  <li><a href="#">Adapters</a></li>
                                  <li><a href="#">Batteries</a></li>
                                  <li><a href="#">Cooling Pads</a></li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-lg-4">
                                <ul>
                                  <li><a href="#">Routers &amp; Modems</a></li>
                                  <li><a href="#">CPUs, Processors</a></li>
                                  <li><a href="#">PC Gaming Store</a></li>
                                  <li><a href="#">Graphics Cards</a></li>
                                  <li><a href="#">Components</a></li>
                                  <li><a href="#">Webcam</a></li>
                                  <li><a href="#">Memory (RAM)</a></li>
                                  <li><a href="#">Motherboards</a></li>
                                  <li><a href="#">Keyboards</a></li>
                                  <li><a href="#">Headphones</a></li>
                                </ul>
                              </div>
                              <div className="dropdown-banner-holder"><a href="#"><img alt="" src="/frontend/images/banners/banner-side.png" /></a></div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown menu-item"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-paper-plane" />Kids and Babies</a></li>
                      <li className="dropdown menu-item"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-futbol-o" />Sports</a></li>
                      <li className="dropdown menu-item"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-envira" />Home and Garden</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="sidebar-module-container">
                  <div className="sidebar-filter">
                    <div className="sidebar-widget wow fadeInUp">
                      <h3 className="section-title">shop by</h3>
                      <div className="widget-header">
                        <h4 className="widget-title">Category</h4>
                      </div>
                      <div className="sidebar-widget-body">
                        <div className="accordion">
                          <div className="accordion-group">
                            <div className="accordion-heading"><a href="#collapseOne" data-toggle="collapse" className="accordion-toggle collapsed">Camera</a></div>
                            <div className="accordion-body collapse" id="collapseOne" style={{height: '0px'}}>
                              <div className="accordion-inner">
                                <ul>
                                  <li><a href="#">gaming</a></li>
                                  <li><a href="#">office</a></li>
                                  <li><a href="#">kids</a></li>
                                  <li><a href="#">for women</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-group">
                            <div className="accordion-heading"><a href="#collapseTwo" data-toggle="collapse" className="accordion-toggle collapsed">Desktops</a></div>
                            <div className="accordion-body collapse" id="collapseTwo" style={{height: '0px'}}>
                              <div className="accordion-inner">
                                <ul>
                                  <li><a href="#">gaming</a></li>
                                  <li><a href="#">office</a></li>
                                  <li><a href="#">kids</a></li>
                                  <li><a href="#">for women</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-group">
                            <div className="accordion-heading"><a href="#collapseThree" data-toggle="collapse" className="accordion-toggle collapsed">Pants</a></div>
                            <div className="accordion-body collapse" id="collapseThree" style={{height: '0px'}}>
                              <div className="accordion-inner">
                                <ul>
                                  <li><a href="#">gaming</a></li>
                                  <li><a href="#">office</a></li>
                                  <li><a href="#">kids</a></li>
                                  <li><a href="#">for women</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-group">
                            <div className="accordion-heading"><a href="#collapseFour" data-toggle="collapse" className="accordion-toggle collapsed">Bags</a></div>
                            <div className="accordion-body collapse" id="collapseFour" style={{height: '0px'}}>
                              <div className="accordion-inner">
                                <ul>
                                  <li><a href="#">gaming</a></li>
                                  <li><a href="#">office</a></li>
                                  <li><a href="#">kids</a></li>
                                  <li><a href="#">for women</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-group">
                            <div className="accordion-heading"><a href="#collapseFive" data-toggle="collapse" className="accordion-toggle collapsed">Hats</a></div>
                            <div className="accordion-body collapse" id="collapseFive" style={{height: '0px'}}>
                              <div className="accordion-inner">
                                <ul>
                                  <li><a href="#">gaming</a></li>
                                  <li><a href="#">office</a></li>
                                  <li><a href="#">kids</a></li>
                                  <li><a href="#">for women</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-group">
                            <div className="accordion-heading"><a href="#collapseSix" data-toggle="collapse" className="accordion-toggle collapsed">Accessories</a></div>
                            <div className="accordion-body collapse" id="collapseSix" style={{height: '0px'}}>
                              <div className="accordion-inner">
                                <ul>
                                  <li><a href="#">gaming</a></li>
                                  <li><a href="#">office</a></li>
                                  <li><a href="#">kids</a></li>
                                  <li><a href="#">for women</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-widget wow fadeInUp">
                      <div className="widget-header">
                        <h4 className="widget-title">Price Slider</h4>
                      </div>
                      <div className="sidebar-widget-body m-t-10">
                        <div className="price-range-holder"><span className="min-max"><span className="pull-left">$200.00</span> <span className="pull-right">$800.00</span></span> <input id="amount" style={{border: 0, color: '#666666', fontWeight: 'bold', textAlign: 'center'}} /> <input className="price-slider" defaultValue /></div>
                        <a href="#" className="lnk btn btn-primary">Show Now</a>
                      </div>
                    </div>
                    <div className="sidebar-widget wow fadeInUp">
                      <div className="widget-header">
                        <h4 className="widget-title">Manufactures</h4>
                      </div>
                      <div className="sidebar-widget-body">
                        <ul className="list">
                          <li><a href="#">Forever 18</a></li>
                          <li><a href="#">Nike</a></li>
                          <li><a href="#">Dolce &amp; Gabbana</a></li>
                          <li><a href="#">Alluare</a></li>
                          <li><a href="#">Chanel</a></li>
                          <li><a href="#">Other Brand</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget wow fadeInUp">
                      <div className="widget-header">
                        <h4 className="widget-title">Colors</h4>
                      </div>
                      <div className="sidebar-widget-body">
                        <ul className="list">
                          <li><a href="#">Red</a></li>
                          <li><a href="#">Blue</a></li>
                          <li><a href="#">Yellow</a></li>
                          <li><a href="#">Pink</a></li>
                          <li><a href="#">Brown</a></li>
                          <li><a href="#">Teal</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget wow fadeInUp outer-top-vs">
                      <h3 className="section-title">Compare products</h3>
                      <div className="sidebar-widget-body">
                        <div className="compare-report">
                          <p>You have no <span>item(s)</span> to compare</p>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-widget product-tag wow fadeInUp outer-top-vs">
                      <h3 className="section-title">Product tags</h3>
                      <div className="sidebar-widget-body outer-top-xs">
                        <div className="tag-list"><a className="item" title="Phone" href="category.html">Phone</a> <a className="item active" title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone" href="category.html">Smartphone</a> <a className="item" title="Furniture" href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker" href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a className="item" title="Rose" href="category.html">Rose</a></div>
                      </div>
                    </div>
                    <div className="sidebar-widget wow fadeInUp outer-top-vs">
                      <div id="advertisement" className="advertisement">
                        <div className="item">
                          <div className="avatar"><img src="/frontend/images/testimonials/member1.png" alt="Image" /></div>
                          <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                          <div className="clients_author">John Doe <span>Abc Company</span></div>
                        </div>
                        <div className="item">
                          <div className="avatar"><img src="/frontend/images/testimonials/member3.png" alt="Image" /></div>
                          <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                          <div className="clients_author">Stephen Doe <span>Xperia Designs</span></div>
                        </div>
                        <div className="item">
                          <div className="avatar"><img src="/frontend/images/testimonials/member2.png" alt="Image" /></div>
                          <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                          <div className="clients_author">Saraha Smith <span>Datsun &amp; Co</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="home-banner"><img src="/frontend/images/banners/LHS-banner.jpg" alt="Image" /></div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div id="category" className="category-carousel hidden-xs">
                  <div className="item">
                    <div className="image"><img src="/frontend/images/banners/cat-banner-1.jpg" alt="" className="img-responsive" /></div>
                    <div className="container-fluid">
                      <div className="caption vertical-top text-left">
                        <div className="big-text">Big Sale</div>
                        <div className="excerpt hidden-sm hidden-md">Save up to 49% off</div>
                        <div className="excerpt-normal hidden-sm hidden-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix filters-container m-t-10">
                  <div className="row">
                    <div className="col col-sm-6 col-md-2">
                      <div className="filter-tabs">
                        <ul id="filter-tabs" className="nav nav-tabs nav-tab-box nav-tab-fa-icon">
                          <li className="active"><a data-toggle="tab" href="#grid-container"><i className="icon fa fa-th-large" />Grid</a></li>
                          <li><a data-toggle="tab" href="#list-container"><i className="icon fa fa-th-list" />List</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col col-sm-12 col-md-6">
                      <div className="col col-sm-3 col-md-6 no-padding">
                        <div className="lbl-cnt">
                          <span className="lbl">Sort by</span>
                          <div className="fld inline">
                            <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                              <button data-toggle="dropdown" type="button" className="btn dropdown-toggle">Position <span className="caret" /></button>
                              <ul role="menu" className="dropdown-menu">
                                <li role="presentation"><a href="#">position</a></li>
                                <li role="presentation"><a href="#">Price:Lowest first</a></li>
                                <li role="presentation"><a href="#">Price:HIghest first</a></li>
                                <li role="presentation"><a href="#">Product Name:A to Z</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-sm-3 col-md-6 no-padding">
                        <div className="lbl-cnt">
                          <span className="lbl">Show</span>
                          <div className="fld inline">
                            <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                              <button data-toggle="dropdown" type="button" className="btn dropdown-toggle">1 <span className="caret" /></button>
                              <ul role="menu" className="dropdown-menu">
                                <li role="presentation"><a href="#">1</a></li>
                                <li role="presentation"><a href="#">2</a></li>
                                <li role="presentation"><a href="#">3</a></li>
                                <li role="presentation"><a href="#">4</a></li>
                                <li role="presentation"><a href="#">5</a></li>
                                <li role="presentation"><a href="#">6</a></li>
                                <li role="presentation"><a href="#">7</a></li>
                                <li role="presentation"><a href="#">8</a></li>
                                <li role="presentation"><a href="#">9</a></li>
                                <li role="presentation"><a href="#">10</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-sm-6 col-md-4 text-right">
                      <div className="pagination-container">
                        <ul className="list-inline list-unstyled">
                          <li className="prev"><a href="#"><i className="fa fa-angle-left" /></a></li>
                          <li><a href="#">1</a></li>
                          <li className="active"><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li className="next"><a href="#"><i className="fa fa-angle-right" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search-result-container">
                  <div id="myTabContent" className="tab-content category-list">
                    <div className="tab-pane active" id="grid-container">
                      <div className="category-product">
                        <div className="row">
                          <div className="col-sm-6 col-md-4 wow fadeInUp">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image"><a href="detail.html"><img src="/frontend/images/products/p5.jpg" alt="" /></a></div>
                                  <div className="tag new"><span>new</span></div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                  <div className="rating rateit-small" />
                                  <div className="description" />
                                  <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                      <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                      <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="list-container">
                      <div className="category-product">
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p3.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag new"><span>new</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p4.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag sale"><span>sale</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p5.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag hot"><span>hot</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p6.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag hot"><span>hot</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p7.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag sale"><span>sale</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p8.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag new"><span>new</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p9.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag new"><span>new</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p10.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag sale"><span>sale</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p11.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag hot"><span>hot</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p12.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag new"><span>new</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p13.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag sale"><span>sale</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="category-product-inner wow fadeInUp">
                          <div className="products">
                            <div className="product-list product">
                              <div className="row product-list-row">
                                <div className="col col-sm-4 col-lg-4">
                                  <div className="product-image">
                                    <div className="image"><img src="/frontend/images/products/p14.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="col col-sm-8 col-lg-8">
                                  <div className="product-info">
                                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                                    <div className="rating rateit-small" />
                                    <div className="product-price"><span className="price">$450.99</span> <span className="price-before-discount">$ 800</span></div>
                                    <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                                    <div className="cart clearfix animate-effect">
                                      <div className="action">
                                        <ul className="list-unstyled">
                                          <li className="add-cart-button btn-group"><button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart" /></button> <button className="btn btn-primary cart-btn" type="button">Add to cart</button></li>
                                          <li className="lnk wishlist"><a className="add-to-cart" href="detail.html" title="Wishlist"><i className="icon fa fa-heart" /></a></li>
                                          <li className="lnk"><a className="add-to-cart" href="detail.html" title="Compare"><i className="fa fa-signal" /></a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tag hot"><span>hot</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix filters-container">
                    <div className="text-right">
                      <div className="pagination-container">
                        <ul className="list-inline list-unstyled">
                          <li className="prev"><a href="#"><i className="fa fa-angle-left" /></a></li>
                          <li><a href="#">1</a></li>
                          <li className="active"><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li className="next"><a href="#"><i className="fa fa-angle-right" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="brands-carousel" className="logo-slider wow fadeInUp">
              <div className="logo-slider-inner">
                <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
                  <div className="item m-t-15"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand1.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item m-t-10"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand2.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand3.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand4.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand5.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand6.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand2.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand4.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand1.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                  <div className="item"><a href="#" className="image"><img data-echo="/frontend/images/brands/brand5.png" src="/frontend/images/blank.gif" alt="" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

const mapStateToProps = state =>{
  return {
      pageData:state.categorypage     
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      listCategory:(id)=>dispatch(listCategory(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CategoryPageContainer)