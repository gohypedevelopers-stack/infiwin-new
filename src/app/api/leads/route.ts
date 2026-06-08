import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');

async function ensureDataFileExists() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch (error) {
    await fs.mkdir(dataDir, { recursive: true });
  }

  try {
    await fs.access(dataFilePath);
  } catch (error) {
    await fs.writeFile(dataFilePath, JSON.stringify([]));
  }
}

export async function GET() {
  try {
    await ensureDataFileExists();
    const data = await fs.readFile(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataFileExists();
    const body = await request.json();
    
    const newLead = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...body,
    };

    const data = await fs.readFile(dataFilePath, 'utf8');
    const leads = JSON.parse(data);
    
    leads.push(newLead);
    
    await fs.writeFile(dataFilePath, JSON.stringify(leads, null, 2));
    
    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
