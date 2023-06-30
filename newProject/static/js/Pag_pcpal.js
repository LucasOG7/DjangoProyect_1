document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.querySelector('.navbar-toggler');
    var mobileNavbar = document.querySelector('#mobileNavbar');

    navbarToggle.addEventListener('click', function () {
      if (mobileNavbar.classList.contains('show')) {
        mobileNavbar.classList.remove('show');
      } else {
        mobileNavbar.classList.add('show');
      }
    });
  });