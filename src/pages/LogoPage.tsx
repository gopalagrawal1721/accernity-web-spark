
import React from 'react';
import { Code, FileText, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LogoPage = () => {
  const downloadSVG = () => {
    // SVG string definition that exactly matches the UI logo
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="240" viewBox="0 0 300 240">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4361ee" />
            <stop offset="100%" stop-color="#7209b7" />
          </linearGradient>
        </defs>
        
        <!-- Logo box with gradient -->
        <g transform="translate(100, 50)">
          <rect width="60" height="60" rx="8" fill="url(#logo-gradient)" />
          <rect width="60" height="60" rx="8" fill="white" fill-opacity="0.2" />
          
          <!-- Code icon -->
          <g transform="translate(10, 20)" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="10,0 0,10 10,20" />
            <polyline points="0,10 10,10" />
          </g>
          
          <!-- Zap icon -->
          <g transform="translate(25, 20)" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="5,0 0,10 5,10 0,20" />
          </g>
          
          <!-- File icon -->
          <g transform="translate(35, 20)" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14,0 L14,20 L0,20 L0,0 Z" />
            <path d="M3,5 L11,5 M3,10 L11,10 M3,15 L11,15" />
          </g>
        </g>
        
        <!-- Text "Code n Content" -->
        <text x="150" y="160" font-family="Montserrat, sans-serif" font-weight="700" font-size="20" text-anchor="middle" fill="url(#logo-gradient)">Code n Content</text>
      </svg>
    `;
    
    // Create download link
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'code-n-content-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPNG = () => {
    // Create a new Image object
    const img = new Image();
    
    // SVG data - using the exact same SVG as defined above
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="240" viewBox="0 0 300 240">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4361ee" />
            <stop offset="100%" stop-color="#7209b7" />
          </linearGradient>
        </defs>
        
        <!-- Logo box with gradient -->
        <g transform="translate(100, 50)">
          <rect width="60" height="60" rx="8" fill="url(#logo-gradient)" />
          <rect width="60" height="60" rx="8" fill="white" fill-opacity="0.2" />
          
          <!-- Code icon -->
          <g transform="translate(10, 20)" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="10,0 0,10 10,20" />
            <polyline points="0,10 10,10" />
          </g>
          
          <!-- Zap icon -->
          <g transform="translate(25, 20)" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="5,0 0,10 5,10 0,20" />
          </g>
          
          <!-- File icon -->
          <g transform="translate(35, 20)" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14,0 L14,20 L0,20 L0,0 Z" />
            <path d="M3,5 L11,5 M3,10 L11,10 M3,15 L11,15" />
          </g>
        </g>
        
        <!-- Text "Code n Content" -->
        <text x="150" y="160" font-family="Montserrat, sans-serif" font-weight="700" font-size="20" text-anchor="middle" fill="url(#logo-gradient)">Code n Content</text>
      </svg>
    `;
    
    // Convert the SVG to a data URL
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 240;
    
    // When the image is loaded, draw it on canvas and convert to PNG
    img.onload = function() {
      if (!ctx) return;
      
      // Draw the image on canvas
      ctx.drawImage(img, 0, 0);
      
      // Release the object URL
      URL.revokeObjectURL(svgUrl);
      
      try {
        // Convert to PNG and download
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = 'code-n-content-logo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error('Error generating PNG:', e);
        alert('Could not generate PNG. Using fallback method...');
        
        // Fallback method - open SVG in new tab for screenshot
        const fallbackLink = document.createElement('a');
        fallbackLink.href = svgUrl;
        fallbackLink.target = '_blank';
        fallbackLink.click();
      }
    };
    
    // Set crossOrigin to anonymous
    img.crossOrigin = 'anonymous';
    img.src = svgUrl;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-montserrat font-bold mb-8 text-center">Logo Download</h1>
          
          <div className="flex flex-col items-center gap-8">
            <div className="p-10 border rounded-lg shadow-lg">
              <div className="flex items-center justify-center" style={{transform: "scale(2)", transformOrigin: "center", margin: "40px 0"}}>
                <div className="relative mr-3 flex items-center justify-center bg-gradient-to-r from-brand-blue to-brand-purple p-2 rounded-lg shadow-lg">
                  <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
                  <Code className="text-white z-10" size={18} />
                  <Zap className="text-white z-10 mx-0.5" size={14} />
                  <FileText className="text-white z-10" size={18} />
                </div>
                <span className="font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Code n Content</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button onClick={downloadSVG} className="gradient-bg flex items-center gap-2">
                <Download size={16} />
                Download SVG
              </Button>
              <Button onClick={downloadPNG} className="gradient-bg flex items-center gap-2">
                <Download size={16} />
                Download PNG
              </Button>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Logo Usage Guidelines</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain the aspect ratio when resizing the logo</li>
                <li>Don't alter the logo colors or proportions</li>
                <li>Ensure there's adequate spacing around the logo</li>
                <li>Use the SVG format for highest quality in digital applications</li>
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
