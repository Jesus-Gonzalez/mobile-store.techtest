import React from "react";
import PropTypes from "prop-types";

import DefaultLayout from "../DefaultLayout";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <DefaultLayout>
        <h3>An error occurred</h3>
      </DefaultLayout>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default ErrorBoundary;
