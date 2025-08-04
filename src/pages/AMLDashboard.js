import React from "react";
import StatCard from "../components/StatCard";
import AMLLineChart from "../components/charts/AMLLineChart";
import AMLBarChart from "../components/charts/AMLBarChart";
import AMLPieChart from "../components/charts/AMLPieChart";

import {
  amlStats,
  flaggedTransactionsOverTime,
  flagReasonsData,
  provinceRiskData,
  flaggedTransactionsTable,
} from "../utils/amlData";

const AMLDashboard = () => {
  return (
    <div>
      {/* Stats row */}
      <div className="row mb-4">
        <div className="col-md-3">
          <StatCard
            label="Total Flagged Transactions"
            value={amlStats.totalFlagged}
          />
        </div>
        <div className="col-md-3">
          <StatCard
            label="Total Flagged Amount (CAD)"
            value={`$${amlStats.totalAmount.toLocaleString()}`}
          />
        </div>
        <div className="col-md-3">
          <StatCard
            label="Change vs Last Month"
            value={`${amlStats.changePercent}%`}
            variant={amlStats.changePercent > 0 ? "success" : "danger"}
          />
        </div>
        <div className="col-md-3">
          <StatCard label="Top Flag Reason" value={amlStats.topReason} />
        </div>
      </div>

      {/* Line chart full width card */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm p-3">
            <h5 className="mb-3">Flagged Transactions Over Time</h5>
            <AMLLineChart data={flaggedTransactionsOverTime} />
          </div>
        </div>
      </div>

      {/* Bar chart and Pie chart side by side cards */}
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="card shadow-sm p-3 mb-3 mb-lg-0">
            <h5 className="mb-3">Flag Reasons Breakdown</h5>
            <AMLBarChart data={flagReasonsData} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm p-3">
            <h5 className="mb-3">Risk by Province</h5>
            <AMLPieChart data={provinceRiskData} />
          </div>
        </div>
      </div>

      {/* Table inside card */}
      <div className="card shadow-sm p-3">
        <h5 className="mb-3">Flagged Transactions Detail</h5>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Transaction ID</th>
                <th>Province</th>
                <th>Amount (CAD)</th>
                <th>Timestamp</th>
                <th>Flag Reason</th>
                <th>Risk Score</th>
              </tr>
            </thead>
            <tbody>
              {flaggedTransactionsTable.map((txn) => (
                <tr key={txn.txn_id}>
                  <td>{txn.txn_id}</td>
                  <td>{txn.province}</td>
                  <td>${txn.amount}</td>
                  <td>{new Date(txn.timestamp).toLocaleString()}</td>
                  <td>{txn.reason}</td>
                  <td>
                    <span
                      className={`badge ${
                        txn.risk_score > 85
                          ? "bg-danger"
                          : txn.risk_score > 75
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {txn.risk_score.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AMLDashboard;
