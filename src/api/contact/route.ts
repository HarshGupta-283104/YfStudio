import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;
const client = new MongoClient(MONGODB_URI);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required!' },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db('myDatabase'); // use your DB name
    const contacts = db.collection('contacts');

    await contacts.insertOne({ name, email, service, message, createdAt: new Date() });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
