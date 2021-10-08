import React from "react";
import IMG from './assets-home/placeholder_liked.png';




class Content extends React.Component {

    state = {

    }

    render() {
        return (

            <div class="mr-0 mainPage">


      <div class="container-fluid">
        <div class="row d-flex">
          <div class="col">
            <button type="button" class="btn"><img class="rounded-circle" src="./assets-home/arrow-left.png"
                alt="arrow left"/></button>
            <button type="button" class="btn"><img class="rounded-circle" src="./assets-home/arrow-right.png"
                alt="arrow right"/></button>
          </div>
          <div class="col d-flex justify-content-end">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                GitMaster26...
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="./album.html">Album</a>
                <a class="dropdown-item" href="./artist-page.html">Artist</a>
                <a class="dropdown-item" href="./loginPage.html">Login</a>
                <a class="dropdown-item" href="./support.html">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>

 

      <div class="ROW">
        <h3 class="m-4">Good morning</h3>

        <div class="container-fluid d-flex justify-content-start flex-wrap ">

          <div class="card mb-3 op mx-3  cardContent">
            <a href="./album.html" className='cardLink'>

              <div class="row">
                <div class="col-md-4">
                  <img src={IMG} className='cardIMG' alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Liked Songs</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card mb-3 op mx-3 cardContent">
            <a className='cardLink'>
              <div class="row">
                <div class="col-md-4 albumSelector " id="album">
                  <img src="./assets-home/placeholder.png" alt="..."/>
                  <audio id="audio" src="./Queen - Bohemian Rhapsody.mp3"></audio>

                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Burning Jazz</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>
          

          
    
    <div class="col-md-4" id="album">
                  <img src="./assets-home/placeholder.png" alt="..."/>
                  <audio id="audio" src="./Queen - Bohemian Rhapsody.mp3"></audio>
  
                </div>
    
    
  

          <div class="card mb-3 op mx-3 cardContent">
            <a href="./album.html" className='cardLink'>
              <div class="row">
                <div class="col-md-4">
                  <img src="./assets/album.jpg" className='cardIMG' alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Heavy Metal</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card mb-3 op mx-3 cardContent">
            <a href="./album.html" className='cardLink'>
              <div class="row">
                <div class="col-md-4">
                  <img src="./assets-home/placeholder.png" alt="..." className='cardIMG'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Jedi Mind Tricks</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card mb-3 op mx-3 cardContent">
            <a href="./album.html" className='cardLink'>
              <div class="row">
                <div class="col-md-4">
                  <img src="./assets-home/placeholder.png" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">POST HUMAN</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card mb-3 op mx-3 cardContent">
            <a href="./album.html" className='cardLink'>
              <div class="row">
                <div class="col-md-4">
                  <img src="./assets/album.jpg" alt="..." className='cardIMG'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Chillax</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>


          <div class="card mb-3 op mx-3 cardContent">
            <a href="./album.html" className='cardLink'>
              <div class="row">
                <div class="col-md-4">
                  <img src="./assets-home/placeholder.png" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Future Sounds</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card mb-3 op mx-3 cardContent">
            <a href="./album.html" className='cardLink'>
              <div class="row">
                <div class="col-md-4">
                  <img src="./assets/album-2.jpg" alt="..." className='cardIMG'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Classic Music</h5>
                    <div class="play-btn "></div>

                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>



      <div class="SECTION">
        <h5 class="m-4">Recently played</h5>

        {/* <div style="position: relative;">
          <p class="cardtext" style="position: absolute; right: 20px; top: -40px; font-weight: 600;">
            <a style="text-decoration: none; color: #f8fafa;" href="#"> SEE ALL</a>
          </p>
        </div> */}

        <div class="container-fluid d-flex justify-content-start flex-wrap" id="recently">


         

      
        </div>
      </div>

     
    </div>
   
          
          )
        }



    }




 export default Content   