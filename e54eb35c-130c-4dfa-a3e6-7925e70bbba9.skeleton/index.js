
/*
    여러 주사위의 경우의 수를 확인해보자.
    주사위를 돌리면서 계속 경우의 수가 나오도록 한다.
    button은 6가지이다.
        - up : 주사위 갯수를 늘린다. 이 경우 그래프와 주사위눈은 모두 초기화된다. 갯수는 10개까지이다.
        - down : 주사위 갯수를 줄인다. 음수는 될 수 없다.
*/

const imgContainer = document.querySelector('#img-container');
const controlContainer = document.querySelector('#control-container');
const res = document.querySelector('#res');

/** @type {{div:HTMLElement; num:number}[]}*/
const dices = [];

/**
 * @type {{
 *    max:number;
 *    bars:{div:HTMLElement; num:number}[]
 * }}
 */
const graph = {
    max: 0,
    bars: []
};

const update = () => {
    res.innerHTML = '';
    graph.bars = [];
    graph.max = 0;
    for (let i = dices.length; i <= dices.length * 6; i++) {
        // 색은 랜덤하게
        // bars 에는 key가 i, value는 {div, num} 이 있도록 한다.
        // div는 태그, num은 나온 횟수이다.
        let div = document.createElement('div');
        div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        let bar = {
            div,
            num: i
        };
        res.appendChild(div);
        graph.bars.push(bar);
    }
};

// dice를 추가한다.
const addDice = () => {
    const div = document.createElement('div');
    const obj = {
        div,
        num: 0,
    };
    // imgContainer에 추가하는 코드
    // dices에 추가하는 코드
    imgContainer.appendChild(div);
    dices.push(obj);

    update();
};

// dice를 제거한다.
const deleteDice = () => {
    // dices에서 제거하는 코드
    // imgContainer에서 제거하는 코드
    dices.pop().div.remove();
};

const render = () => {
    if (dices.length) {
        let total = 0;
        // dices를 순회하며 dice에 랜덤한 수를 입력하고, 그것에 따라서 div의 backgroundImagePosition을 바꾼다.
        let add = 0;
        for (let i = 0; i < dices.length; i++) {;
            dices[i].num = Math.floor(Math.random() * 6);
            add += dices[i].num;
            dices[i].div.style.backgroundPositionX = `${20 * dices[i].num}%`;
        }
        // dice를 나온 숫자에따라 정렬한다.

        // 정렬한 div로 다시 appendChild 한다.

        // dice 눈의 숫자를 더한 값을 bars의 total key와 같은 값의 객체를 찾아 num을 1 증가한다.

        // 만약 방금 증가한 값이 graph.max보다 크면 graph.max를 업데이트한다.

        // graph.bars 를 순회하며 높이를 업데이트 한다.

        // 높이는 (100% - 50px) * num / max + 50px 이다.
        graph.bars[add].num++;
        graph.max = Math.max(graph.max, graph.bars[add].num);
        
        for (let i = 0; i < graph.bars.length; i++) {
            graph.bars[i]
        }
    }
    requestAnimationFrame(render);
};

controlContainer.onclick = e => {
    const tar = e.target;
    if (tar.nodeName == 'BUTTON') {
        // dataset.id에 따라 다르게 동작하는 버튼
        if (tar.dataset.id === 'up') {
            if (dices.length < 10) addDice();
        }
        else {
            if (dices.length > 0) deleteDice();
        }
    }
};

render();