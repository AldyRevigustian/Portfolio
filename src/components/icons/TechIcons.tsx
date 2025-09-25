"use client";

import React from "react";
import type { IconType } from "react-icons";
import { DiPython, DiMysql, DiJava, DiRedis, DiUbuntu } from "react-icons/di";
import { RiFileExcel2Fill, RiFirebaseFill } from "react-icons/ri";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiLangchain,
  SiStreamlit,
  SiDocker,
  SiNginx,
  SiApache,
  SiFlutter,
  SiLaravel,
  SiApachekafka,
  SiHtml5,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiApachespark,
  SiApachehive,
  SiDart,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const items = [
  { label: "Python", icon: DiPython, color:"text-white" },
  { label: "SQL", icon: DiMysql, color:"text-white" },
  { label: "Excel", icon: RiFileExcel2Fill, color:"text-white" },
  { label: "TensorFlow", icon: SiTensorflow, color:"text-white" },
  { label: "PyTorch", icon: SiPytorch, color:"text-white" },
  { label: "Scikit-learn", icon: SiScikitlearn, color:"text-white" },
  { label: "OpenCV", icon: SiOpencv, color:"text-white" },
  { label: "Langchain", icon: SiLangchain, color:"text-white" },
  { label: "Spark", icon: SiApachespark, color:"text-white" },
  { label: "Hive", icon: SiApachehive, color:"text-white" },
  { label: "HTML", icon: SiHtml5, color:"text-white" },
  { label: "PHP", icon: SiPhp, color:"text-white" },
  { label: "Tailwind", icon: SiTailwindcss, color:"text-white" },
  { label: "Bootstrap", icon: SiBootstrap, color:"text-white" },
  { label: "Node.js", icon: SiNodedotjs, color:"text-white" },
  { label: "React", icon: SiReact, color:"text-white" },
  { label: "MongoDB", icon: SiMongodb, color:"text-white" },
  { label: "Dart", icon: SiDart, color:"text-white" },
  { label: "Streamlit", icon: SiStreamlit, color:"text-white" },
  { label: "Laravel", icon: SiLaravel, color:"text-white" },
  { label: "Java", icon: DiJava, color:"text-white" },
  { label: "Ubuntu", icon: DiUbuntu, color:"text-white" },
  { label: "Apache", icon: SiApache, color:"text-white" },
  { label: "Flutter", icon: SiFlutter, color:"text-white" },
  { label: "Firebase", icon: RiFirebaseFill, color:"text-white" },
  { label: "Git", icon: FaGitAlt, color:"text-white" },
  { label: "Docker", icon: SiDocker, color:"text-white" },
  { label: "Redis", icon: DiRedis, color:"text-white" },
  { label: "Nginx", icon: SiNginx, color:"text-white" },
  { label: "Kafka", icon: SiApachekafka, color:"text-white" },
];

type IconComponentType = IconType;

export default function TechIcons({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-4 gap-2"
          : "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[1.5rem]"
      }
    >
      {items.map((t) => {
        const Icon = t.icon as IconComponentType;
        return (
          <div key={t.label} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-20 w-20 rounded-lg bg-gradient-to-br from-card/30 to-accent/10 border border-border hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer p-2">
              <Icon className={`h-10 w-10 ${t.color} opacity-90`} />
            </div>
            <span className="text-xs text-muted-foreground hidden md:block select-none">{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}
