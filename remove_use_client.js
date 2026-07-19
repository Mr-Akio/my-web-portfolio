const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'Header.tsx');

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Remove "use client";
    content = content.replace(/"use client";\r?\n?/g, '');
    content = content.replace(/'use client';\r?\n?/g, '');
    
    fs.writeFileSync(filePath, content);
});
console.log('Removed "use client" from static components to enable React Server Components (RSC)');
