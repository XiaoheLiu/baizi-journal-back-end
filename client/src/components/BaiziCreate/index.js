import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createBaizi, fetchBaizis } from "../../actions";
import BaiziInput from "../BaiziInput";
import { formatContent } from "../../utils/formatBaizi";

class BaiziCreate extends Component {
  componentDidMount() {
    if (!this.props.baiziDates.length) {
      this.props.fetchBaizis();
    }
  }

  onBaiziInputSubmit = newBaizi => {
    const content = formatContent(newBaizi.content);
    this.props.createBaizi({ ...newBaizi, content });
    this.props.history.push("/read");
  };

  render() {
    return (
      <BaiziInput
        onSubmit={this.onBaiziInputSubmit}
        baiziDates={this.props.baiziDates}
      />
    );
  }
}

const mapStateToProps = state => ({
  baiziDates: state.baizis.map(b => b.date)
});

export default withRouter(
  connect(
    mapStateToProps,
    { createBaizi, fetchBaizis }
  )(BaiziCreate)
);
