document.getElementById('chapterselect').addEventListener('change', function() {
    if (this.value) {
        window.location.href = this.value;
    }
});