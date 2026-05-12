const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\GHM\\.gemini\\antigravity\\brain\\0cc4b300-0aa0-4d35-8197-06b2d38937fb\\.system_generated\\logs\\overview.txt';

try {
    const data = fs.readFileSync(logPath, 'utf8');
    const lines = data.split('\n');
    const turn157Line = lines[59]; // 0-indexed, so line 60 is 59
    const turn157 = JSON.parse(turn157Line);
    
    let chunks = turn157.tool_calls[0].args.ReplacementChunks;
    if (typeof chunks === 'string') {
        chunks = JSON.parse(chunks);
    }
    
    chunks.forEach((chunk, index) => {
        const content = chunk.ReplacementContent;
        fs.writeFileSync(`recovered_${index}.txt`, content);
        console.log(`Recovered chunk ${index} to recovered_${index}.txt`);
    });
} catch (err) {
    console.error(err);
}
