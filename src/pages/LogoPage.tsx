import React, { useRef } from 'react';
import { Code, FileText, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const LogoPage = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const createExactLogoSVG = () => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4361ee" />
            <stop offset="100%" stop-color="#7209b7" />
          </linearGradient>
        </defs>
        
        <!-- Logo container -->
        <g transform="translate(130, 50)">
          <!-- Logo box with gradient -->
          <rect width="60" height="60" rx="8" fill="url(#logo-gradient)" />
          <rect width="60" height="60" rx="8" fill="white" fill-opacity="0.2" />
          
          <!-- Code icon -->
          <g transform="translate(10, 18) scale(0.6)" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16,0 0,16 16,32" />
            <polyline points="0,16 16,16" />
          </g>
          
          <!-- Zap icon -->
          <g transform="translate(24, 18) scale(0.6)" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="13,0 0,16 13,16 0,32" />
          </g>
          
          <!-- File icon -->
          <g transform="translate(36, 18) scale(0.6)" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M24,0 L24,32 L0,32 L0,0 Z" />
            <path d="M5,8 L19,8 M5,16 L19,16 M5,24 L19,24" />
          </g>
        </g>
        
        <!-- Text "Code n Content" -->
        <text x="200" y="170" font-family="Montserrat, sans-serif" font-weight="700" font-size="24" text-anchor="middle" fill="url(#logo-gradient)">Code n Content</text>
      </svg>
    `;
  };

  const downloadSVG = () => {
    const svgString = createExactLogoSVG();
    
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'code-n-content-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("SVG logo downloaded successfully!");
  };

  const downloadPNG = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    const scale = 4;
    canvas.width = 400 * scale;
    canvas.height = 300 * scale;
    
    if (!ctx) {
      toast.error("Could not create canvas context");
      return;
    }
    
    ctx.scale(scale, scale);
    
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const svgString = createExactLogoSVG();
    
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 400, 300);
      
      try {
        const pngUrl = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = 'code-n-content-logo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(pngUrl);
        toast.success("High resolution PNG logo downloaded successfully!");
      } catch (e) {
        console.error('Error generating PNG:', e);
        toast.error("Could not generate PNG. Please try again.");
      }
    };
    
    const svgBlob = new Blob([svgString], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(svgBlob);
    
    img.src = url;
    
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 400, 300);
      try {
        const pngUrl = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = 'code-n-content-logo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error('Error generating PNG:', e);
        toast.error("Could not generate PNG. Please try again.");
      }
    };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-montserrat font-bold mb-8 text-center">Logo Download</h1>
          
          <div className="flex flex-col items-center gap-8">
            <div className="p-10 border rounded-lg shadow-lg">
              <div className="flex items-center justify-center" style={{transform: "scale(2)", transformOrigin: "center", margin: "40px 0"}} ref={logoRef}>
                <div className="relative mr-3 flex items-center justify-center bg-gradient-to-r from-brand-blue to-brand-purple p-2 rounded-lg shadow-lg">
                  <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
                  <Code className="text-white z-10" size={18} />
                  <Zap className="text-white z-10 mx-0.5" size={14} />
                  <FileText className="text-white z-10" size={18} />
                </div>
                <span className="font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Code n Content</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={downloadSVG} className="gradient-bg flex items-center gap-2">
                <Download size={16} />
                Download SVG
              </Button>
              <Button onClick={downloadPNG} className="gradient-bg flex items-center gap-2">
                <Download size={16} />
                Download High-Res PNG
              </Button>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Logo Usage Guidelines</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain the aspect ratio when resizing the logo</li>
                <li>Don't alter the logo colors or proportions</li>
                <li>Ensure there's adequate spacing around the logo</li>
                <li>Use the SVG format for highest quality in digital applications</li>
                <li>The PNG format is available in high resolution for quality printing</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LogoPage;
