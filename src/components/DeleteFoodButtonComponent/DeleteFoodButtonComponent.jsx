import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsDeleteFood } from "../../actions";
import styles from "../DeleteFoodButtonComponent/DeleteFoodButtonComponent.module.scss";

class DeleteFoodButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeleteFood = e => {
    this.props.dispatchDeleteFood(this.props.id);
  };

  render() {
    return (
      <div>
        <button className={styles.deleteButton} onClick={this.handleDeleteFood}>
          X
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchDeleteFood: data => {
      return dispatch(actionsDeleteFood(data));
    }
  };
};

DeleteFoodButtonComponent = connect(
  null,
  mapDispatchToProps
)(DeleteFoodButtonComponent);

export default DeleteFoodButtonComponent;
