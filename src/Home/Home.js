import React from 'react';

import h from './Home.module.css';

class Home extends React.Component{
    render(){
        return (
        <div className={h.home}>
        <h2 className={h.demo}>Главная</h2>
            <div className={h.parent}>
                <div className={h.child}>
                <div class="card" className={h.card} >
  <img class="card-img-top" src="./img1.jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className={h.child}>
                <div class="card" className={h.card} >
  <img class="card-img-top" src="./img1.jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className={h.child}>
                <div class="card" className={h.card} >
  <img class="card-img-top" src="./img1.jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className={h.child}>
                <div class="card" className={h.card} >
  <img class="card-img-top" src="./img1.jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
            </div>
            </div>
            
            )
    }
  }

  export default Home;