import * as React from "react";

export interface ScreenshotPlaceholderProps {
  label?: string;
  height?: string;
}

export const ScreenshotPlaceholder: React.FC<ScreenshotPlaceholderProps> = ({
  label = "Screenshot pending",
  height = "aspect-[16/10]",
}) => {
  return (
    <div
      className={`w-full ${height} border-2 border-dashed border-ink-600 bg-ink-900 rounded-lg flex flex-col items-center justify-center p-6 text-center text-textMute font-mono text-sm`}
    >
      <div className="w-10 h-10 mb-3 rounded-full border border-ink-700 flex items-center justify-center text-ink-600">
        📷
      </div>
      <span className="text-bone font-medium mb-1">{label}</span>
      <span className="text-xs text-textMute">Development placeholder — add image in /public/projects/</span>
    </div>
  );
};
