import { NextRequest } from "next/server";

export const ADMIN_COOKIE = "seoulind_notice_admin";

export function requireAdmin(request: NextRequest) {
  const expected = process.env.NOTICE_ADMIN_PASSWORD;
  if (!expected) return false;
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  return token === expected;
}

