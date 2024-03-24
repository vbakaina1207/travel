document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');
  const links = document.querySelectorAll('.menu li a');


  // if (window.innerWidth < 902) {
    if (menuToggle) {
      
      menuToggle.addEventListener('change', function () {
        console.log('Toggle changed');
        menu.classList.remove('flex');
        if (this.checked) {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      });

  
      // links.forEach((link) => {
      //   link.addEventListener("click", function (event) {
      //     console.log('Link clicked', link);
      //     event.preventDefault(); 
      //     menuToggle.checked = false;
      //     menu.style.display = 'none';        
      //   });
      // });
    }
  // }
  // if(window.innerWidth > 901) 
  // {
  //     // menu.style.display = menuToggle.checked ? 'block' : 'flex';
  //       // } else {
  //   if (menu.style.display === 'none') menu.style.display = 'flex';
  //     // menu.classList.add('flex');
  // }
});


  
