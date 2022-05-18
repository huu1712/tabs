const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');

const tabActive = document.querySelector('.tab-item.active')

const line = document.querySelector(' .tabs .line')

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        const pane = panes[index];

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        
        document.querySelector('.tab-item.active').classList.toggle('active');
        document.querySelector('.tab-pane.active').classList.toggle('active');
        this.classList.add('active')
        pane.classList.add('active');

    }
})