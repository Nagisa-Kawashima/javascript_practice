'use strict'
{
    const targets = document.querySelector('img');
    function callback(entries, obs) {
        console.log(entries);

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
            
        });

        // if (entries[0].isIntersecting) {
        //     entries[0].target.classList.add('appear');
        // } else {
        //    entries[0].target.classList.remove('appear'); 
        // }

    } 
    // const options = {
    //     threshold: [0.2]
    // };
    // const observer = new IntersectionObserver(callback, options);
    // targets.forEach(target => {
    //     observer.observe(target);
    // });

    document.querySelector('button').addEventListener('click', () => {
        const colors = document.querySelectorAll('input');
        const selectedColors = [];

        colors.forEach(color => {
            if (color.checked === true) {
               selectedColors.push(color.value); 
            }
        });
        const li = document.createElement('li');
        li.textContent = selectedColors;
        document.querySelector('ul').appendChild(li);
    });

}

{
window.alert();
document.getElementById();
}