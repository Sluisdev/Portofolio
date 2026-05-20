const overviewBtn = document.querySelectorAll('.overview-btn')
const closeBtn = document.querySelectorAll('.close-btn')

for (let o of overviewBtn) {
    o.addEventListener('click', (e) => {
        e.preventDefault()
        const project = o.getAttribute('data-project')
        const projectOverview = document.querySelector(`#${project}-overview`)
        projectOverview.style.display = 'flex'
        projectOverview.scrollIntoView({behavior: "smooth"})
    })
}

for (let c of closeBtn) {
    c.addEventListener('click', (e) => {
        e.preventDefault()
        const projectContainer = document.querySelector('.projects-container')
        const project = c.getAttribute('data-project')
        const projectOverview = document.querySelector(`#${project}-overview`)
        projectOverview.style.display = 'none'
        projectContainer.firstElementChild.scrollIntoView({behavior: "smooth"})
        
    })
}



