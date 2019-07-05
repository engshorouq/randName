const randPair = document.querySelector('#pair');
const randSingle = document.querySelector('#single');
const result = document.querySelector('#result');

const names = ['alaa-yasin', 'AlaaTaima', 'Amoodaa', 'asem1789', 'Asmaathabet', 'fadeomar', 'FadiAlamassi', 'fares98', 'hashemt', 'MaiUbeid', 'MohammadAlhalaq', 'Mohammed-Q96', 'mossa-Sammer', 'ranasobeid95', 'SajedaIsmail', 'yosefalnajjarofficial'];

const checkPair = (pairs, firstPair, secondPair) => pairs.some(pair => pair[0] === names[firstPair] || pair[0] === names[secondPair] || pair[1] === names[firstPair] || pair[1] === names[secondPair])


randPair.addEventListener('click', (e) => {
    const pairs = [];
    while (true) {
        const firstPair = Math.floor(Math.random() * 16);
        const secondPair = Math.floor(Math.random() * 16);
        if (firstPair !== secondPair && !checkPair(pairs, firstPair, secondPair)) {
            pairs.push([names[firstPair], names[secondPair]]);
        }
        if (pairs.length === 8) {
            break;
        }
    }
    result.textContent = '';
    pairs.forEach(pair => {
        const div = document.createElement('div');
        div.classList.add('random__result__pair');
        const firstPair = document.createElement('div');
        firstPair.classList.add('pair__name');
        firstPair.textContent = pair[0];
        div.appendChild(firstPair);
        const secondPair = document.createElement('div');
        secondPair.classList.add('pair__name');
        secondPair.textContent = pair[1];
        div.appendChild(secondPair);
        result.appendChild(div);
    })
});

randSingle.addEventListener('click', (e) => {
    const single = Math.floor(Math.random() * 16);
    result.textContent = '';
    const div = document.createElement('div');
    div.classList.add('random__result__pair');
    div.textContent = names[single];
    result.appendChild(div);
})