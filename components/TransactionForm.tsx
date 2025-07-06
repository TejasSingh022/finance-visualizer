import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const transactionSchema = z.object({
  amount: z.number().min(0.01, 'Amount must be greater than 0'),
  date: z.string().min(1, 'Date is required'),
  description: z.string().min(1, 'Description is required'),
});

type TransactionFormProps = {
  onSubmit: (data: any) => void;
  initialData?: any;
  submitLabel?: string;
};

export default function TransactionForm({ onSubmit, initialData, submitLabel = 'Add Transaction' }: TransactionFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: initialData || { amount: '', date: '', description: '' },
  });

  return (
    <form onSubmit={handleSubmit((data) => { onSubmit(data); reset(); })} className="space-y-4">
      <div>
        <Input type="number" step="0.01" placeholder="Amount" {...register('amount', { valueAsNumber: true })} />
        {errors.amount && <p className="text-red-500 text-xs">{errors.amount.message as string}</p>}
      </div>
      <div>
        <Input type="date" {...register('date')} />
        {errors.date && <p className="text-red-500 text-xs">{errors.date.message as string}</p>}
      </div>
      <div>
        <Input type="text" placeholder="Description" {...register('description')} />
        {errors.description && <p className="text-red-500 text-xs">{errors.description.message as string}</p>}
      </div>
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
} 