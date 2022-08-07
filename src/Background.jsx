import React from "react";
import NET from "vanta/dist/vanta.net.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class Background extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: "root",

      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x8014b3,
      backgroundColor: 0x5,
      points: 8.0,
      spacing: 17.0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return <div ref={this.vantaRef}>Foreground content goes here</div>;
  }
}

export default Background;
