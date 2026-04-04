const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function processFiles() {
  const dirs = [
    path.join(__dirname, 'app'),
    path.join(__dirname, 'components'),
  ];
  
  dirs.forEach(dir => {
    walkDir(dir, (filePath) => {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        let newContent = content
          // Map custom classes to standard Tailwind classes to avoid CSS variable parsing issues
          .replace(/text-foreground-muted/g, 'text-slate-600')
          .replace(/text-foreground/g, 'text-slate-900')
          .replace(/bg-surface-light/g, 'bg-slate-50')
          .replace(/bg-surface/g, 'bg-white')
          .replace(/bg-background/g, 'bg-slate-100')
          
          // Fix buttons that became dark text on dark background
          .replace(/text-slate-900 bg-gradient-to-r/g, 'text-white bg-gradient-to-r')
          .replace(/text-slate-900 bg-primary/g, 'text-white bg-primary')
          .replace(/text-slate-900 glass/g, 'text-white glass') // wait, glass is light now
          
          // Fix typos and other leftovers
          .replace(/text-white glass/g, 'text-slate-900 glass') 
          .replace(/bg-surfce/g, 'bg-white')
          .replace(/border-\[rgba\(0,0,0,0\.1\)\]/g, 'border-slate-200')
          .replace(/border-\[rgba\(0,0,0,0\.05\)\]/g, 'border-slate-100')
          
          // Re-fix primary buttons
          .replace(/text-slate-900 bg-primary/g, 'text-white bg-primary')
          .replace(/hover:text-slate-900/g, 'hover:text-slate-600');
          
        if (content !== newContent) {
          fs.writeFileSync(filePath, newContent);
          console.log(`Updated: ${filePath}`);
        }
      }
    });
  });
}

processFiles();
