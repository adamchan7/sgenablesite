"use client";

import { FileText, Link, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ResourceChipProps {
  variant: "file" | "link" | "snippet";
  text: string;
  href?: string;
  downloadName?: string;
  copyText?: string;
}

export function ResourceChip({ variant, text, href, downloadName, copyText }: ResourceChipProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copyText) {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getIcon = () => {
    switch (variant) {
      case "file":
        return <FileText className="h-4 w-4" />;
      case "link":
        return <Link className="h-4 w-4" />;
      case "snippet":
        return copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "file":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
      case "link":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
      case "snippet":
        return "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100";
    }
  };

  if (variant === "snippet") {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className={`${getVariantStyles()} transition-colors duration-200`}
      >
        {getIcon()}
        <span className="ml-2">{text}</span>
      </Button>
    );
  }

  return (
    <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-md border transition-all duration-200 ${getVariantStyles()}`}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          download={downloadName}
          className="flex items-center space-x-2 no-underline text-sm font-medium"
        >
          {getIcon()}
          <span>{text}</span>
        </a>
      ) : (
        <div className="flex items-center space-x-2 text-sm font-medium">
          {getIcon()}
          <span>{text}</span>
        </div>
      )}
    </div>
  );
}