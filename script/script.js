(() => {
    // 리스트 버튼 좌우 스크롤
    const vectorR = document.querySelector('.vector-r');
    const vectorL = document.querySelector('.vector-l');
    const goodHeart = document.querySelector('.good');
    let count = 0;

    goodHeart.addEventListener('click', function(e) {
        e.stopPropagation();
    })

    vectorL.onclick = function() {
        if (count < 0){
            count += 207;
            document.querySelector('.list-scroll').style.transform = `translateX(${count}px)`;
        }
    }
    vectorR.onclick = function() {
        if (count >= -400) {
            count -= 207;
            document.querySelector('.list-scroll').style.transform = `translateX(${count}px)`;
        }
    }
    

    //하트창
    const good = document.querySelector('.good');
    let goodBtn = 0;
    good.onclick = function() {
        if (goodBtn == 0) {
            good.src = `image/하트a.png`;
            goodBtn = 1;
        } else {
            good.src = `image/하트b.png`;
            goodBtn = 0;
        }
    }

    // 포트폴리오 새창 열기
    const folioOnclick = document.querySelector('.folio-container');
    const bodyPush = document.querySelector('.new-tab-container');
    let newTab = `
    <div class="onclick-new">
        <img src="image/hover.png" alt="" class="new-hover">
        <div class="new-main-container">
            <h1 class="new-title">
                THE BLUE - Color Project
            </h1>
            <div class="new-info">2022.01.16  |  일러스트레이션</div>
            <div class="new-content-container">
                <div class="new-main-img"></div>
                <div class="new-img-container">
                    <div class="new-sub-img aa"></div>
                    <div class="new-sub-img bb"></div>
                    <div class="new-sub-img cc"></div>
                    <div class="new-sub-img dd"></div>
                </div>
            </div>
        </div>
    </div>


    <div class="circle aaa"></div>
    <div class="circle bbb">
        <img src="image/new plus.png" alt="">
    </div>
    <div class="circle ccc">
        <img src="image/뉴하트.png" alt="">
    </div>
    <div class="circle ddd">
        <img src="image/컬렉션.png" alt="">
    </div>
    <div class="circle eee">
        <img src="image/공유하기.png" alt="">
    </div>
    `;

    folioOnclick.onclick = ()=> {
        bodyPush.innerHTML = newTab;
        folioClose.style.display = 'block';

    }

    // 포트폴리오 새창 닫기
    const folioClose = document.querySelector('.new-bg');
    folioClose.onclick = () => {
        bodyPush.innerHTML = `<div></div>`;
        folioClose.style.display = 'none';
    }
    

})();
