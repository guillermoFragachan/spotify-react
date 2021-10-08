import React from "react";





class Sidebar extends React.Component {

    state = {

    }

    render() {
        return (
        

<div class="col-2">
     


      <nav class=" sidebar flex-column fixed-left navbar-dark mb-5 pb-5">
        <div class="container ml-3 ">
          <a class="navbar-brand my-4 logo " href="./index.html">
            <img src="./assets/Spotify_Logo_RGB_White.png" class="firstlogo" alt=""/>
          </a>
          <div class=" main-menu " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">

                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-house-door-fill"></i>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex" id="searchBar" href="#">
                  <i class="bi bi-search"></i>
                  <p class="searchHolder">Search</p>
                  <input type="text"  class="d-none searchArea"/>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-music-note-list"></i>
                  Your library
                </a>

              </li>
            </ul>

          </div>




          <div class=" main-menu mt-5 " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">

                <a class="nav-link" aria-current="page" href="#" onclick="openModal()" id="open">
                  <i class="bi bi-plus-square"></i>
                  Create playlist
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-caret-right-square"></i>
                  Liked songs
                </a>
              </li>


            </ul>

          </div>

          <hr class="ml-0 mt-5 mb-0"/>
         
          <div class=" playlist-menu mt-4 " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="playlist_list">
              <li class="nav-item the-list-item">

                <a class="nav-link active" aria-current="page" href="#">
                  The Bachelor Ends
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Fun At Snacks
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Girls' Snacks
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Summer Whoop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Modern Hall
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Room For Ends
                </a>
              </li>


            </ul>

          </div>


        
          <div class="main-menu ml-0 mb-5 mt-3">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <a href="" class="text-secondary">
                  <i class="bi bi-arrow-down-circle"></i>
                  Install App
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>


    </div>



          )}

}




export default Sidebar