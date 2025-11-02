import React, { useState } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import ProfileSelector from "./components/ProfileSelector.jsx";
import { useLocalData } from "./hooks/useLocalData.js";
import "./App.css";

function App() {
  const [profile, setProfile] = useState(null);
  const [data, saveData] = useLocalData();

  // Função para adicionar despesa (usada pelo PendingExpenses)
  const addExpense = (newExpense) => {
    const updatedData = {
      ...data,
      expenses: [...data.expenses, newExpense],
    };
    saveData(updatedData);
  };

  // Função para aprovar despesa
  const handleApprove = (expenseId) => {
    const updatedExpenses = data.expenses.map((exp) =>
      exp.id === expenseId ? { ...exp, status: "approved" } : exp
    );
    saveData({ ...data, expenses: updatedExpenses });
  };

  // Função para rejeitar despesa
  const handleReject = (expenseId) => {
    if (window.confirm("Tem certeza que deseja rejeitar esta despesa?")) {
      const updatedExpenses = data.expenses.filter((exp) => exp.id !== expenseId);
      saveData({ ...data, expenses: updatedExpenses });
    }
  };

  // Expor função addExpense globalmente para PendingExpenses
  React.useEffect(() => {
    window.addExpense = addExpense;
    return () => {
      delete window.addExpense;
    };
  }, [data]);

  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#2b2b2b]">
      {!profile ? (
        <ProfileSelector onSelect={setProfile} />
      ) : (
        <Dashboard
          profile={profile}
          expenses={data.expenses}
          onApprove={handleApprove}
          onReject={handleReject}
          onLogout={() => setProfile(null)}
        />
      )}
    </div>
  );
}

export default App;
