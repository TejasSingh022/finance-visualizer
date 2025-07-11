import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Transaction from '@/models/Transaction';

export async function GET() {
  await dbConnect();
  const transactions = await Transaction.find().sort({ date: -1 });
  return NextResponse.json(transactions);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const transaction = await Transaction.create(data);
  return NextResponse.json(transaction);
}

export async function PUT(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const { _id, ...update } = data;
  const transaction = await Transaction.findByIdAndUpdate(_id, update, { new: true });
  return NextResponse.json(transaction);
}

export async function DELETE(req: NextRequest) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  await Transaction.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
} 