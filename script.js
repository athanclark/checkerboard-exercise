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
        block.style.background = generateRandomColor();
        container.appendChild(block);
    }
}

document.body.appendChild(container);

setInterval(function() {
    const index = Math.floor(Math.random() * 64);
    document.body.children[0].children[index].style.background = generateRandomColor();
}, 2000 / 64);


function generateRandomColor() {
    let sample = Math.floor(Math.random() * 256 * 256 * 256).toString(16);
    sample = '0'.repeat(6 - sample.length) + sample; // left-pad 0 characters
    return `#${sample}`;
}
