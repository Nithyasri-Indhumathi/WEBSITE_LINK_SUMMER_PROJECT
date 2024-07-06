import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import vdo from './video/farmvideo.mp4';
import thum from './images/contact.jpg';

function Vdo() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh', // Adjust the height as needed
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: "1500px", textAlign:"center" }}>
        <h2 style={{ fontSize: "40px" }}>Video</h2>
        <Video autoPlay loop poster={thum}>
          <source src={vdo} type='video/webm'></source>
        </Video>
      </div>
    </div>
  );
}

export default Vdo;