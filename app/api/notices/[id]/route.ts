import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../_lib/admin-auth";
import { deleteNotice, updateNotice } from "../../../lib/server/notice-store";

export async function PATCH(
  request: NextRequest,
  ctx: RouteContext<"/api/notices/[id]">,
) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  const payload = (await request.json()) as {
    title?: string;
    body?: string;
    pinned?: boolean;
  };
  try {
    const item = await updateNotice(id, {
      title: payload.title?.trim(),
      body: payload.body?.trim(),
      pinned: payload.pinned,
    });
    return NextResponse.json({ item });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update notice", detail: String(error) },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  ctx: RouteContext<"/api/notices/[id]">,
) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  try {
    await deleteNotice(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete notice", detail: String(error) },
      { status: 500 },
    );
  }
}

