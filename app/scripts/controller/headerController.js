function HeaderController() {
    this.searchValue = "";
}

HeaderController.prototype = {
    search: function(evt) {
        if(!this.searchValue) {
            return;
        }
        var keycode = window.event ? evt.keyCode : evt.which;
        if(keycode == 13) {
            console.log(this.searchValue);
        }
    }
};