import React from "react";





class SongNav extends React.Component {

    state = {

    }

    render() {
        return (

            <div class="song-navbar">
      <div class="left-song-nav">
        <img src="https://i.scdn.co/image/ab67616d0000b27358aa659299939bc52a2dbc22" alt="Group 'Queen' album cover"
          class="song-nav-img-resize"/>
        <div class="text-and-icons">
          <div class="text-description">
            <a href="#">
              <h5 id="navTitle">Another One Bites The Dust - Remastered 2011</h5>
            </a>
            <a href="#">
              <p>Queen</p>
            </a>
          </div>
          <div class="song-nav-icons">
            <img src="spotify-icons/heart.svg" class="song-nav-icons-resize pointer"/>
          </div>
        </div>
      </div>

      <div class="middle-song-nav">
        <div class="top-part-song-nav">
          <img src="spotify-icons/shuffle.png" class="pointer"/>
          <img src="spotify-icons/previous-2.png" class="pointer"/>
          <img src="spotify-icons/play-button.png" onclick="pausePlay ()" id="middle-icon" class="pointer"/>
          <img src="spotify-icons/previous-3.png" class="pointer"/>
          <img src="spotify-icons/loop.png" class="pointer"/>
        </div>
        <div class="btm-part-song-nav">
          <p id="currentDuration">0:00</p>
          <input type="range" onchange=" progress()" value='0' name="progress-song" class="song-bar-line pointer"
            id="pb"/>


          <p id="totalduration">3:34</p>
        </div>
      </div>

      <div class="right-song-nav">
        <div class="icons-combo">
          <img src="spotify-icons/list.png" id="first-icon" class="pointer"/>
          <img src="spotify-icons/responsive.png" class="pointer"/>
          <img src="spotify-icons/audio.png" onclick="mute()" class="pointer" id='mute'/>
          <input class="volume-line pointer" type="range" value="50" onchange="volume(event)"/>

        </div>
      </div>
    </div>

    




        )


    }


}

export default SongNav