class HoverManager {
    constructor() {
        this.cells = document.querySelectorAll('.cell');
        this.siblings = [];
        this.cells.forEach(cell => {
            cell.addEventListener('mouseenter', this.styleSiblings.bind(this))
        });
        this.cells.forEach(cell => {
            cell.addEventListener('mouseleave', this.resetStyleSiblings.bind(this))
        });
    }
    isSibling(target, targetRow, cellRow, cell) {
        const targetNumber = Number(target.dataset.number);
        const cellNumber = Number(cell.dataset.number);
        return cellNumber == targetNumber - 1 && cellRow == targetRow ||
               cellNumber == targetNumber + 1 && cellRow == targetRow ||
               cellNumber == targetNumber - 5 && cellRow == targetRow - 1 ||
               cellNumber == targetNumber - 4 && cellRow == targetRow - 1 ||
               cellNumber == targetNumber + 5 && cellRow == targetRow + 1 ||
               cellNumber == targetNumber + 4 && cellRow == targetRow + 1;
    }
    getSiblings(e) {
        const targetParentRow = Number(e.target.parentNode.dataset.row);
        this.siblings = Array.from(this.cells).filter(cell => {
            const cellParentRow = Number(cell.parentNode.dataset.row);
            // check only 1 row before and 1 row after the target row
            if (cellParentRow < targetParentRow - 1 || cellParentRow > targetParentRow + 1) return;

            if (this.isSibling(e.target, targetParentRow, cellParentRow, cell)) {
                return cell;
            }
        });
    }
    styleSiblings(e) {
        this.getSiblings(e);
        this.siblings.forEach(el => el.classList.add('cell_animated'))
    }
    resetStyleSiblings() {
        this.siblings.forEach(el => el.classList.remove('cell_animated'))
    }
}