import React from "react";
import { Component } from "react";
import apiKeys from "../apiKeys";

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=` + apiKeys.key;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      s.addEventListener("load", (e) => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  componentDidUpdate() {
    if (window.google) {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed !important",
          }}
          id={this.props.id}
        />
      </>
    );
  }
}

export default GoogleMap;
