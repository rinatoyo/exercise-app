import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./DiaryComponent.module.scss";
import { actionsGetDiaryData } from "../../actions";
import MealComponent from "../MealComponent";

let moment = require("moment");

class DiaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      meals: ["Breakfast", "Lunch", "Dinner", "Snack"]
    };
  }

  handleNewDate = () => {
    let date = this.state.currentDate
      .parseZone(this.state.currentDate.format())
      .utc()
      .format();
    console.log("date", date);
    return this.props.dispatchGetDiaryData(date);
  };

  componentDidMount = () => {
    console.log("componentDidMount");
    return this.handleNewDate();
  };

  getPreviousDate = () => {
    let previousDate = this.state.currentDate.subtract(1, "days");
    return this.setState(
      {
        currentDate: previousDate
      },
      () => {
        return this.handleNewDate();
      }
    );
  };

  getNextDate = () => {
    let nextDate = this.state.currentDate.add(1, "days");
    return this.setState({ currentDate: nextDate }, () => {
      return this.handleNewDate();
    });
  };

  filterFoodsIntoMeals = (arr, str) => {
    return arr.filter(data => {
      return data.meal_type_id.meal_type === str;
    });
  };

  render() {
    return (
      <div className={styles.DiaryComponent}>
        <h1>Diary Component</h1>
        <button onClick={this.getPreviousDate}>Yesterday</button>
        <h3>{this.state.currentDate.format("MMMM D")}</h3>
        <button onClick={this.getNextDate}>Tomorrow</button>
        <div>{this.state.currentDate.format("YYYY-MM-DD")}</div>

        <ul>
          {this.state.meals.map(meal => {
            return (
              <MealComponent
                key={meal}
                meal={meal}
                foods={this.filterFoodsIntoMeals(this.props.diaryData, meal)}
              ></MealComponent>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    diaryData: store.diaryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetDiaryData: date => {
      console.log("dispatchGetDiaryData", date);
      dispatch(actionsGetDiaryData(date));
    }
  };
};

DiaryComponent = connect(mapStateToProps, mapDispatchToProps)(DiaryComponent);

export default DiaryComponent;