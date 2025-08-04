import React from "react";
import { Card } from "react-bootstrap";

const StatCard = ({ label, value, subtext, variant }) => {
  // variant: success, danger, info for coloring value
  const valueClass = variant ? `text-${variant}` : "";

  return (
    <Card className="mb-3 shadow-sm stat-card">
      <Card.Body>
        <small className="text-muted">{label}</small>
        <h4 className={valueClass}>{value}</h4>
        {subtext && <small className="text-secondary">{subtext}</small>}
      </Card.Body>
    </Card>
  );
};

export default StatCard;
