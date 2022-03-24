export const TableController = {
    eventsTableEl:{
        selector: "#eventsTable"
    },
    init() {
        this.setListeners();
    },
    setListeners() {
        $(this.eventsTableEl.selector).DataTable();
    }
};
