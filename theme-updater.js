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
        
        // Convert dark mode classes to bright mode equivalents
        let newContent = content
          .replace(/text-white/g, 'text-foreground')
          .replace(/rgba\(255,255,255,0\.05\)/g, 'rgba(0,0,0,0.05)')
          .replace(/rgba\(255,255,255,0\.1\)/g, 'rgba(0,0,0,0.1)')
          .replace(/rgba\(255,255,255,0\.02\)/g, 'rgba(0,0,0,0.02)')
          // Certain buttons/badges should keep text-white
          .replace(/bg-primary hover:bg-primary-dark transition-all duration-200 hover:scale-105 hover:shadow-\[0_0_20px_rgba\(14,165,233,0\.4\)\] text-foreground/g, 'bg-primary hover:bg-primary-dark transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] text-white')
          .replace(/bg-primary hover:bg-primary-dark transition-colors text-foreground/g, 'bg-primary hover:bg-primary-dark transition-colors text-white')
          .replace(/bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-\[0_0_30px_rgba\(14,165,233,0\.3\)\] hover:shadow-\[0_0_40px_rgba\(14,165,233,0\.5\)\] transition-all duration-300 hover:-translate-y-1 text-foreground/g, 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all duration-300 hover:-translate-y-1 text-white')
          .replace(/bg-primary text-foreground text-xs/g, 'bg-primary text-white text-xs')
          .replace(/bg-primary text-foreground group-hover:scale-110/g, 'bg-primary text-white group-hover:scale-110')
          .replace(/hover:bg-primary hover:text-foreground/g, 'hover:bg-primary hover:text-white');
        
        if (content !== newContent) {
          fs.writeFileSync(filePath, newContent);
          console.log(`Updated: ${filePath}`);
        }
      }
    });
  });
}

processFiles();
