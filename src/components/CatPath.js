import React from "react";

import "./CatPath.css";

class CatPath extends React.Component {
  /* renderList() {
    const list = [];
    for (let i = 1; i <= this.props.points.pathLength; i++) {
      if (i <= this.props.points.pawAmount) {
        list.push(<ion-icon name={"paw"} key={i} />);
      } else {
        list.push(<ion-icon name={"radio-button-off"} key={i} />);
      }
    }
    return list;
  }*/
  renderList() {
    const list = [];
    for (let i = 1; i <= this.props.points.pathLength; i++) {
      if (i <= this.props.points.pawAmount) {
        list.push(<li className="active" key={i} />);
      } else {
        list.push(<li key={i} />);
      }
    }
    return list;
  }
  render() {
    return (
      <div className="catpath">
        <ul className="catpath-list">{this.renderList()}</ul>
      </div>
    );
  }
}

export default CatPath;
