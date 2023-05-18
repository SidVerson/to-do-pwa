const input = document.querySelector('#input-box')
const list = document.querySelector('#list-container')
const btn = document.querySelector('button')
console.log(input)

btn.addEventListener('click', () => {
    if (input && input.value === '') {
        input.setAttribute('placeholder', 'You must enter some text')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        input.value = ''
    }
    saveData()
})

list.addEventListener(
    'click',
    (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked')
            saveData()
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove()
            saveData()
        }
    },
    false
)

function saveData() {
    localStorage.setItem('data', list.innerHTML)
}

function showTasks(){
    list.innerHTML = localStorage.getItem('data')
}
showTasks()