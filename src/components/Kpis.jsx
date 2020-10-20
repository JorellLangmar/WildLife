import React, { Component } from "react";

export default class Kpis extends Component {
  render() {
    return (
      <div className="kpis">
        <div className="wrapper">
          <div class="kpi"><span className="num">247</span><br/>animals have been rescued by R.O.A.R. since its creation.</div>
          <div class="kpi"><span className="num">44</span><br/>staff members work tirelessly at the Sanctuary all year round.</div>
          <div class="kpi"><span className="num">36</span><br/>different wildlife species have been taken care of at the Sanctuary.</div>
          <div class="kpi"><span className="num">37,568</span><br/>donators helped us last year through sponsorships and adoptions.</div>
        </div>
      </div>
    );
  }
}
