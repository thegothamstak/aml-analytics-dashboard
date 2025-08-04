export const amlStats = {
  totalFlagged: 273,
  totalAmount: 7238000,
  changePercent: 9.8,
  topReason: "Structuring",
  topProvince: "Ontario",
};

export const flaggedTransactionsOverTime = [
  { date: "2025-07-01", count: 11 },
  { date: "2025-07-02", count: 14 },
  { date: "2025-07-03", count: 6 },
  { date: "2025-07-04", count: 18 },
  { date: "2025-07-05", count: 21 },
  { date: "2025-07-06", count: 23 },
  { date: "2025-07-07", count: 19 },
];

export const flagReasonsData = [
  { reason: "Structuring", count: 93 },
  { reason: "Unusual Large Cash", count: 61 },
  { reason: "Casino Transactions", count: 48 },
  { reason: "Real Estate Purchase", count: 41 },
  { reason: "Wire Transfers", count: 30 },
];

export const provinceRiskData = [
  { province: "Ontario", risk: 91 },
  { province: "British Columbia", risk: 75 },
  { province: "Quebec", risk: 62 },
  { province: "Alberta", risk: 44 },
  { province: "Nova Scotia", risk: 27 },
];

export const flaggedTransactionsTable = [
  {
    txn_id: "TXN12301",
    province: "Ontario",
    amount: "94,200.00",
    timestamp: "2025-07-01T10:20:18Z",
    reason: "Structuring",
    risk_score: 91.2,
  },
  {
    txn_id: "TXN12302",
    province: "British Columbia",
    amount: "105,300.00",
    timestamp: "2025-07-02T13:11:09Z",
    reason: "Casino Transactions",
    risk_score: 86.0,
  },
  {
    txn_id: "TXN12303",
    province: "Quebec",
    amount: "67,450.00",
    timestamp: "2025-07-03T16:03:45Z",
    reason: "Wire Transfers",
    risk_score: 78.3,
  },
  {
    txn_id: "TXN12304",
    province: "Ontario",
    amount: "88,100.00",
    timestamp: "2025-07-04T11:07:00Z",
    reason: "Real Estate Purchase",
    risk_score: 83.6,
  },
  {
    txn_id: "TXN12305",
    province: "Nova Scotia",
    amount: "54,800.00",
    timestamp: "2025-07-05T14:30:25Z",
    reason: "Unusual Large Cash",
    risk_score: 79.9,
  },
];
