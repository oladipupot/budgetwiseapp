

// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import Cards from '../components/Cards'
// import AddExpenseModal from '../components/Modals/addExpense';
// import AddIncomeModal from '../components/Modals/addIncome';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
// import { auth, db } from '../firebase';
// import { addDoc, collection, getDocs, query } from 'firebase/firestore';
// import moment from "moment";
// import TransactionsTable from '../components/TransactionsTable';
// import Charts from '../components/Charts';

// function Dashboard () {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [user] = useAuthState(auth);
//   const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
//   const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
//   const [income, setIncome] = useState(0);
//   const [expense, setExpense] = useState(0);
//   const [totalBalance, setTotalBalance] = useState(0);

//   const showExpenseModal = () => {
//     setIsExpenseModalVisible(true);
//   };

//   const showIncomeModal = () => {
//     setIsIncomeModalVisible(true);
//   };

//   const handleExpenseCancel = () => {
//     setIsExpenseModalVisible(false);
//   };

//   const handleIncomeCancel = () => {
//     setIsIncomeModalVisible(false);
//   };

//   const onFinish = (values, type) => {
//     const newTransaction = {
//       type: type,
//       date: values.date.format("YYYY-MM-DD"),
//       amount: parseFloat(values.amount),
//       tag: values.tag,
//       name: values.name,
//     };
//     addTransaction(newTransaction);
//   };

//   async function addTransaction(transaction) {
//     try {
//       const docRef = await addDoc(
//         collection(db, `users/${user.uid}/transactions`),
//         transaction
//       );
//       console.log("Document written with ID: ", docRef.id);
//       toast.success("Transaction Added!");

//       let newArr = [...transactions, transaction]; // Corrected mutation issue
//       setTransactions(newArr);

//       calculateBalance(newArr); // Corrected: Recalculate balance with the new transactions
//     } catch (e) {
//       console.error("Error adding document: ", e);
//       toast.error("Couldn't add transaction");
//     }
//   }

//   async function fetchTransactions() {
//     setLoading(true);
//     if (user) {
//       const q = query(collection(db, `users/${user.uid}/transactions`));
//       const querySnapshot = await getDocs(q);
//       let transactionsArray = [];
//       querySnapshot.forEach((doc) => {
//         transactionsArray.push(doc.data());
//       });
//       setTransactions(transactionsArray);
//       calculateBalance(transactionsArray); // Corrected: Recalculate balance after fetching transactions
//       toast.success("Transactions Fetched!");
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchTransactions();
//   }, [user]);

//   const calculateBalance = (transactionsArray) => {
//     let incomeTotal = 0;
//     let expensesTotal = 0;

//     transactionsArray.forEach((transaction) => {
//       if (transaction.type === "income") {
//         incomeTotal += transaction.amount;
//       } else {
//         expensesTotal += transaction.amount;
//       }
//     });

//     setIncome(incomeTotal);
//     setExpense(expensesTotal);
//     setTotalBalance(incomeTotal - expensesTotal);
//   };

//   return (
//     <div>
//       <Header />

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <Cards
//             income={income}
//             expense={expense}
//             totalBalance={totalBalance}
//             showExpenseModal={showExpenseModal}
//             showIncomeModal={showIncomeModal}
//           />
//           <AddExpenseModal
//             isExpenseModalVisible={isExpenseModalVisible}
//             handleExpenseCancel={handleExpenseCancel}
//             onFinish={onFinish}
//           />
//           <AddIncomeModal
//             isIncomeModalVisible={isIncomeModalVisible}
//             handleIncomeCancel={handleIncomeCancel}
//             onFinish={onFinish}
//           />
//           <TransactionsTable transactions={transactions} />
//         </>
//       )}
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import AddExpenseModal from '../components/Modals/addExpense';
import AddIncomeModal from '../components/Modals/addIncome';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth, db } from '../firebase';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import moment from 'moment';
import TransactionsTable from '../components/TransactionsTable';
import Charts from '../components/Charts';
import ClipLoader from 'react-spinners/ClipLoader'; // Importing ClipLoader
import WhatsAppChat from '../components/WhatsAppChat';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  const showExpenseModal = () => {
    setIsExpenseModalVisible(true);
  };

  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  };

  const handleExpenseCancel = () => {
    setIsExpenseModalVisible(false);
  };

  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false);
  };

  const onFinish = (values, type) => {
    const newTransaction = {
      type: type,
      date: values.date.format('YYYY-MM-DD'),
      amount: parseFloat(values.amount),
      tag: values.tag,
      name: values.name,
    };
    addTransaction(newTransaction);
  };

  async function addTransaction(transaction) {
    try {
      const docRef = await addDoc(
        collection(db, `users/${user.uid}/transactions`),
        transaction
      );
      console.log('Document written with ID: ', docRef.id);
      toast.success('Transaction Added!');

      let newArr = [...transactions, transaction];
      setTransactions(newArr);

      calculateBalance(newArr);
    } catch (e) {
      console.error('Error adding document: ', e);
      toast.error("Couldn't add transaction");
    }
  }

  async function fetchTransactions() {
    setLoading(true);
    if (user) {
      const q = query(collection(db, `users/${user.uid}/transactions`));
      const querySnapshot = await getDocs(q);
      let transactionsArray = [];
      querySnapshot.forEach((doc) => {
        transactionsArray.push(doc.data());
      });
      setTransactions(transactionsArray);
      calculateBalance(transactionsArray);
      toast.success('Transactions Fetched!');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTransactions();
  }, [user]);

  const calculateBalance = (transactionsArray) => {
    let incomeTotal = 0;
    let expensesTotal = 0;

    transactionsArray.forEach((transaction) => {
      if (transaction.type === 'income') {
        incomeTotal += transaction.amount;
      } else {
        expensesTotal += transaction.amount;
      }
    });

    setIncome(incomeTotal);
    setExpense(expensesTotal);
    setTotalBalance(incomeTotal - expensesTotal);
  };

  return (
    <div>
      <Header />

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ClipLoader color={'#123abc'} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Cards
            income={income}
            expense={expense}
            totalBalance={totalBalance}
            showExpenseModal={showExpenseModal}
            showIncomeModal={showIncomeModal}
          />
          <AddExpenseModal
            isExpenseModalVisible={isExpenseModalVisible}
            handleExpenseCancel={handleExpenseCancel}
            onFinish={onFinish}
          />
          <AddIncomeModal
            isIncomeModalVisible={isIncomeModalVisible}
            handleIncomeCancel={handleIncomeCancel}
            onFinish={onFinish}
          />
          <TransactionsTable transactions={transactions} />
          <div className="App">
            <WhatsAppChat />
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;

