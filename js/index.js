let gClicks = 0;
// money erned
let gScore = 0;
let gPlayingDecks;
let gIsShowing = false;
let gImgIdx = 0;

const switchtingOrder = [];

// this is the limit to the total length - meaning that in the real thing it will be set to 100. for testing I can use 5
const LIMIT = 100;

function init() {
    gPlayingDecks = goodDecks.slice(0, 2).concat(badDecks.slice(0, 2));
}

// images scores
const imgs = [
    {
        imgUrl: 'https://i.ibb.co/SrQRRzJ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/mXYgV8m/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/tB6BxJ0/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/JHxMWtx/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/PWHN7h2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/2jsPWHP/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg9',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/C0C2hCQ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/w46ZQyK/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/DWpPQjy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/HGvKqjS/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/ftFg2G1/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/N7NtCfw/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/CsKxK6V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/jLTdhYk/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/18dqHL2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/wY2k87J/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/8r5cJrH/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/0C0Dkvy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/L8mBhQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/dmfxTNq/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/991BLKY/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/0sCLCTv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/WGt3ZWC/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/j8DwJ3V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/YhSQXhf/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/hsP7Zrh/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/0hkfnNB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/G322WQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/Qnz3XT6/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/f1xJ2Sv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/TP9tzwD/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    },
    {
        imgUrl: 'https://i.ibb.co/0GKVgMp/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 0
    }

];

function startEx() {
    document.querySelector('.instructions').hidden = true;
    if (gClicks >= LIMIT) startSurvey();
    else {
        document.querySelector('.decks-container').style.visibility = 'visible';
        renderDecks(gPlayingDecks);
    };
}

function startSurvey() {
    document.querySelector('.decks-container').style.display = 'none';
    document.querySelector('.survey-container').style.visibility = 'visible';
    renderSurveyImg();
}

function surveyClicked(answer) {
    if (gImgIdx === imgs.length - 1) endSurvey();
    imgs[gImgIdx].score = answer;
    gImgIdx++;
    const elInputs = document.querySelectorAll('[type="radio"]');
    elInputs.forEach(elInput => elInput.checked = false);
    renderSurveyImg();
}

function endSurvey() {
    // show saved data
    console.log(imgs, 'imgs');
    console.log(switchtingOrder, 'switchtingOrder');
    console.log('gScore', gScore);
    alert('Thanks for participating');
}

function renderSurveyImg() {
    const elImg = document.querySelector('.survey-img');
    elImg.src = imgs[gImgIdx].imgUrl;
}

function swapDecks() {
    gPlayingDecks = goodDecks.slice(2, 4).concat(badDecks.slice(2, 4));
}


function renderDecks(decks) {
    let strHtml = ``;
    decks.forEach(deck => {
        strHtml += `
        <div class="deck-container" onclick="deckClicked('${deck.id}')">
        <img class="deck-img letter-${deck.letter}" />
        <div class="deck">${deck.letter}</div>
        </div>
        `;
    });
    document.querySelector('.decks-container').innerHTML = strHtml;
}

function deckClicked(deckId) {
    // if we want to test faster without waiting 5 seconds you can disable that line below with //
    if (gIsShowing) return;
    gIsShowing = true;
    const deck = gPlayingDecks.find(deck => deck.id === deckId);
    gClicks++;
    deck.clicks++;
    const imgIdx = deck.pattern[deck.pattern.length - 1];
    const deckScore = deck.score;
    const imgScore = deck.imgs[imgIdx].score;
    gScore += imgScore;
    gScore += deckScore;
    switchtingOrder.push(deck.letter);
    renderImg(deck);
    checkSwap();
}

function renderImg(deck) {
    const randomImg = deck.imgs[deck.pattern.pop()].imgUrl;
    const elImg = document.querySelector(`.letter-${deck.letter}`);
    elImg.src = deck.defaultImgUrl;
    setTimeout(() => {
        elImg.src = randomImg;
    }, 2500); 
    // to long...
    setTimeout(() => {
        elImg.src = null;
        gIsShowing = false;
    }, 5000);
}

function checkSwap() {
    if (gClicks === 50) {
        swapDecks();
        showInstructions();

    } else if (gClicks === LIMIT) {
        endFirstPart();
    }
}

function endFirstPart() {
    showFinalInstructions();
    document.querySelector('.decks-container').style.visibility = 'hidden';

}

function showFinalInstructions() {
    document.querySelector('.decks-container').style.visibility = 'hidden';
    const elTxtContainer = document.querySelector('.instructions');
    const elTxt = document.querySelector('.txt');
    elTxt.innerText = ` based on your choices you earned  ${gScore} cents.
    Pleas rate the following emotions from 1 (negative) to 5(positive)`;


    elTxtContainer.hidden = false;
}

function showInstructions() {
    const elTxtContainer = document.querySelector('.instructions');
    const elTxt = document.querySelector('.txt');
    elTxt.innerText = ` Now the agents change. Please make your choice for these new agents. The rules are the same as in the previous task. 
    You will get feedback for both tasks when you complete this second part.`;

    document.querySelector('.decks-container').style.visibility = 'hidden';
    elTxtContainer.hidden = false;
}

const goodDecks = [
    {
        id: 'd101',
        letter: 'A',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/SrQRRzJ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 3.04,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/mXYgV8m/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.73
            },
            {
                imgUrl: 'https://i.ibb.co/tB6BxJ0/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.04
            },
            {
                imgUrl: 'https://i.ibb.co/JHxMWtx/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.29
            },
        ],
        pattern: [1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 0, 2, 0, 0, 1, 1, 2, 0, 1, 2, 2, 0, 2, 0, 0, 0, 1, 0, 0, 2, 2, 1, 0, 1, 2, 0, 0, 0, 0, 2, 1, 2, 1, 1, 2, 1, 1, 1, 0]

    },
    {
        id: 'd102',
        letter: 'B',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/PWHN7h2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 3.04,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/2jsPWHP/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.33
            },
            {
                imgUrl: 'https://i.ibb.co/C0C2hCQ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.17
            },
            {
                imgUrl: 'https://i.ibb.co/w46ZQyK/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.09
            },
        ],
        pattern: [2, 0, 2, 1, 0, 2, 0, 2, 2, 2, 1, 0, 1, 0, 0, 1, 0, 2, 1, 1, 1, 0, 2, 0, 1, 1, 2, 0, 1, 1, 0, 1, 2, 0, 1, 0, 2, 1, 2, 1, 2, 2, 2, 0, 2, 2, 1, 1, 0, 0]

    },
    {
        id: 'd103',
        letter: 'A',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/DWpPQjy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 3.05,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/HGvKqjS/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.64
            },
            {
                imgUrl: 'https://i.ibb.co/ftFg2G1/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.13
            },
            {
                imgUrl: 'https://i.ibb.co/N7NtCfw/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.14
            }
        ],
        pattern: [1, 0, 0, 2, 1, 1, 0, 1, 1, 2, 0, 2, 1, 1, 2, 2, 2, 0, 0, 2, 0, 1, 1, 0, 2, 2, 0, 1, 0, 2, 1, 0, 1, 0, 0, 2, 0, 0, 2, 2, 0, 1, 0, 1, 2, 1, 2, 2, 1, 1]

    },
    {
        id: 'd104',
        letter: 'B',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/CsKxK6V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 3.50,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/jLTdhYk/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.67
            },
            {
                imgUrl: 'https://i.ibb.co/18dqHL2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.00
            },
            {
                imgUrl: 'https://i.ibb.co/wY2k87J/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.67
            }
        ],
        pattern: [2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 0, 2, 1, 1, 2, 2, 0, 1, 0, 1, 1, 0, 1, 1, 2, 2, 2, 1, 2, 0, 2, 2, 2, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 2, 1, 2, 1, 2, 1]

    },

];

const order = ['a', 'b', 'a', 'd', 'c'];

const badDecks = [
    {
        id: 'd105',
        letter: 'C',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/8r5cJrH/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 4.20,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/0C0Dkvy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.04
            },
            {
                imgUrl: 'https://i.ibb.co/L8mBhQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 1.84
            },
            {
                imgUrl: 'https://i.ibb.co/dmfxTNq/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.12
            },
        ],
        pattern: [0, 0, 1, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 1, 2, 0, 0, 2, 2, 1, 0, 2, 2, 2, 2, 1, 1, 1, 0, 1, 1, 0, 1, 1, 2, 2, 0, 1, 2, 2]

    },
    {
        id: 'd106',
        letter: 'D',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/991BLKY/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 4.26,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/0sCLCTv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.00
            },
            {
                imgUrl: 'https://i.ibb.co/WGt3ZWC/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.00
            },
            {
                imgUrl: 'https://i.ibb.co/j8DwJ3V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.52
            },
        ],
        pattern: [1, 0, 0, 0, 0, 2, 1, 1, 0, 2, 0, 1, 2, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 0, 1, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 0, 1, 1, 0, 2, 1, 2, 0, 0, 1, 1, 2, 0, 1, 2]

    },
    {
        id: 'd107',
        letter: 'C',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/YhSQXhf/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 4.17,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/hsP7Zrh/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 1.96
            },
            {
                imgUrl: 'https://i.ibb.co/0hkfnNB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 1.92
            },
            {
                imgUrl: 'https://i.ibb.co/G322WQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.70
            }
        ],
        pattern: [0, 0, 0, 2, 2, 0, 1, 2, 0, 0, 1, 1, 0, 0, 1, 0, 0, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1, 2, 0, 2, 2, 1, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 0, 1, 0, 2]

    },
    {
        id: 'd108',
        letter: 'D',
        clicks: 0,
        defaultImgUrl: 'https://i.ibb.co/Qnz3XT6/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
        score: 4.00,
        imgs: [
            {
                imgUrl: 'https://i.ibb.co/f1xJ2Sv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 1.92
            },
            {
                imgUrl: 'https://i.ibb.co/TP9tzwD/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.00
            },
            {
                imgUrl: 'https://i.ibb.co/0GKVgMp/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
                score: 2.29
            }
        ],
        pattern: [1, 1, 0, 0, 1, 2, 0, 1, 2, 2, 1, 0, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0, 0, 0, 0, 2, 1, 1, 2, 1, 0, 2, 2, 0, 0, 0, 2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 1, 1, 2, 0]

    },

];
