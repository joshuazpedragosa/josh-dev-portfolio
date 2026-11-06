import type { ReactNode } from "react";

type WindowProps = {
  title: string;
  right?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
};

// Dark editor-window card with macOS-style traffic lights
export default function Window({
  title,
  right,
  className = "",
  bodyClassName = "",
  children,
}: WindowProps) {
  return (
    <div className={`window ${className}`}>
      <div className="window-bar">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-card-muted">
          {title}
        </span>
        {right}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
