const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';
container.style.background = 'linear-gradient(135deg, #2fd7e8, #e07a8c)';

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const block = document.createElement('div');
        block.style.width = '12.5%';
        block.style.height = '12.5%';
        if ((i % 2) ^ (j % 2) === 0) {
            const start = `rgba(46.7, 146.9, 231.5, ${((i + j) / 14)})`;
            const stop = `rgba(216.0, 91.3, 166.5, ${1 - ((i + j) / 14)})`;
            block.style.background =
                `linear-gradient(135deg, ${start}, ${stop})`;
        }
        container.appendChild(block);
    }
}

document.body.appendChild(container);
