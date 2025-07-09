"use client";

import { useState, useEffect } from "react";

export function TopBar() {
  const [font, setFont] = useState(100);           // 85–125
  const [contrast, setContrast] = useState(false);

  // hydrate from localStorage
  useEffect(() => {
    const f = localStorage.getItem("fontScale");
    const c = localStorage.getItem("contrastMode");
    if (f) setFont(+f);
    if (c) setContrast(c === "high");
  }, []);

  // write changes
  useEffect(() => {
    // Apply font scaling to the body element
    document.body.style.fontSize = `${font}%`;
    localStorage.setItem("fontScale", String(font));
  }, [font]);

  useEffect(() => {
    document.documentElement.dataset.contrast = contrast ? "high" : "normal";
    localStorage.setItem("contrastMode", contrast ? "high" : "normal");
  }, [contrast]);

  const handleSkipNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    if (target && target !== "#main") {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Reset select to default
        e.target.value = "#main";
      }
    }
  };

  return (
    <div className="w-full bg-blue-50 border-b px-4 py-1 flex items-center justify-between text-sm">
      <div>
        <label htmlFor="skip-nav" className="sr-only">Skip to</label>
        <select 
          id="skip-nav" 
          className="mr-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-primaryBlue rounded"
          onChange={handleSkipNavigation}
          defaultValue="#main"
        >
          <option value="#main">Skip To …</option>
          <option value="#content">Main Content</option>
          <option value="#footer">Footer</option>
        </select>
      </div>
      <div className="flex items-center space-x-4">
        <span>Text Size:</span>
        <button 
          onClick={() => setFont(Math.max(85, font - 10))}
          className="px-2 py-1 hover:bg-blue-100 rounded focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          disabled={font <= 85}
        >
          A-
        </button>
        <button 
          className="font-bold px-2 py-1 hover:bg-blue-100 rounded focus:outline-none focus:ring-2 focus:ring-primaryBlue" 
          onClick={() => setFont(Math.min(125, font + 10))}
          disabled={font >= 125}
        >
          A+
        </button>
        <button 
          onClick={() => setContrast(!contrast)}
          className="px-2 py-1 hover:bg-blue-100 rounded focus:outline-none focus:ring-2 focus:ring-primaryBlue"
        >
          Contrast
        </button>
        <span className="hidden sm:inline">Accessibility</span>
      </div>
    </div>
  );
}