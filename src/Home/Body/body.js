import React from 'react'
import Card from '../Body/card'
import CardOne from '../Body/cardOne'
import CardThree from '../Body/cardThree'
import Card4 from '../Body/cardFour'
import Card5 from '../Body/cardFive'
import Card6 from '../Body/cardSix'
import Card7 from '../Body/cardSeven'
import Card8 from '../Body/cardEight'
import Card9 from '../Body/cardNine'
const Body=()=>{
        return(<div>
          <div class="card text-center">
  <div class="card-header">
    <b>HELLO!</b>
  </div>
  <div class="card-body">
    <h2>We are Providing Trip to Northern Areas of Pakistan.</h2>
  <p ><b>FOOD , MUSIC , LUXIRIES , BAR B Q , PLAYLAND</b></p>
    
  </div>
  
</div>
         



<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/5236076/pexels-photo-5236076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide"/>
      <div class="carousel-caption">
    <h3 style={{color:'black',fontSize:'30px'}}>Los Angeles</h3>
    <p style={{color:'black',fontSize:'30px'}}>We had such a great time in LA!</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide"/>
      <div class="carousel-caption">
    <h3 style={{color:'black',fontSize:'30px'}}>Los Angeles</h3>
    <p style={{color:'black',fontSize:'30px'}}>We had such a great time in LA!</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.pexels.com/photos/5204416/pexels-photo-5204416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
      <div class="carousel-caption">
    <h3 style={{color:'black',fontSize:'30px'}}>Los Angeles</h3>
    <p style={{color:'black',fontSize:'30px'}}>We had such a great time in LA!</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br/>
<br/>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <Card/>
    </div>
    <div class="col-sm">
      <CardOne/>
    </div>
    <div class="col-sm">
      <CardThree/>
    </div>
  </div>
</div>
<br/>
<br/>

<div class="container">
  <div class="row">
    <div class="col-sm">
      <Card4/>
    </div>
    <div class="col-sm">
     <Card5/>
    </div>
    <div class="col-sm">
      <Card6/>
    </div>
  </div>
</div>
<br/>
<br/>

<div class="container">
  <div class="row">
    <div class="col-sm">
      <Card7/>
    </div>
    <div class="col-sm">
     <Card8/>
    </div>
    <div class="col-sm">
      <Card9/>
    </div>
  </div>
</div>
<br/>
<br/>
        </div>)
    

    
}
export default Body