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

    //포트폴리오 새창
    const folioOnclick = document.querySelectorAll('.folio-container');
    const onclickNew = document.querySelector('.onclick-new');
    const circleNew = document.querySelectorAll('.circle');
    const bodyPush = document.querySelector('.new-tab-container');
  
    for (let a of folioOnclick) {
        a.onclick = ()=> {
            // bodyPush.innerHTML = newTab;
            folioClose.style.display = 'block';
            onclickNew.style.display = 'block';
            for(let b of circleNew) {
                b.style.display = 'block';
            }
            console.log(shareBtn);
    
        }
    }

    

    // 포트폴리오 새창 닫기
    const folioClose = document.querySelector('.new-bg');
    folioClose.onclick = () => {
        folioClose.style.display = 'none';
        onclickNew.style.display = 'none';
        for(let b of circleNew) {
            b.style.display = 'none';
        }
    }
    
    //공유하기 새창
    const shareBtn = document.querySelector('.eee');
    const shareCon = document.querySelector('.share-container');
    const shareBg = document.querySelector('.share-bg');
    shareBtn.onclick = () => {
        shareCon.style.display = 'block';
        shareBg.style.display = 'block';
        shareBg.style.zindex = '4999';
    }

    //공유하기 새창 닫기
    const shareExit = document.querySelector('.share-exit');
    shareExit.onclick = () => {
        shareCon.style.display = 'none';
        shareBg.style.display = 'none';
    }
    shareBg.onclick = () => {
        shareCon.style.display = 'none';
        shareBg.style.display = 'none';
    }
})();
