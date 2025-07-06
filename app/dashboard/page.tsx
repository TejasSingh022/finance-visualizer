"use client";
import React, { useEffect, useState } from "react";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import { Card } from "@/components/ui/card";

type TransactionData = {
  _id?: string;
  amount: number;
  date: string;
  description: string;
};

export default function DashboardPage() {
  const [transactions, setTransactions] = useState([]);
  const [editing, setEditing] = useState<TransactionData | null>(null);
  const [error, setError] = useState("");

  async function fetchTransactions() {
    try {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
    } catch (e) {
      setError("Failed to load transactions");
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function handleAdd(data: TransactionData) {
    setError("");
    try {
      await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      fetchTransactions();
    } catch (e) {
      setError("Failed to add transaction");
    }
  }

  async function handleEdit(data: TransactionData) {
    setError("");
    if (!editing?._id) {
      setError("No transaction selected for editing.");
      return;
    }
    try {
      await fetch("/api/transactions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: editing._id,
          ...data
        }),
      });
      setEditing(null);
      fetchTransactions();
    } catch (e) {
      setError("Failed to update transaction");
    }
  }

  async function handleDelete(id: string) {
    setError("");
    try {
      await fetch(`/api/transactions?id=${id}`, { method: "DELETE" });
      fetchTransactions();
    } catch (e) {
      setError("Failed to delete transaction");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Personal Finance Dashboard</h1>
      {error && <Card className="p-2 bg-red-100 text-red-700">{error}</Card>}
      <Card className="p-4">
        <h2 className="font-semibold mb-2">{editing ? "Edit Transaction" : "Add Transaction"}</h2>
        <TransactionForm
          onSubmit={editing ? handleEdit : handleAdd}
          initialData={editing}
          submitLabel={editing ? "Update" : "Add Transaction"}
        />
      </Card>
      <Card className="p-4">
        <h2 className="font-semibold mb-2">Transactions</h2>
        <TransactionList
          transactions={transactions}
          onEdit={(tx) => setEditing(tx)}
          onDelete={handleDelete}
        />
      </Card>
      <Card className="p-4">
        <h2 className="font-semibold mb-2">Monthly Expenses</h2>
        <MonthlyBarChart transactions={transactions} />
      </Card>
    </div>
  );
} 