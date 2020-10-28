new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("Givian宝宝")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("这是专门为你准备的，希望你会喜欢")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();