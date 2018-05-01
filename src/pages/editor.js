import React, {Component} from "react";
import SimpleMDE from "simplemde"
import './mde.css'

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      var simplemde = new SimpleMDE();
    },1000)

  }

  render() {
    return (
        <div className="container" id="MyID">
          <textarea></textarea>
        </div>
    );
  }
}
