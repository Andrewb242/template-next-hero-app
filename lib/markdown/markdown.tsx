import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";

export function getMarkdownData(fileName: string): string {
  // 1. Read file content
  const fullPath = path.join(process.cwd(), "lib", "markdown", fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Combine the data with the contentHtml
  return fileContents;
}

export function RenderMarkdown({
  fileName,
}: {
  fileName: string;
}): React.ReactNode {
  const markdownData = getMarkdownData(fileName);
  return (
    <div className="prose mx-auto max-w-4xl p-16 bg-white text-black my-22">
      <ReactMarkdown>{markdownData}</ReactMarkdown>
    </div>
  );
}
