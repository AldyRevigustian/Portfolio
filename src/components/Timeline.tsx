"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { memo, useEffect, useRef, useState } from "react";
import BulletPoints from "@/components/ui/BulletPoints";
import { useMediaQuery } from "@/hooks/use-media-query";

type TimelineItem = {
  title: string;
  job: string;
  date: string;
  contents: string[];
};

type TimelineProps = {
  data: TimelineItem[];
};

export const Timeline = memo(({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, isDesktop]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={`${item.date}-${item.title}-${item.job}`}
            className="flex justify-start pt-8 sm:pt-10 md:pt-40 md:gap-10"
            data-testid={`timeline-item-${index}`}
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-20 sm:top-40 lg:max-w-lg md:w-full">
              <div className="absolute flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full -left-[14px] sm:-left-[15px] bg-midnight">
                <div className="w-3 h-3 sm:w-4 sm:h-4 p-1.5 sm:p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-2 text-lg sm:text-xl font-bold md:flex md:pl-20 md:text-3xl lg:text-4xl text-neutral-300">
                <h3 data-testid={`timeline-date-desktop-${index}`}>{item.date}</h3>
                <h3 className="text-2xl sm:text-3xl text-neutral-400" data-testid={`timeline-title-desktop-${index}`}>{item.title}</h3>
                <h3 className="text-2xl sm:text-3xl text-neutral-500" data-testid={`timeline-job-desktop-${index}`}>{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-16 sm:pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-lg sm:text-xl md:text-2xl font-bold text-left text-neutral-300 md:hidden">
                <h3 data-testid={`timeline-date-mobile-${index}`}>{item.date}</h3>
                <h3 className="text-base sm:text-lg font-medium text-neutral-400" data-testid={`timeline-title-mobile-${index}`}>{item.title}</h3>
                <h3 className="text-sm sm:text-base text-neutral-500" data-testid={`timeline-job-mobile-${index}`}>{item.job}</h3>
              </div>
              <div data-testid={`timeline-content-${index}`}>
                <BulletPoints
                  items={item.contents.map((c) => c.replace(/^\s*-\s*/, ""))}
                />
              </div>
            </div>
          </div>
        ))}
        {isDesktop ? (
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        ) : (
          <div className="absolute md:left-1 left-1 top-0 h-full w-[2px] bg-neutral-700  mt-10" />
        )}
      </div>
    </div>
  );
});
Timeline.displayName = "Timeline";
