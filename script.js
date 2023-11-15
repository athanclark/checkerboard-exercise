const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const block = document.createElement('div');
        block.style.width = '12.5%';
        block.style.height = '12.5%';
        block.style.background = (i % 2) ^ (j % 2) === 0 ? 'red' : 'black';
        container.appendChild(block);
    }
}

document.body.appendChild(container);
