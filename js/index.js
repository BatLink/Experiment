let gClicks = 0;
// money erned
let gScore = 0;
let gPlayingDecks;
let gIsShowing = false;
let gSurveyImgIdx = 0;

const switchtingOrder = [];

// this is the limit to the total length - meaning that in the real thing it will be set to 100. for testing I can use 5
const LIMIT = 4;

function init() {
    // randomize survey order
    surveyOrder = (Math.random() > 0.5) ? surveyOrder1 : surveyOrder2;

    gPlayingDecks = goodDecks.slice(0, 2).concat(badDecks.slice(0, 2));
}

// images
const surveyImgUrls = ['https://i.ibb.co/SrQRRzJ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/mXYgV8m/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/tB6BxJ0/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/JHxMWtx/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/PWHN7h2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/2jsPWHP/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg9', 'https://i.ibb.co/C0C2hCQ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/w46ZQyK/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/DWpPQjy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/HGvKqjS/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/ftFg2G1/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/N7NtCfw/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/CsKxK6V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/jLTdhYk/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/18dqHL2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/wY2k87J/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/8r5cJrH/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/0C0Dkvy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/L8mBhQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/dmfxTNq/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/991BLKY/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/0sCLCTv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/WGt3ZWC/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/j8DwJ3V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/YhSQXhf/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/hsP7Zrh/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/0hkfnNB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/G322WQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/Qnz3XT6/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/f1xJ2Sv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/TP9tzwD/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg', 'https://i.ibb.co/0GKVgMp/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',];

const surveyRes = [];


// final_order_1:
const surveyOrder1 = [[12, 14], [28, 29], [22, 23], [8, 11], [0, 1], [14, 15], [16, 17], [17, 19], [16, 18], [25, 27], [30, 31], [20, 22], [13, 14], [12, 13], [9, 10], [21, 23], [0, 3], [20, 21], [8, 9], [5, 7], [13, 15], [9, 11], [4, 7], [26, 27], [0, 2], [1, 3], [12, 15], [2, 3], [24, 25], [10, 11], [4, 5], [29, 30], [20, 23], [29, 31], [28, 30], [17, 18], [6, 7], [16, 19], [28, 31], [18, 19], [21, 22], [5, 6], [4, 6], [24, 26], [24, 27], [8, 10], [1, 2], [25, 26]];

// final_order_2:
const surveyOrder2 = [[22, 23], [1, 3], [13, 14], [13, 15], [17, 18], [25, 26], [2, 3], [16, 17], [21, 23], [8, 10], [9, 11], [6, 7], [0, 3], [20, 23], [5, 6], [20, 21], [21, 22], [18, 19], [14, 15], [29, 30], [0, 2], [16, 19], [24, 26], [24, 27], [29, 31], [5, 7], [8, 11], [17, 19], [9, 10], [28, 30], [4, 7], [24, 25], [20, 22], [12, 15], [12, 14], [25, 27], [4, 5], [16, 18], [28, 29], [12, 13], [8, 9], [4, 6], [1, 2], [28, 31], [30, 31], [0, 1], [26, 27], [10, 11]];

// const surveyOrder3 = [[22, 23], [1, 3]];


let surveyOrder;

const imgs = [
    {
        imgUrl: 'https://i.ibb.co/SrQRRzJ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/mXYgV8m/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/tB6BxJ0/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/JHxMWtx/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/PWHN7h2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/2jsPWHP/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg9',    },
    {
        imgUrl: 'https://i.ibb.co/C0C2hCQ/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/w46ZQyK/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/DWpPQjy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/HGvKqjS/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/ftFg2G1/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/N7NtCfw/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/CsKxK6V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/jLTdhYk/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/18dqHL2/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/wY2k87J/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/8r5cJrH/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/0C0Dkvy/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/L8mBhQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/dmfxTNq/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/991BLKY/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/0sCLCTv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/WGt3ZWC/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/j8DwJ3V/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/YhSQXhf/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/hsP7Zrh/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/0hkfnNB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/G322WQB/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/Qnz3XT6/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/f1xJ2Sv/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/TP9tzwD/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
    },
    {
        imgUrl: 'https://i.ibb.co/0GKVgMp/Obtained-from-Ra-FD-nl-by-Gijs-Bijlstra-Gijs-Radboud-University-Nijmegen-on-2018-04-13-09-59-56-RID.jpg',
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
    renderSurveyImgs();
}

function surveyClicked(imgIdx) {
    surveyRes[gSurveyImgIdx] = imgIdx;
    if (gSurveyImgIdx === surveyOrder.length - 1) return endSurvey();
    gSurveyImgIdx++;
    renderSurveyImgs();
}

function endSurvey() {
    // show saved data
    console.log(imgs, 'imgs');
    console.log(switchtingOrder, 'switchtingOrder');
    console.log('surveyOrder', surveyOrder);
    console.log('surveyRes', surveyRes);
    alert('Thanks for participating');
    showEndMessage();
}

function showEndMessage() {
    document.querySelector('.survey-container').style.visibility = 'hidden';
    document.querySelector('.end-message-container').style.visibility = 'visible';
}

function renderSurveyImgs() {
    const imgIdxs = surveyOrder1[gSurveyImgIdx];
    let strHtml = '';
    imgIdxs.forEach(imgIdx => {
        const imgUrl = surveyImgUrls[imgIdx];
        strHtml += `<img class="survey-img" src=${imgUrl} onclick=surveyClicked(${imgIdx}) />`;
    });
    const elImgContainer = document.querySelector('.imgs-container');
    elImgContainer.innerHTML = strHtml;
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
    }, 1500);
    // to long...
    setTimeout(() => {
        elImg.src = null;
        gIsShowing = false;
    }, 3000);
}

function checkSwap() {
    if (gClicks === 2) {
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
    elTxt.innerText = ` based on your choices you earned  ${gScore.toFixed(1)} cents. 
    In the next task you will make a series of selections between two faces. You will need to select the face with the emotion that is more positive (more kind and pleasant). 
    One of the rounds will be selected at random and you will receive a bonus payoff based on your choice on that round.`;


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
