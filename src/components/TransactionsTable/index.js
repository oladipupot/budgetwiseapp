
import React from 'react';
import "./style.css"
import { Table, Select, Radio } from 'antd';
import { Line, Pie } from 'react-chartjs-2';
import dayjs from 'dayjs';
import { useState } from 'react';
import searchImg from "../../assets/search.svg";

function TransactionsTable({ transactions }) {
  const { Option } = Select;
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Tag', dataIndex: 'tag', key: 'tag' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => date ? dayjs(date).format('YYYY-MM-DD') : "Invalid Date",
    },
  ];

  // Filter transactions based on search and type
  let filteredTransactions = transactions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (typeFilter === "" || item.type.includes(typeFilter))
  );

  // Sort transactions based on the selected sort key
  let sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });

  // Filter income and expense transactions
  const incomeTransactions = sortedTransactions.filter((transaction) => transaction.type === "income");
  const expenseTransactions = sortedTransactions.filter((transaction) => transaction.type === "expense");

  // Prepare data for the line chart (income)
  const lineData = {
    labels: incomeTransactions.map((transaction) => dayjs(transaction.date).format('YYYY-MM-DD')),
    datasets: [
      {
        label: "Income",
        data: incomeTransactions.map((transaction) => transaction.amount),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Prepare data for the pie chart (expense)
  const pieData = {
    labels: expenseTransactions.map((transaction) => transaction.name),
    datasets: [
      {
        label: "Expenses",
        data: expenseTransactions.map((transaction) => transaction.amount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Export to CSV function
  const exportCSV = () => {
    const headers = columns.map(col => col.title).join(",");
    const csvRows = sortedTransactions.map(row => {
      return columns.map(col => row[col.dataIndex]).join(",");
    });
    const csvContent = [headers, ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "transactions.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={{ width: "94vw", padding: "0rem 2rem" }}>
      {/* Charts Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
          marginBottom: "7rem",
          alignItems: "flex-start",
        }}
      >
        {/* Line Chart for Income */}
        <div style={{ width: "48%", display: "flex", flexDirection: "column", height: "350px" }}>
          <h3 style={{ textAlign: "center" }}>Income Transactions (Line Chart)</h3>
          <Line data={lineData} />
        </div>

        {/* Pie Chart for Expenses */}
        <div style={{ width: "48%", display: "flex", flexDirection: "column", height: "350px" }}>
          <h3 style={{ textAlign: "center" }}>Expense Transactions (Pie Chart)</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Search and Filter Section */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
        <div className="input-flex">
          <img src={searchImg} width="16" alt="search" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search by name" />
        </div>

        <Select
          className="select-input"
          onChange={(value) => setTypeFilter(value)}
          value={typeFilter}
          placeholder="Filter"
          allowClear
        >
          <Option value="">All</Option>
          <Option value="income">Income</Option>
          <Option value="expense">Expense</Option>
        </Select>
      </div>

      {/* Transactions Table Section */}
      <div className="my-table">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h2>My Transactions</h2>
          <Radio.Group className="input-radio" onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
            <Radio.Button value="">No Sort</Radio.Button>
            <Radio.Button value="date">Sort by Date</Radio.Button>
            <Radio.Button value="amount">Sort by Amount</Radio.Button>
          </Radio.Group>
          <div style={{ display: "flex",  justifyContent: "center", gap: "1rem", width: "400px" }}>
            <button className="btn" onClick={exportCSV}>
              Export to CSV
            </button>
            <label htmlFor="file-csv" className="btn btn-blue">
              Import from CSV
            </label>
            <input id="file-csv" type="file" accept=".csv" required style={{ display: "none" }} />
          </div>
        </div>
        <Table dataSource={sortedTransactions} columns={columns} />
      </div>
    </div>
  );
}

export default TransactionsTable;
