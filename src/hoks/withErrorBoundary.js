import React from "react";

export class withErrorBounary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error, errorInfo) {
    console.log("errorInfor", errorInfo);
    this.setState({ error });
  }
  render() {
    console.log("this.props.children", this.props.children);
    if (this.state.error) {
      return <div>Component has crashed</div>;
    }
    return this.props.children;
  }
}
