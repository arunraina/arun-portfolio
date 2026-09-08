import { Compass, TrendingUp, BarChart3, Layers, Brain, Wrench } from "lucide-react";
import { skillGroups } from "@/data/profile";

const iconMap = {
  compass: Compass,
  trending: TrendingUp,
  chart: BarChart3,
  layers: Layers,
  brain: Brain,
  wrench: Wrench,
};

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillGroups.map((group) => {
        const Icon = iconMap[group.icon];

        return (
          <div
            key={group.label}
            className="rounded-xl border p-5"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <Icon className="w-5 h-5 mb-3" style={{ color: "var(--accent)" }} />
            <h4 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>
              {group.label}
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {group.items.join(" · ")}
            </p>
          </div>
        );
      })}
    </div>
  );
}
