"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { NoticeItem } from "../../lib/notice-types";

export default function NoticeAdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [posts, setPosts] = useState<NoticeItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pinned, setPinned] = useState(false);
  const [error, setError] = useState("");

  const loadPosts = async () => {
    const res = await fetch("/api/notices", { cache: "no-store" });
    const data = (await res.json()) as { items?: NoticeItem[]; error?: string };
    if (!res.ok) throw new Error(data.error || "load failed");
    setPosts(data.items ?? []);
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: inputPw }),
    });
    if (!res.ok) {
      setError("비밀번호가 올바르지 않거나 서버 설정이 없습니다.");
      return false;
    }
    setAuthorized(true);
    await loadPosts();
    return true;
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setBody("");
    setPinned(false);
  };

  const save = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert("제목과 내용을 입력해 주세요.");
      return;
    }
    const endpoint = editingId ? `/api/notices/${editingId}` : "/api/notices";
    const method = editingId ? "PATCH" : "POST";
    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title.trim(),
        body: body.trim(),
        pinned,
      }),
    });
    const data = (await res.json()) as { error?: string };
    if (!res.ok) {
      alert(data.error || "저장에 실패했습니다.");
      return;
    }
    await loadPosts();
    resetForm();
  };

  if (!authorized) {
    return (
      <main className="min-h-[100dvh] bg-[#070708] px-6 pb-16 pt-24 text-zinc-100 md:px-10">
        <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h1 className="text-xl font-semibold text-white">공지사항 관리자 로그인</h1>
          <p className="mt-2 text-sm text-zinc-400">
            메뉴에는 보이지 않는 내부 관리자 페이지입니다.
          </p>
          <form className="mt-6 space-y-3" onSubmit={login}>
            <input
              type="password"
              value={inputPw}
              onChange={(e) => setInputPw(e.target.value)}
              placeholder="관리자 비밀번호"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white outline-none ring-sky-400/60 placeholder:text-zinc-500 focus:ring-2"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              로그인
            </button>
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-[#070708] px-6 pb-16 pt-24 text-zinc-100 md:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-[1080px] space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.24em] text-zinc-500">
              INTERNAL
            </p>
            <h1 className="mt-2 text-2xl font-semibold">공지사항 관리</h1>
          </div>
          <div className="flex gap-2">
            <Link
              href="/notices"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            >
              공지 페이지 보기
            </Link>
            <button
              type="button"
              onClick={async () => {
                await fetch("/api/admin/logout", { method: "POST" });
                setAuthorized(false);
              }}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            >
              로그아웃
            </button>
          </div>
        </div>

        <form
          onSubmit={save}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
        >
          <h2 className="text-lg font-semibold text-white">
            {editingId ? "공지 수정" : "공지 작성"}
          </h2>
          <div className="mt-4 space-y-3">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white outline-none ring-sky-400/60 placeholder:text-zinc-500 focus:ring-2"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              placeholder="내용"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white outline-none ring-sky-400/60 placeholder:text-zinc-500 focus:ring-2"
            />
            <label className="inline-flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                checked={pinned}
                onChange={(e) => setPinned(e.target.checked)}
              />
              중요 공지로 상단 고정
            </label>
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                저장
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              >
                초기화
              </button>
            </div>
          </div>
        </form>

        <section className="space-y-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-white">
                  {post.pinned ? "[중요] " : ""}
                  {post.title}
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(post.id);
                      setTitle(post.title);
                      setBody(post.body);
                      setPinned(Boolean(post.pinned));
                    }}
                    className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const ok = confirm("이 공지를 삭제할까요?");
                      if (!ok) return;
                      fetch(`/api/notices/${post.id}`, { method: "DELETE" }).then(
                        async (res) => {
                          if (!res.ok) {
                            const data = (await res.json()) as { error?: string };
                            alert(data.error || "삭제에 실패했습니다.");
                            return;
                          }
                          await loadPosts();
                        },
                      );
                      if (editingId === post.id) resetForm();
                    }}
                    className="rounded-lg border border-red-300/30 px-3 py-1.5 text-xs text-red-200 transition-colors hover:border-red-200/50"
                  >
                    삭제
                  </button>
                </div>
              </div>
              <p className="mt-2 whitespace-pre-line text-sm text-zinc-400">
                {post.body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

