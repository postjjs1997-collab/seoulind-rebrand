"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CINEMATIC_POSTER,
  CINEMATIC_VIDEO_SRC,
  careersNote,
  ceoMessage,
  contactBlock,
  customersNote,
  facilitiesIntro,
  heroImage,
  historyIntro,
  historyMilestones,
  partnerLineup,
  measuringEquipment,
  nav,
  notice,
  organizationNote,
  products,
  qualityPillars,
  qualitySummary,
  qualityCertifications,
  qualityControlPlan,
  preventiveQualityActivities,
  qualitySystemNote,
  reasons,
  rndIntro,
  rndPhaseTable,
  SITE_SOURCE_LABEL,
} from "../content/home";
import { Reveal } from "./reveal";
import { useSectionWheelSnap } from "./use-section-wheel-snap";

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const [subId, setSubId] = useState<string>(() => product.sub[0]?.id ?? "");
  const sub = product.sub.find((s) => s.id === subId) ?? product.sub[0];
  const [imgIdx, setImgIdx] = useState(0);
  const selectSub = (id: string) => {
    setSubId(id);
    setImgIdx(0);
  };

  const imageSrc = sub?.images?.[imgIdx] ?? product.cover;
  const imageAlt = `${product.titleKo} - ${sub?.label ?? product.title}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-7">
      <div className="relative mb-5 aspect-[16/11] w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-inset ring-white/[0.06]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain p-3"
          sizes="(max-width: 768px) 88vw, 38vw"
        />
      </div>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
        {product.title}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
        {product.titleKo}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-zinc-400">
        {product.copy}
      </p>

      {product.sub.length > 1 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {product.sub.map((s) => {
            const active = s.id === subId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => selectSub(s.id)}
                className={`rounded-full border px-3 py-1 text-[12px] transition-colors ${
                  active
                    ? "border-sky-400/40 bg-sky-400/10 text-sky-100"
                    : "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      ) : (
        <p className="mt-5 text-[12px] text-zinc-500">{sub?.label}</p>
      )}

      {sub?.images?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {sub.images.slice(0, 8).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setImgIdx(i)}
              className={`h-9 w-12 overflow-hidden rounded-lg border bg-black/30 transition ${
                i === imgIdx ? "border-white/30" : "border-white/10 hover:border-white/25"
              }`}
              aria-label={`${sub.label} image ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                width={96}
                height={72}
                className="h-full w-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function LinkChevron({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-[15px] font-normal text-sky-400 transition-colors hover:text-sky-300"
    >
      {children}
      <span className="text-lg leading-none" aria-hidden>
        ›
      </span>
    </a>
  );
}

function CinematicStrip({ videoSrc }: { videoSrc: string }) {
  return (
    <section
      id="cinematic"
      className="relative isolate flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-black"
      aria-labelledby="cinematic-heading"
    >
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 z-0 h-full w-full scale-[1.03] object-cover opacity-100 motion-reduce:hidden"
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={CINEMATIC_POSTER}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1] bg-black/25 motion-reduce:hidden"
          aria-hidden
        />
        <div className="absolute inset-0 z-0 hidden motion-reduce:block">
          <Image
            src={CINEMATIC_POSTER}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/50 to-black/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,0,0,0.75),transparent)]"
          aria-hidden
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 py-24 md:px-10 md:py-28 lg:px-12">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-400">
            Manufacturing in motion
          </p>
        </Reveal>
        <Reveal delayMs={90}>
          <h2
            id="cinematic-heading"
            className="mt-5 max-w-[18ch] text-balance text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white"
          >
            한계를 깎아내는 정밀.
          </h2>
        </Reveal>
        <Reveal delayMs={180}>
          <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-zinc-400 md:text-lg">
            공정 영상은{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[0.85em] text-zinc-300">
              public/videos/cinematic.mp4
            </code>
            로 교체할 수 있습니다.
          </p>
        </Reveal>
        <Reveal delayMs={260}>
          <div className="mt-10">
            <LinkChevron href="#products">제품 라인업 보기</LinkChevron>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const snapPageClass =
  "relative min-h-[100dvh] h-[100dvh] snap-start snap-always shrink-0 scroll-mt-0 overflow-y-auto overflow-x-hidden";

export function HomeExperience() {
  useSectionWheelSnap(true);
  const brandAccent = "#f28c28";
  const [activeScene, setActiveScene] = useState("hero");
  const [isPartnerPaused, setIsPartnerPaused] = useState(false);
  const productListRef = useRef<HTMLUListElement>(null);
  const [productScrollState, setProductScrollState] = useState({
    atStart: true,
    atEnd: false,
  });
  const [resolvedVideoSrc, setResolvedVideoSrc] = useState(CINEMATIC_VIDEO_SRC);
  const videoCandidates = useMemo(
    () => ["/videos/cinematic.mp4", "/videos/cinematic.webm", "/videos/cinematic.mov", "/videos/cinematic"],
    [],
  );

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      for (const candidate of videoCandidates) {
        try {
          const res = await fetch(`${candidate}?v=${Date.now()}`, { method: "HEAD" });
          if (res.ok) {
            if (!cancelled) setResolvedVideoSrc(`${candidate}?v=${Date.now()}`);
            return;
          }
        } catch {
          // Try next candidate.
        }
      }
      if (!cancelled) setResolvedVideoSrc(`${CINEMATIC_VIDEO_SRC}?v=${Date.now()}`);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [videoCandidates]);

  const syncProductEdgeState = useCallback(() => {
    const el = productListRef.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 2;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setProductScrollState((prev) =>
      prev.atStart === atStart && prev.atEnd === atEnd
        ? prev
        : { atStart, atEnd },
    );
  }, []);

  useEffect(() => {
    syncProductEdgeState();
    const el = productListRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncProductEdgeState, { passive: true });
    window.addEventListener("resize", syncProductEdgeState);
    return () => {
      el.removeEventListener("scroll", syncProductEdgeState);
      window.removeEventListener("resize", syncProductEdgeState);
    };
  }, [syncProductEdgeState]);

  const scrollProducts = (dir: 1 | -1) => {
    const el = productListRef.current;
    if (!el) return;
    const step = Math.max(320, Math.round(el.clientWidth * 0.82));
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const smoothGoTo = useCallback((href: string) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-snap-page][data-scene]"),
    );
    if (!scenes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let winner: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!winner || entry.intersectionRatio > winner.intersectionRatio) {
            winner = entry;
          }
        }
        if (!winner || winner.intersectionRatio < 0.55) return;
        const scene = winner.target.getAttribute("data-scene");
        if (scene) setActiveScene(scene);
      },
      { threshold: [0.35, 0.55, 0.75, 0.92] },
    );

    scenes.forEach((scene) => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

  const sceneStateClass = (scene: string) =>
    activeScene === scene ? "scene-active" : "scene-inactive";

  return (
    <div className="relative overflow-x-hidden bg-[#070708] text-zinc-100">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(255,255,255,0.08),transparent_58%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,0,0,0.62),transparent_60%)]"
        aria-hidden
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#0b0b0d]/70 backdrop-blur-2xl backdrop-saturate-150">
        <div className="mx-auto flex min-h-[48px] max-w-[1400px] flex-wrap items-center justify-between gap-3 px-6 py-2 md:min-h-[52px] md:px-10 lg:px-12">
          <Link
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              smoothGoTo("#hero");
            }}
            className="text-[12px] font-semibold tracking-[0.32em] text-white md:text-[13px]"
          >
            SEOUL
            <span style={{ color: brandAccent }}>IND</span>
          </Link>
          <nav
            className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[11px] font-medium md:flex lg:gap-x-5 lg:text-[12px]"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothGoTo(item.href);
                }}
                className="group flex items-baseline gap-1.5 text-zinc-400 transition-colors hover:text-white lg:gap-2"
              >
                <span className="font-normal tabular-nums text-zinc-600 transition-colors group-hover:text-zinc-500">
                  {item.num}
                </span>
                <span className="tracking-wide">{item.label}</span>
              </a>
            ))}
          </nav>
          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-zinc-300 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,300px)] rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-xl"
              aria-label="Mobile"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        smoothGoTo(item.href);
                      }}
                      className="flex items-baseline gap-3 rounded-xl px-3 py-2.5 text-[13px] text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      <span className="w-6 tabular-nums text-zinc-600">
                        {item.num}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </header>

      <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:flex">
        <div className="rounded-full border border-white/10 bg-black/35 px-2 py-3 backdrop-blur-xl">
          <ul className="space-y-2" aria-label="Scene indicator">
            {[
              "hero",
              "cinematic",
              "products",
              "company",
              "history",
              "quality",
              "rnd",
              "facilities",
              "careers",
              "contact",
            ].map((scene) => (
              <li key={scene}>
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                    activeScene === scene
                      ? "bg-white shadow-[0_0_14px_rgba(255,255,255,0.55)]"
                      : "bg-white/30"
                  }`}
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className="relative z-10">
        <section
          id="hero"
          data-scene="hero"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("hero")} relative flex flex-col justify-center px-6 pt-[5rem] md:px-10 md:pt-20 lg:px-12 lg:pt-16`}
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-contain object-center brightness-[0.28] contrast-[1.04] saturate-[0.72]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(56,189,248,0.12),transparent_55%)]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_78%,rgba(0,0,0,0.92)_100%)]"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[980px] flex-col">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-500">
                Seoul Industry Co., Ltd. · Since 1985
              </p>
            </Reveal>
            <Reveal delayMs={100}>
              <h1
                id="hero-heading"
                className="mt-6 max-w-[18ch] text-balance text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white"
              >
                Precision
                <br />
                Beyond <span style={{ color: brandAccent }}>Limits</span>
              </h1>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="mt-8 max-w-xl text-pretty text-[16px] leading-relaxed text-zinc-300 md:text-[17px] md:leading-7">
                자동차 부품 정밀 가공. BSM·전동화·조향·파워트레인·드라이브라인
                등 공식 라인업을 바탕으로 글로벌 완성차 메이커와 협력합니다.
              </p>
            </Reveal>
            <Reveal delayMs={300}>
              <p className="mt-4 text-[12px] text-zinc-600">{SITE_SOURCE_LABEL}</p>
            </Reveal>
            <Reveal delayMs={380}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                <LinkChevron href="#company">기업정보</LinkChevron>
                <LinkChevron href="#products">제품 라인업</LinkChevron>
                <LinkChevron href="#contact">오시는 길</LinkChevron>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          data-scene="cinematic"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("cinematic")} flex flex-col border-t border-white/[0.06] bg-black`}
          aria-label="시네마틱 필름"
        >
          <CinematicStrip videoSrc={resolvedVideoSrc} />
        </section>

        <section
          id="products"
          data-scene="products"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("products")} flex flex-col border-t border-white/[0.06] bg-[#030303] py-10 md:py-12`}
          aria-labelledby="products-heading"
        >
          <div className="mx-auto w-full max-w-[1100px] shrink-0 px-6 md:px-10 lg:px-12">
            <Reveal>
              <h2
                id="products-heading"
                className="text-balance text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-tight tracking-[-0.025em] text-white"
              >
                제품 라인업
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-500 md:text-base">
                공식 사이트 제품정보 메뉴 구조(Balance Shaft Module, Electric
                Vehicle, Steering, Powertrain, Driveline 등)를 반영했습니다.
              </p>
            </Reveal>
          </div>
          <div className="relative mt-6 min-h-0 flex-1 md:mt-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#030303] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#030303] to-transparent" />
            <div className="absolute right-6 top-[-2.75rem] z-30 flex items-center gap-2 md:right-10 lg:right-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]">
              <button
                type="button"
                aria-label="이전 제품"
                onClick={() => scrollProducts(-1)}
                disabled={productScrollState.atStart}
                className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-lg text-zinc-200 transition-colors hover:bg-white/[0.1] disabled:cursor-not-allowed disabled:opacity-35"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="다음 제품"
                onClick={() => scrollProducts(1)}
                disabled={productScrollState.atEnd}
                className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-lg text-zinc-200 transition-colors hover:bg-white/[0.1] disabled:cursor-not-allowed disabled:opacity-35"
              >
                ›
              </button>
            </div>
            <ul
              ref={productListRef}
              className="scrollbar-hide flex h-full min-h-[min(48dvh,380px)] snap-x snap-mandatory list-none gap-5 overflow-x-auto overflow-y-hidden px-6 pb-4 pt-2 md:gap-6 md:px-10 md:pb-6 lg:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] lg:pr-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]"
              aria-label="제품 카테고리"
              data-horizontal-wheel
              style={{ scrollBehavior: "smooth" }}
            >
              {products.map((item, idx) => (
                <li
                  key={item.id}
                  className="w-[min(88vw,360px)] shrink-0 snap-center snap-always sm:w-[min(80vw,400px)] md:w-[min(38vw,420px)]"
                >
                  <Reveal delayMs={idx * 60} className="h-full">
                    <div id={item.id} className="h-full">
                      <ProductCard product={item} />
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="company"
          data-scene="company"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("company")} border-t border-white/[0.06] bg-black px-6 py-12 md:px-10 md:py-16 lg:px-12`}
          aria-labelledby="company-heading"
        >
          <div className="mx-auto w-full max-w-[900px] space-y-10">
            <Reveal>
              <h2
                id="company-heading"
                className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold tracking-tight text-white"
              >
                기업정보
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-5 py-4 text-[14px] text-amber-100/90">
                <strong className="font-medium">{notice.title}</strong>
                <span className="mt-1 block text-amber-100/75">
                  {notice.body}
                </span>
              </div>
            </Reveal>
            <Reveal delayMs={140}>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {ceoMessage.title}
                </h3>
                <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.75] text-zinc-400">
                  {ceoMessage.body}
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="text-[14px] leading-relaxed text-zinc-500">
                {customersNote}
              </p>
            </Reveal>
            <Reveal delayMs={260}>
              <p className="text-[14px] leading-relaxed text-zinc-500">
                {organizationNote}
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delayMs={280 + i * 70} variant="scale">
                  <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-5">
                    <h4 className="font-semibold text-white">{r.title}</h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-zinc-500">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="history"
          data-scene="history"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("history")} border-t border-white/[0.06] bg-[#030303] px-6 py-12 md:px-10 md:py-16 lg:px-12`}
          aria-labelledby="history-heading"
        >
          <div className="mx-auto w-full max-w-[720px]">
            <Reveal>
              <h2
                id="history-heading"
                className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold tracking-tight text-white"
              >
                회사연혁
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
                {historyIntro}
              </p>
            </Reveal>
            <ol className="mt-10 space-y-0 border-l border-white/10 pl-6">
              {historyMilestones.map((m, i) => (
                <Reveal key={m.date} delayMs={120 + i * 55}>
                  <li className="relative pb-10 last:pb-0">
                    <span
                      className="absolute -left-[25px] top-1.5 size-2.5 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                      aria-hidden
                    />
                    <p className="font-mono text-[13px] text-sky-400/90">
                      {m.date}
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-zinc-200">
                      {m.title}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delayMs={340}>
              <div className="mt-12">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-300">
                      협력사 라인업
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
                      자동 롤링. 마우스를 올리면 멈추고, 버튼으로도 이동합니다.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="이전"
                      onClick={() => {
                        const el = document.getElementById("partner-track");
                        el?.scrollBy({ left: -260, behavior: "smooth" });
                      }}
                      className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-lg text-zinc-200 transition-colors hover:bg-white/[0.1]"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="다음"
                      onClick={() => {
                        const el = document.getElementById("partner-track");
                        el?.scrollBy({ left: 260, behavior: "smooth" });
                      }}
                      className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-lg text-zinc-200 transition-colors hover:bg-white/[0.1]"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#030303] to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#030303] to-transparent"
                    aria-hidden
                  />
                  <div
                    id="partner-track"
                    className="partner-rail scrollbar-hide flex overflow-x-auto"
                    onMouseEnter={() => setIsPartnerPaused(true)}
                    onMouseLeave={() => setIsPartnerPaused(false)}
                    onFocusCapture={() => setIsPartnerPaused(true)}
                    onBlurCapture={() => setIsPartnerPaused(false)}
                  >
                    <div
                      className="partner-marquee flex w-max items-center gap-3 px-4 py-4"
                      style={{
                        animationPlayState: isPartnerPaused ? "paused" : "running",
                      }}
                    >
                      {[...partnerLineup, ...partnerLineup].map((partner, idx) => (
                        <a
                          key={`${partner.name}-${partner.href}-${idx}`}
                          href={partner.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 transition-[border-color,background-color,transform] duration-300 hover:border-white/[0.22] hover:bg-white/[0.05] hover:-translate-y-[1px]"
                        >
                          <div className="flex h-9 w-36 items-center gap-2">
                            <Image
                              src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(
                                partner.href,
                              )}&sz=64`}
                              alt=""
                              width={16}
                              height={16}
                              className="size-4 rounded-[2px] opacity-90"
                            />
                            <span className="truncate text-[12px] font-semibold uppercase tracking-[0.12em] text-zinc-200/90">
                              {partner.name}
                            </span>
                          </div>
                        </a>
                      ))}
                      <span
                        className="mx-2 h-4 w-px bg-white/10"
                        aria-hidden
                      />
                      {[...partnerLineup, ...partnerLineup].map((partner, idx) => (
                        <a
                          key={`dup-${partner.name}-${partner.href}-${idx}`}
                          href={partner.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 transition-[border-color,background-color,transform] duration-300 hover:border-white/[0.22] hover:bg-white/[0.05] hover:-translate-y-[1px]"
                        >
                          <div className="flex h-9 w-36 items-center gap-2">
                            <Image
                              src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(
                                partner.href,
                              )}&sz=64`}
                              alt=""
                              width={16}
                              height={16}
                              className="size-4 rounded-[2px] opacity-90"
                            />
                            <span className="truncate text-[12px] font-semibold uppercase tracking-[0.12em] text-zinc-200/90">
                              {partner.name}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="quality"
          data-scene="quality"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("quality")} border-t border-white/[0.06] bg-black px-6 py-12 md:px-10 md:py-16 lg:px-12`}
          aria-labelledby="quality-heading"
        >
          <div className="mx-auto w-full max-w-[1100px] space-y-10">
            <Reveal>
              <h2
                id="quality-heading"
                className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold tracking-tight text-white"
              >
                품질보증
              </h2>
            </Reveal>
            <Reveal delayMs={40}>
              <p className="max-w-4xl text-[15px] leading-relaxed text-zinc-400">
                {qualitySummary.policy}
              </p>
              <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-zinc-500">
                {qualitySummary.operation}
              </p>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              <Reveal delayMs={60}>
                <div className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                    Quality System Flow
                  </p>
                  <div className="mt-6 grid gap-3">
                    {[
                      "고객요구 수집",
                      "시작품 제작·시험",
                      "양산설계 반영",
                      "파일럿 생산 검증",
                      "양산/납품 모니터링",
                    ].map((step, idx) => (
                      <div
                        key={step}
                        className="relative rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3 text-[13px] text-zinc-300"
                      >
                        <span className="mr-2 font-mono text-xs text-sky-400">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {step}
                        {idx < 4 ? (
                          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-zinc-600">
                            ↓
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={120}>
                <div className="rounded-2xl border border-white/[0.08] bg-[linear-gradient(160deg,rgba(56,189,248,0.08),rgba(255,255,255,0.02))] p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                    Preventive Quality Matrix
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      ["설계 변경", "사양 재검증"],
                      ["시작품 시험", "부적합 원인분석"],
                      ["공정 편차", "표준조건 재설정"],
                      ["납품 이슈", "피드백 즉시 반영"],
                    ].map(([left, right]) => (
                      <div
                        key={left}
                        className="col-span-2 grid grid-cols-2 gap-2 rounded-xl border border-white/[0.08] bg-black/25 p-2"
                      >
                        <div className="rounded-lg bg-white/[0.03] px-3 py-2 text-[12px] text-zinc-400">
                          {left}
                        </div>
                        <div className="rounded-lg bg-sky-500/10 px-3 py-2 text-[12px] text-sky-200">
                          {right}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {qualityPillars.map((p, i) => (
                <Reveal key={p.title} delayMs={80 + i * 80}>
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                      {p.title}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {p.subtitle}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-zinc-400">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delayMs={200}>
              <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                <table className="w-full min-w-[680px] border-collapse text-left text-[13px] text-zinc-400">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.04] text-zinc-300">
                      <th className="px-4 py-3 font-medium">인증/표준</th>
                      <th className="px-4 py-3 font-medium">취득 시점</th>
                      <th className="px-4 py-3 font-medium">비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityCertifications.map((row) => (
                      <tr
                        key={row.standard}
                        className="border-b border-white/[0.06] last:border-0"
                      >
                        <td className="px-4 py-3 font-medium text-zinc-200">
                          {row.standard}
                        </td>
                        <td className="px-4 py-3 text-zinc-300">
                          {row.acquired}
                        </td>
                        <td className="px-4 py-3">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal delayMs={260}>
              <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                <table className="w-full min-w-[720px] border-collapse text-left text-[13px] text-zinc-400">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.04] text-zinc-300">
                      <th className="px-4 py-3 font-medium">품질 운영 단계</th>
                      <th className="px-4 py-3 font-medium">핵심 활동</th>
                      <th className="px-4 py-3 font-medium">산출/결과</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityControlPlan.map((row) => (
                      <tr
                        key={row.stage}
                        className="border-b border-white/[0.06] last:border-0"
                      >
                        <td className="px-4 py-3 font-medium text-zinc-200">
                          {row.stage}
                        </td>
                        <td className="px-4 py-3">{row.key}</td>
                        <td className="px-4 py-3 text-zinc-300">{row.output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal delayMs={320}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
                <h3 className="text-base font-semibold text-white">
                  예방품질활동
                </h3>
                <ul className="mt-4 grid gap-2 text-[14px] text-zinc-400 md:grid-cols-2">
                  {preventiveQualityActivities.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-white/[0.06] bg-black/30 px-3 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delayMs={320}>
              <p className="text-[14px] leading-relaxed text-zinc-500">
                {qualitySystemNote}
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="rnd"
          data-scene="rnd"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("rnd")} border-t border-white/[0.06] bg-[#030303] px-6 py-12 md:px-10 md:py-16 lg:px-12`}
          aria-labelledby="rnd-heading"
        >
          <div className="mx-auto w-full max-w-[960px] space-y-8">
            <Reveal>
              <h2
                id="rnd-heading"
                className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold tracking-tight text-white"
              >
                연구개발
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <h3 className="text-lg font-semibold text-white">
                {rndIntro.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-zinc-400">
                {rndIntro.lead}
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-zinc-400">
                {rndIntro.process}
              </p>
            </Reveal>
            <Reveal delayMs={180}>
              <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                <table className="w-full min-w-[640px] border-collapse text-left text-[13px] text-zinc-400">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.04] text-zinc-300">
                      <th className="px-4 py-3 font-medium">구분</th>
                      <th className="px-4 py-3 font-medium">기획단계</th>
                      <th className="px-4 py-3 font-medium">시작단계</th>
                      <th className="px-4 py-3 font-medium">양산시작단계</th>
                      <th className="px-4 py-3 font-medium">양산단계</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rndPhaseTable.map((row) => (
                      <tr
                        key={row.phase}
                        className="border-b border-white/[0.06] last:border-0"
                      >
                        <td className="px-4 py-3 font-medium text-zinc-300">
                          {row.phase}
                        </td>
                        <td className="px-4 py-3">{row.planning}</td>
                        <td className="px-4 py-3">{row.start}</td>
                        <td className="px-4 py-3">{row.massStart}</td>
                        <td className="px-4 py-3">{row.mass}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="facilities"
          data-scene="facilities"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("facilities")} border-t border-white/[0.06] bg-black px-6 py-12 md:px-10 md:py-16 lg:px-12`}
          aria-labelledby="facilities-heading"
        >
          <div className="mx-auto w-full max-w-[1000px] space-y-10">
            <Reveal>
              <h2
                id="facilities-heading"
                className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold tracking-tight text-white"
              >
                생산 / 측정 설비
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <h3 className="text-lg font-semibold text-white">
                {facilitiesIntro.productionTitle}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                {facilitiesIntro.productionLead}
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <h3 className="text-lg font-semibold text-white">
                {facilitiesIntro.measurementTitle}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                {facilitiesIntro.measurementLead}
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                <table className="w-full min-w-[720px] border-collapse text-left text-[12px] text-zinc-400 md:text-[13px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.04] text-zinc-300">
                      <th className="px-3 py-2.5 font-medium">계측기명</th>
                      <th className="px-3 py-2.5 font-medium">형식/규격</th>
                      <th className="px-3 py-2.5 font-medium">제조업체</th>
                      <th className="px-3 py-2.5 font-medium">수량</th>
                      <th className="px-3 py-2.5 font-medium">계측기명</th>
                      <th className="px-3 py-2.5 font-medium">형식/규격</th>
                      <th className="px-3 py-2.5 font-medium">제조업체</th>
                      <th className="px-3 py-2.5 font-medium">수량</th>
                    </tr>
                  </thead>
                  <tbody>
                    {measuringEquipment.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/[0.06] last:border-0"
                      >
                        <td className="px-3 py-2.5 text-zinc-300">
                          {row.left.name}
                        </td>
                        <td className="px-3 py-2.5">{row.left.spec}</td>
                        <td className="px-3 py-2.5">{row.left.maker}</td>
                        <td className="px-3 py-2.5">{row.left.qty}</td>
                        <td className="px-3 py-2.5 text-zinc-300">
                          {row.right.name}
                        </td>
                        <td className="px-3 py-2.5">{row.right.spec}</td>
                        <td className="px-3 py-2.5">{row.right.maker}</td>
                        <td className="px-3 py-2.5">{row.right.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="careers"
          data-scene="careers"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("careers")} flex flex-col justify-center border-t border-white/[0.06] bg-[#030303] px-6 py-12 md:px-10 md:py-16 lg:px-12`}
          aria-labelledby="careers-heading"
        >
          <div className="mx-auto w-full max-w-[640px] text-center">
            <Reveal>
              <h2
                id="careers-heading"
                className="text-[clamp(1.65rem,4vw,2.75rem)] font-semibold tracking-tight text-white"
              >
                {careersNote.title}
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="mt-6 text-[15px] leading-relaxed text-zinc-400">
                {careersNote.body}
              </p>
            </Reveal>
          </div>
        </section>

        <footer
          id="contact"
          data-scene="contact"
          data-snap-page
          className={`${snapPageClass} ${sceneStateClass("contact")} flex flex-col justify-end border-t border-white/[0.08] bg-black px-6 py-12 md:px-10 md:py-16 lg:px-12`}
        >
          <Reveal>
            <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <p className="text-[12px] font-semibold tracking-[0.28em] text-white">
                  SEOULIND
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
                  {contactBlock.addressLine}
                </p>
                <p className="mt-1 text-[14px] text-zinc-500">
                  {contactBlock.postalCode}
                </p>
                <p className="mt-4 text-[14px] text-zinc-500">
                  {contactBlock.mapNote}
                </p>
                <ul className="mt-6 space-y-2 text-[15px] text-zinc-400">
                  <li>
                    <a
                      href={`tel:${contactBlock.tel.replace(/-/g, "")}`}
                      className="transition-colors hover:text-white"
                    >
                      TEL {contactBlock.tel}
                    </a>
                  </li>
                  <li className="text-zinc-600">
                    FAX {contactBlock.fax}
                  </li>
                </ul>
                <a
                  href={contactBlock.brochureHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex text-[14px] text-sky-400 hover:text-sky-300"
                >
                  {contactBlock.brochureLabel} ↗
                </a>
              </div>
              <div>
                <p className="text-[12px] font-medium text-zinc-600">섹션</p>
                <ul className="mt-4 space-y-2 text-[14px]">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          smoothGoTo(item.href);
                        }}
                        className="text-zinc-400 transition-colors hover:text-white"
                      >
                        {item.num} {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="mx-auto mt-12 max-w-[1200px] border-t border-white/[0.06] pt-6 text-center text-[11px] text-zinc-600 md:mt-14 md:pt-8 md:text-left">
              <p>
                원문·연락처·인증·설비 목록 등은{" "}
                <a
                  href="http://www.seoulind.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 underline-offset-2 hover:text-zinc-400 hover:underline"
                >
                  seoulind.co.kr
                </a>
                기준으로 옮겼습니다. COPYRIGHT (c) SEOUL INDUSTRY CO., LTD.
              </p>
              <p className="mt-2">
                © {new Date().getFullYear()} 리브랜드 데모 UI. All rights
                reserved.
              </p>
            </div>
          </Reveal>
        </footer>
      </main>
    </div>
  );
}
