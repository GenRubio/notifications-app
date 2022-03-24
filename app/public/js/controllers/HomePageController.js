export const HomePageController = {
    buttonAddEl:{
        selector: "#create-notification-button"
    },
    modalAddEl:{
        selector: "#create-notification-modal"
    },
    init() {
        this.setListeners();
    },
    setListeners() {
        $(this.buttonAddEl.selector).on('click', () => {
            this.openModalHandle();
        })
    },
    openModalHandle(){
        $(this.modalAddEl.selector).modal('show');
    }
};
