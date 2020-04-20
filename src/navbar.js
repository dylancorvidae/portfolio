/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBar() {
    var x = document.getElementById('myTopnav');
    if(x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

document.getElementById('myTopnav').addEventListener('click', navBar);
// From w3schools https://www.w3schools.com/howto/howto_js_topnav_responsive.asp