import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className="home">
     <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" 
        />
        <div className="home__row">
        <Product 
            id="49538094"
            title='The Lean Startup: How Constant
            Innovation Creates Radically Successful
            Businesses Paperback'  
            price={29.99}
            image="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
            rating={5}
          />

           <Product 
            id="49538094"
            title='The Lean Startup: How Constant
            Innovation Creates Radically Successful
            Businesses Paperback'   
            price={29.99}
            image="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product 
            id="49538094"
            title='The Lean Startup: How Constant
            Innovation Creates Radically Successful
            Businesses Paperback'  
            price={29.99}
            image="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
            rating={5}
          />
           <Product 
            id="49538094"
            title='The Lean Startup: How Constant
            Innovation Creates Radically Successful
            Businesses Paperback'   
            price={29.99}
            image="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
            rating={5}
          />

           <Product 
            id="49538094"
            title='The Lean Startup: How Constant
            Innovation Creates Radically Successful
            Businesses Paperback'   
            price={29.99}
            image="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
            rating={5}
          />
        </div>
        
        <div className="home__row">
           <Product 
            id="49538094"
            title='The Lean Startup: How Constant
            Innovation Creates Radically Successful
            Businesses Paperback'   
            price={29.99}
            image="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
            rating={5}
          />
        </div>
     </div>
    </div>
  )
}

export default Home;
