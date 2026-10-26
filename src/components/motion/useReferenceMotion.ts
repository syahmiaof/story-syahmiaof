"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";

/** Animate wrappers only: inner headline spans retain their measured scaleX. */
export function useReferenceMotion(rootRef: RefObject<HTMLElement | null>, routeKey?: string) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (new URLSearchParams(window.location.search).get("visualqa") === "1") {
      root.dataset.motionState = "static";
      return () => { delete root.dataset.motionState; };
    }
    let cancelled = false;
    const media = gsap.matchMedia();
    const prepare = async () => {
      // Fonts and artwork must settle before the entrance starts.
      await document.fonts.ready;
      await Promise.all(Array.from(root.querySelectorAll(".scene-layer img")).map(image =>
        (image as HTMLImageElement).decode().catch(() => undefined)
      ));
      if (cancelled) return;
      media.add({ motion: "(prefers-reduced-motion: no-preference)", reduced: "(prefers-reduced-motion: reduce)" }, context => {
        if (!context.conditions?.motion) {
          root.dataset.motionState = "static";
          return;
        }
        root.dataset.motionState = "entering";
        const select = gsap.utils.selector(root);
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.65 },
          onComplete: () => { root.dataset.motionState = "resting"; },
        });
        const addFrom = (selector: string, vars: gsap.TweenVars, position: number) => {
          const targets = select(selector);
          if (targets.length) timeline.from(targets, vars, position);
        };
        addFrom(".scene-layer", { opacity: 0, duration: 0.95 }, 0);
        addFrom(".reference-eyebrow", { opacity: 0, y: 10 }, 0.08);
        addFrom(".headline-line", { opacity: 0, y: 18, clipPath: "inset(0 0 100% 0)", stagger: 0.09, duration: 0.8 }, 0.16);
        addFrom(".reference-subtitle, .reference-intro", { opacity: 0, y: 10, stagger: 0.06 }, 0.35);
        addFrom(".reference-actions", { opacity: 0, y: 8 }, 0.49);
        addFrom(".reference-quote", { opacity: 0, y: 10 }, 0.4);
        addFrom(".reference-module, .reference-note", { opacity: 0, y: 10, stagger: 0.06 }, 0.5);
        const resetTargets = select(".scene-layer, .reference-eyebrow, .headline-line, .reference-subtitle, .reference-intro, .reference-actions, .reference-quote, .reference-module, .reference-note");
        if (resetTargets.length) timeline.set(resetTargets, { clearProps: "transform,opacity,clipPath" });
        return () => { root.dataset.motionState = "static"; };
      }, root);
    };
    void prepare();
    return () => {
      cancelled = true;
      media.revert();
      delete root.dataset.motionState;
    };
  }, [rootRef, routeKey]);
}
