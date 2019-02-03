import React, { Component } from "react";
import InfoMessage from "./InfoMessage";
import ErrorMessage from "./ErrorMessage";
import Baizi from "../Baizi";
import { getToday } from "../../utils/date";
import { hanziCounter } from "../../utils/formatBaizi";
import { SINGLE_BAIZI_CHARACTER_LIMIT } from "../../constants";

class BaiziInput extends Component {
  state = {
    content: "",
    date: getToday(),
    title: "",
    weather: "",
    showInfoMsg: true,
    showErrorMsg: false
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { showInfoMsg, showErrorMsg, ...baizi } = this.state;
    const { baiziDates } = this.props;
    if (baiziDates) {
      if (baiziDates.includes(baizi.date)) {
        this.setState({ showErrorMsg: true });
      } else {
        this.props.onSubmit(baizi);
        this.setState({
          content: "",
          date: getToday(),
          title: "",
          weather: ""
        });
      }
    }
  };

  onCloseMessage = type => {
    this.setState({ [type]: false });
  };

  render() {
    const {
      content,
      date,
      title,
      weather,
      showInfoMsg,
      showErrorMsg
    } = this.state;
    const count = hanziCounter(content);
    const button =
      count === SINGLE_BAIZI_CHARACTER_LIMIT
        ? { color: "green", disabled: false, text: "发布" }
        : { color: "", disabled: true, text: "未完成" };

    return (
      <div style={{ maxWidth: "62em", width: "90%", margin: "0 auto" }}>
        <h4 className="ui horizontal divider header" id="xiebaizi">
          <i className="edit outline icon" />
        </h4>
        {showErrorMsg && (
          <ErrorMessage onClose={() => this.onCloseMessage("showErrorMsg")} />
        )}
        {showInfoMsg && (
          <InfoMessage onClose={() => this.onCloseMessage("showInfoMsg")} />
        )}
        <div className="ui centered segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="three fields">
              <div className="field">
                <label>题目:</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  autoComplete="off"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="field">
                <label>日期:</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="field">
                <label>天气:</label>
                <select
                  className="ui fluid dropdown"
                  onChange={this.onInputChange}
                  name="weather"
                  value={weather}
                >
                  <option value="">--（选填）--</option>
                  <option value="☀️">☀️</option>
                  <option value="⛅️">⛅️</option>
                  <option value="🌦">🌦</option>
                  <option value="☁️">☁️</option>
                  <option value="🌧">🌧</option>
                  <option value="⛈">⛈</option>
                  <option value="❄️">❄️</option>
                  <option value="🌫">🌫</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>百字:</label>
              <textarea
                value={content}
                name="content"
                onChange={this.onInputChange}
              />
            </div>
            <p> {count} / 100 字</p>
            <button
              className={`ui ${button.color} button`}
              disabled={button.disabled}
              type="submit"
            >
              {button.text}
            </button>
          </form>
          <div className="ui horizontal divider">预览</div>
          <Baizi
            content={content}
            date={date}
            weather={weather}
            title={title}
            key={1}
          />
        </div>
      </div>
    );
  }
}

export default BaiziInput;
