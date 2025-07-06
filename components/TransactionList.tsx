import React from 'react';
import { Button } from "@/components/ui/button";

type Transaction = {
  _id: string;
  amount: number;
  date: string;
  description: string;  
};

type TransactionListProps = {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
};

export default function TransactionList({ transactions, onEdit, onDelete }: TransactionListProps) {
  return (
    <div className="space-y-2">
      {transactions.length === 0 && <p className="text-gray-500">No transactions yet.</p>}
      {transactions.map((tx) => (
        <div key={tx._id} className="flex items-center justify-between border rounded p-2">
          <div>
            <div className="font-semibold">₹{tx.amount.toFixed(2)}</div>
            <div className="text-xs text-gray-500">{tx.date} - {tx.description}</div>
          </div>
          <div className="flex gap-2">
            <Button className="border border-gray-400 text-white bg-blue-600 hover:bg-gray-100 hover:text-black px-3 py-1 text-sm" onClick={() => onEdit(tx)}>Edit</Button>
            <Button className="bg-red-600 text-white hover:bg-red-700 px-3 py-1 text-sm" onClick={() => onDelete(tx._id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
} 