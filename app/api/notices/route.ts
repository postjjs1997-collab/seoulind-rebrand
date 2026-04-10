import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../_lib/admin-auth";
import { createNotice, listNotices } from "../../lib/server/notice-store";

export async function GET() {
  try {
    const rows = await listNotices();
    return NextResponse.json({ items: rows });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch notices", detail: String(error) },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const payload = (await request.json()) as {
    title?: string;
    body?: string;
    pinned?: boolean;
  };
  const title = payload.title?.trim();
  const body = payload.body?.trim();
  if (!title || !body) {
    return NextResponse.json(
      { error: "title and body are required" },
      { status: 400 },
    );
  }
  try {
    const created = await createNotice({
      title,
      body,
      pinned: Boolean(payload.pinned),
    });
    return NextResponse.json({ item: created });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create notice", detail: String(error) },
      { status: 500 },
    );
  }
}

