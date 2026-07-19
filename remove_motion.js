const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const propsToRemove = ['initial', 'whileInView', 'viewport', 'transition', 'animate', 'exit', 'whileHover', 'whileTap'];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Remove import
    content = content.replace(/import\s+\{.*motion.*\}\s+from\s+["']framer-motion["'];?\n/g, '');
    
    // Remove motion. tags
    content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
    content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');
    
    // Remove props (assuming {{...}} format without nested {{}})
    propsToRemove.forEach(prop => {
        const regex = new RegExp(`\\s+${prop}=\\{\\{[^}]+\\}\\}`, 'g');
        content = content.replace(regex, '');
    });
    
    fs.writeFileSync(filePath, content);
});
console.log('Removed framer-motion from components');
