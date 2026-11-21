const issue = document.getElementById('issue')
const place = document.getElementById('place')
const category = document.getElementById('category')
const addApplication = document.getElementById('addApplication')
const listApplication = document.getElementById('listApplication')
const issueMessage = document.getElementById('issueMessage')
const placeMessage = document.getElementById('placeMessage')
const categoryMessage = document.getElementById('categoryMessage')

const tickets = [
    { title: "Проектор не включается", room: "203", category: "Оборудование", done: false },
    { title: "Не закрывается окно", room: "105", category: "Аудитория", done: false },
    { title: "В коридоре не горит свет", room: "Коридор, 2-ой этаж", category: "Другое", done: true }
]

function renderApplication() {
    listApplication.innerHTML = ''
    tickets.forEach((el) => {
        const li = document.createElement('li')
        if (el.done === true) {
            el.done = "Да"
        } else if (el.done === false) {
            el.done = "Нет"
        }
        if (el.done === false) {
            const buttonMake = document.createElement('button')
            buttonMake.innerHTML = "Выполнить"
            buttonMake.type = "button"
            buttonMake.id = buttonMake
            li.textContent = `Причина: ${el.title}, Место: ${el.room}, Категория: ${el.category}, Выполнена: ${el.done}, ${buttonMake}`
        } else {
            li.textContent = `Причина: ${el.title}, Место: ${el.room}, Категория: ${el.category}, Выполнена: ${el.done}`
            listApplication.append(li)
        }
    })
}

addApplication.addEventListener('click', () => {

    if (issue.value.trim() === '') {
        issueMessage.innerHTML = "Введите причину"
    }
    if (place.value.trim() === '') {
        placeMessage.innerHTML = "Введите место"
    }
    if (category.value === "notSelected") {
        categoryMessage.innerHTML = "Выберите категорию"
    }
    if (issueMessage !== '' && placeMessage !== '' && category.value !== "notSelected") {
        const newApplication = {
            title: issue.value.trim(),
            room: place.value.trim(),
            category: category.value,
            done: false
        }
        tickets.push(newApplication)
    }
    renderApplication()
})

renderApplication()