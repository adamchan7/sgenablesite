"use client";

import { Check, Users, Building2, UserCheck, Briefcase, Globe, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapProps {
  active: number;
  progress: number;
  done: number[];
}

const pillars = [
  { id: 1, title: "Leadership", icon: Users },
  { id: 3, title: "Workplace", icon: Building2 },
  { id: 2, title: "Recruitment", icon: UserCheck },
  { id: 4, title: "Employment", icon: Briefcase },
  { id: 5, title: "Community", icon: Globe },
  { id: 6, title: "KPI", icon: BarChart3 },
];

export function Roadmap({ active, progress, done }: RoadmapProps) {
  const getStatus = (id: number) => {
    if (done.includes(id)) return "done";
    if (id === progress) return "progress";
    if (id === active) return "active";
    return "todo";
  };

  return (
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
          {pillars.map((pillar) => {
            const status = getStatus(pillar.id);
            const Icon = pillar.icon;
            
            return (
              <div key={pillar.id} className="flex flex-col items-center text-center w-24">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    {
                      "bg-accentGreen text-white": status === "done",
                      "bg-accentBlue text-white": status === "progress",
                      "bg-accentOrange text-white": status === "active",
                      "ring-2 ring-zinc-300 text-zinc-500": status === "todo",
                    }
                  )}
                >
                  {status === "done" ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span className="mt-1 text-sm text-black font-medium">
                  {pillar.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}