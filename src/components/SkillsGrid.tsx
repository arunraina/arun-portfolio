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
        const isAccent = group.variant === "accent";
        const isNavy = group.variant === "navy";
        const style = isAccent
          ? { background: "var(--accent)", borderColor: "var(--accent)" }
          : isNavy
          ? { background: "var(--navy)", borderColor: "var(--navy-border)" }
          : { background: "var(--card)", borderColor: "var(--border)" };
        const textColor = isAccent ? "#fff" : isNavy ? "var(--navy-text)" : "var(--foreground)";
        const subColor = isAccent
          ? "rgba(255,255,255,0.85)"
          : isNavy
          ? "var(--navy-text-secondary)"
          : "var(--text-secondary)";

        return (
          <div key={group.label} className="rounded-xl border p-5" style={style}>
            <Icon className="w-5 h-5 mb-3" style={{ color: isAccent || isNavy ? textColor : "var(--accent)" }} />
            <h4 className="text-sm font-bold mb-2" style={{ color: textColor }}>
              {group.label}
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: subColor }}>
              {group.items.join(" · ")}
            </p>
          </div>
        );
      })}
    </div>
  );
}
