"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NoticeItem } from "../lib/notice-types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ko-KR");
}

export default function NoticesPage() {
  const [posts, setPosts] = useState<NoticeItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/notices", { cache: "no-store" });
        const data = (await res.json()) as { items?: NoticeItem[]; error?: string };
        if (!res.ok) throw new Error(data.error || "load failed");
        setPosts(data.items ?? []);
      } catch (e) {
        setError(String(e));
      }
    };
    run();
  }, []);

  return (
    <main className="min-h-[100dvh] bg-[#070708] px-6 pb-16 pt-24 text-zinc-100 md:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.24em] text-zinc-500">
              SEOULIND
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              공지사항
            </h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
          >
            메인으로
          </Link>
        </div>

        <div className="mt-8 space-y-3">
          {error ? (
            <p className="rounded-2xl border border-red-300/30 bg-red-300/10 p-5 text-red-100">
              공지사항을 불러오지 못했습니다: {error}
            </p>
          ) : null}
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                {post.pinned ? (
                  <span className="rounded-full border border-amber-300/40 bg-amber-200/10 px-2.5 py-1 text-[11px] text-amber-100">
                    중요
                  </span>
                ) : null}
                <p className="text-[12px] text-zinc-500">
                  업데이트 {formatDate(post.updated_at)}
                </p>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-zinc-300">
                {post.body}
              </p>
            </article>
          ))}
          {posts.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-zinc-400">
              등록된 공지사항이 없습니다.
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}

