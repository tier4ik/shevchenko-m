class linksManager {
    constructor() {
        this.links = document.querySelectorAll('.cell__inner');
        this.addListeners();
    } 
    addListeners() {
        this.links.forEach(link => {
            link.addEventListener('click', this.clickHandler.bind(this));
        })
    }
    clickHandler(e) {
        if (e.ctrlKey) {
            e.preventDefault();
            this.showRepo(e);
        }
    }
    showRepo(evt) {
        window.open(evt.currentTarget.dataset.repohref, '_blank');
    }
}