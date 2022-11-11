import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
  var expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 4, 17),
    },
     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
     {
       id: 'e3',
       title: 'Car Insurance',
       amount: 294.67,
       date: new Date(2021, 2, 28),
     },
     {
       id: 'e4',
       title: 'New Desk (Wooden)',
       amount: 450,
       date: new Date(2021, 5, 12),
     },
  ]
  return (
    <div className="App">
      <h1>App component</h1>
      {
        expenses.map((item,index) => (
          <ExpenseItems key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItems>
        ))
      }

      console.log(expenses)
    </div>
  );
}

export default App;
