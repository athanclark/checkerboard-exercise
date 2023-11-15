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

loadKissFm();


function generateRandomColor() {
    let sample = Math.floor(Math.random() * 256 * 256 * 256).toString(16);
    sample = '0'.repeat(6 - sample.length) + sample; // left-pad 0 characters
    return `#${sample}`;
}


function loadKissFm() {
    const loadScript = function() {
        if(!window.rel) {
            const s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.id = "radio-de-embedded";
            s.src = "https://www.radio.net/inc/microsite/js/full.js";
            document.getElementsByTagName("head")[0].appendChild(s);
            window.rel = true;
        }
    };

    const applet = document.createElement('div');
    applet.className = 'ng-app-embedded';
    const embed = document.createElement('div');
    embed.setAttribute('ui-view', '');
    embed.className = 'microsite embedded-radio-player';
    embed.dataset.playerwidth = '340px';
    embed.dataset.playertype = 'web_embedded';
    embed.dataset.playstation = 'kiss';
    embed.dataset.autoplay = 'false';
    embed.dataset.apikey = 'df04ff67dd3339a6fc19c9b8be164d5b5245ae93';

    applet.appendChild(embed);
    document.body.appendChild(applet);
    loadScript();
}
