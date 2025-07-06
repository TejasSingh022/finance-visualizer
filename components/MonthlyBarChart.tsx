import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Transaction = {
  amount: number;
  date: string;
};

type MonthlyBarChartProps = {
  transactions: Transaction[];
};

function getMonthlyData(transactions: Transaction[]) {
  const monthly: { [month: string]: number } = {};
  transactions.forEach((tx) => {
    const month = tx.date.slice(0, 7); // YYYY-MM
    monthly[month] = (monthly[month] || 0) + tx.amount;
  });
  return Object.entries(monthly).map(([month, total]) => ({ month, total }));
}

export default function MonthlyBarChart({ transactions }: MonthlyBarChartProps) {
  const data = getMonthlyData(transactions);
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 