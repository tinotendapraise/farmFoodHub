// javascript fot intteractive features
document.addEventListener('DOMContentLoaded',function(){
    //mobile navigation toggle
    const mobileNavToggle=document.createElement('button');
    mobileNavToggle.className='mobile-nav-toggle';
    mobileNavToggle.innerHTML= '';
    mobileNavToggle.style.display='none';

    const header=document.querySelector('header');
    const nav=document.querySelector('nav');

    header.insertBefore(mobileNavToggle, nav);

    //filter functionality
    const filterSelects =document.querySelectorAll('.filter-select');
    filterSelects.forEach(select =>{
        select.addEventListener('change', function(){
            console.log('filter changed:', this.value);
        });
    });
    //Donation buttons functionality
    const donateButtons = document.querySelectorAll('.btn-donate');
    donateButtons=forEach(button =>{
        button.addEventListener('click', function(e){
            e.preventDefault();
            alert('Thank you for your interest in donating! This feature would connect you with the donation process.');
        });
    });
    //Buy button functionality
    const buyButtons = document.querySelector('.btn-buy');
    buyButtons.forEach(button => {
         button.addEventListener('click',function(e) {
          e.preventDefault();
          alert('Thank you for your interest in purchasing discounted produce! This feature would add the item to your cart.');
        });
});