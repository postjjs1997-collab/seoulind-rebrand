import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE } from "../../_lib/admin-auth";

export async function POST(request: NextRequest) {
  const { password } = (await request.json()) as { password?: string };
  const expected = process.env.NOTICE_ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "NOTICE_ADMIN_PASSWORD is not configured" },
      { status: 500 },
    );
  }
  if (!password || password !== expected) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, expected, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}

