const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Remove the exact import string
    content = content.replace('import { motion } from "framer-motion";\n', '');
    content = content.replace('import { motion } from "framer-motion";\r\n', '');
    
    fs.writeFileSync(filePath, content);
});
console.log('Removed imports');
