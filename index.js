let timer = null;
let scrollFunc = {
    //滚动到顶部
    gotoTop() {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            var oTop =
                document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                scrollTo(0, oTop - 50);
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    },

    //滚动到底部
    gotoBottom() {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            var height;
            if (document.documentElement) {
                height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            } else {
                height = document.body.scrollHeight - document.body.clientHeight;
            }
            var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollPos < height) {
                scrollTo(0, scrollPos + 50);
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    }
}

export default scrollFunc;
