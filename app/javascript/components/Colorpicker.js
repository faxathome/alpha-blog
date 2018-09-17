import React from "react";
import propTypes from "prop-types"
import { SketchPicker } from "react-color";

class Colorpicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = { selector: props.selector };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (color) => {
    document.body.style.background = color.hex;
    let elem = document.querySelector('#'+this.state.selector);

    elem.value = color.hex;
    }

  render() {
    return <SketchPicker color={ this.props.color }
                         onChange={ this.handleChange } />;
  }
}

Colorpicker.propTypes = {

};

export default Colorpicker;
