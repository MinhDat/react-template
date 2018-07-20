import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import BodyContent from "../../components/BodyContent";
import { usersListRequest } from "../../redux/actions";

class Dashboard extends Component {
  componentWillMount() {
    // console.log(this.props);
    this.props.usersListRequest();
  }
  render() {
    return (
      <div className="Dashboard">
        <Header />
        <Menu />
        <BodyContent users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      usersListRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
