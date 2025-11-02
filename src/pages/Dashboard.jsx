import React from "react";
import PendingExpenses from "../components/PendingExpenses";
import ProfileSelector from "../components/ProfileSelector";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Compras da Família 🛒</h1>
      <ProfileSelector />
      <PendingExpenses />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fdfdfd",
    minHeight: "100vh",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
};

export default Dashboard;
