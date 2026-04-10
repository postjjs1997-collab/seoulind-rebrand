"use client";

export type NoticePost = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  pinned?: boolean;
};

const NOTICE_STORAGE_KEY = "seoulind_notice_posts_v1";

const seedPosts: NoticePost[] = [
  {
    id: "seed-001",
    title: "서울산업 웹사이트가 새롭게 리뉴얼되었습니다.",
    body: "공식 공지사항 게시 기준으로 등록된 안내입니다.",
    createdAt: "2026-04-10T00:00:00.000Z",
    updatedAt: "2026-04-10T00:00:00.000Z",
    pinned: true,
  },
];

function sortPosts(posts: NoticePost[]) {
  return [...posts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

export function getNoticePosts(): NoticePost[] {
  if (typeof window === "undefined") return sortPosts(seedPosts);
  const raw = window.localStorage.getItem(NOTICE_STORAGE_KEY);
  if (!raw) return sortPosts(seedPosts);
  try {
    const parsed = JSON.parse(raw) as NoticePost[];
    if (!Array.isArray(parsed)) return sortPosts(seedPosts);
    return sortPosts(parsed);
  } catch {
    return sortPosts(seedPosts);
  }
}

export function saveNoticePosts(posts: NoticePost[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(NOTICE_STORAGE_KEY, JSON.stringify(sortPosts(posts)));
}

export function upsertNotice(post: Omit<NoticePost, "createdAt" | "updatedAt"> & {
  createdAt?: string;
}) {
  const current = getNoticePosts();
  const now = new Date().toISOString();
  const idx = current.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    current[idx] = {
      ...current[idx],
      ...post,
      updatedAt: now,
    };
  } else {
    current.push({
      ...post,
      createdAt: post.createdAt ?? now,
      updatedAt: now,
    });
  }
  saveNoticePosts(current);
  return sortPosts(current);
}

export function removeNotice(id: string) {
  const next = getNoticePosts().filter((p) => p.id !== id);
  saveNoticePosts(next);
  return sortPosts(next);
}

