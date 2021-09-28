const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = 5; 

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }
        else {
            count.innerText = target;
        }
    }
    updateCount();
})

document.getElementById('computer-science-link').onclick = function () {
    location.href = "computerScience.html";
};
