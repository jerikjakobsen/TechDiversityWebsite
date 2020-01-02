import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Interview from "./Interview.ogg"

class Music extends React.Component {
  
  
    render() {
      return (
        <div>
            <h2>Interview</h2>
            <p>
                In this interview, I (John Jakobsen) talk with Anastasiia Timashova 
                (President of Women in Computer Science at CCNY) about how she got into tech,
                how she feels about the controversial idea of biological factors affecting
                 women's interest in STEM, advice for women interested in tech and more!
            </p>
            <ReactAudioPlayer
                src={Interview}
                autoPlay
                controls
            />
        </div>
      );
    }
  }
  
  export default Music;