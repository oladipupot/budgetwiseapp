import React from 'react';
import "./style.css";
import { Card, Row } from 'antd';
import Button from "../Button"

function Cards({income, expense, totalBalance, showExpenseModal, showIncomeModal }) {
  return (
    <div>
       <Row className='my-row'>
      <Card bordered={true}  className="my-card" >
        <h2 className='mycard'>Current Balance</h2>
        <p className='mycards'><i class="fa-solid fa-coins"></i> {totalBalance}</p>
        {/* <Button text="" blue={true} /> */}
      </Card>

      <Card bordered={true}  className="my-card" >
        <h2>Total Income</h2>
        <p><i class="fa-solid fa-coins"></i> {income}</p>
        <Button text="Add Income" blue={true} onClick={showIncomeModal}/>
      </Card>

      <Card bordered={true}  className="my-card" >
        <h2>Total Expenses</h2>
        <p><i class="fa-solid fa-coins"></i> {expense}</p>
        <Button text="Add Expense" blue={true} onClick={showExpenseModal}/>
      </Card>
    </Row>
    </div>
  )
}

export default Cards