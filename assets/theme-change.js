$('body').attr('class', 'light-mode');
var isDarkMode = false;

function switchMode(value) {
    isDarkMode = value.checked
    changeTheme()
}

function changeTheme() {
    if (isDarkMode){
        $('body').attr('class', 'dark-mode');
        console.log("Theme set to dark");
    }else{
        $('body').attr('class', 'light-mode');
        console.log("Theme set to light");
    }
}