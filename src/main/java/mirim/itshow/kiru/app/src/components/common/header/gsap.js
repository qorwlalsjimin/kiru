const navItems = document.querySelectorAll('.nav li');

// $("nav").click(function() {
//     toggleClass(".active-color");
// });

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // 다른 모든 li 요소에서 active 클래스 제거
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

    
//클릭한 li 요소에 active 클래스 추가
item.classList.add('active');

    });
});