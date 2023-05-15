// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector('.nav-toggle');
const navlinks = document.querySelector('.links');

toggleBtn.addEventListener('click', function(){

    // if(navlinks.classList.contains('show-links')) {
    //     navlinks.classList.remove('show-links')
    // }else {
    //     navlinks.classList.add('show-links')
    // }
    navlinks.classList.toggle('show-links')
})