"use client";

import { useState, useEffect } from "react";
import { Cog, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function AccessibilityPanel() {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    // Load saved preferences
    const savedContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = parseInt(localStorage.getItem('fontSize') || '100');
    
    setHighContrast(savedContrast);
    setFontSize(savedFontSize);
    
    // Apply saved settings
    document.documentElement.setAttribute('data-contrast', savedContrast ? 'high' : 'normal');
    document.documentElement.style.setProperty('--base-font', `${savedFontSize}%`);
  }, []);

  const toggleContrast = (enabled: boolean) => {
    setHighContrast(enabled);
    localStorage.setItem('highContrast', enabled.toString());
    document.documentElement.setAttribute('data-contrast', enabled ? 'high' : 'normal');
  };

  const adjustFontSize = (delta: number) => {
    const newSize = Math.max(85, Math.min(125, fontSize + delta));
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize.toString());
    document.documentElement.style.setProperty('--base-font', `${newSize}%`);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-primaryBlue text-white hover:bg-primaryBlue/90"
        >
          <Cog className="h-5 w-5" />
          <span className="sr-only">Open accessibility panel</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Accessibility Settings</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="contrast-toggle" className="text-sm font-medium">
              High Contrast Mode
            </Label>
            <Switch
              id="contrast-toggle"
              checked={highContrast}
              onCheckedChange={toggleContrast}
            />
          </div>
          
          <div className="space-y-3">
            <Label className="text-sm font-medium">Font Size</Label>
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustFontSize(-5)}
                disabled={fontSize <= 85}
              >
                <Minus className="h-4 w-4" />
                <span className="ml-1">A-</span>
              </Button>
              <span className="text-sm font-medium">{fontSize}%</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustFontSize(5)}
                disabled={fontSize >= 125}
              >
                <Plus className="h-4 w-4" />
                <span className="ml-1">A+</span>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}