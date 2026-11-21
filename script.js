const issue = document.getElementById('issue')
const place = document.getElementById('place')
const category = document.getElementById('category')
const addApplication = document.getElementById('addApplication')
const listApplication = document.getElementById('listApplication')
const issueMessage = document.getElementById('issueMessage')
const placeMessage = document.getElementById('placeMessage')
const categoryMessage = document.getElementById('categoryMessage')
const checkbox = document.getElementById('checkbox')

const tickets = [
    { title: "Проектор не включается", room: "203", category: "Оборудование", done: false },
    { title: "Не закрывается окно", room: "105", category: "Аудитория", done: false },
    { title: "В коридоре не горит свет", room: "Коридор, 2-ой этаж", category: "Другое", done: true }
]

function renderApplication() {
    listApplication.innerHTML = ''
    tickets.forEach((el) => {
        const li = document.createElement('li')
        const buttonDelet3 = document.createElement('button')
        buttonDelet3.innerHTML = 'Удалить'
        buttonDelet3.type = "button"
        buttonDelet3.id = "buttonDelet3"
        
        buttonDelet3.addEventListener('click', () => {
            const index = tickets.indexOf(el)
            if (index !== -1) {
                tickets.splice(index, 1)
                renderApplication()
            }
        })
        
        if (el.done === true) {
            el.done = "Да"
        } else if (el.done === false) {
            el.done = "Нет"
        }
        if (el.done === "Нет") {
            const buttonMake = document.createElement('button')
            buttonMake.innerHTML = "Выполнить"
            buttonMake.type = "button"
            buttonMake.id = "buttonMake"
            li.append(`Причина: ${el.title}, Место: ${el.room}, Категория: ${el.category}, Выполнена: ${el.done}`, buttonMake, buttonDelet3)
            buttonMake.addEventListener('click', () => {
                el.done = "Да"
                renderApplication()
            })
            listApplication.append(li)
        } else {
            li.append(`Причина: ${el.title}, Место: ${el.room}, Категория: ${el.category}, Выполнена: ${el.done}`, buttonDelet3)
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
    if (issueMessage.value !== '' && placeMessage.value !== '' && category.value !== "notSelected") {
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

checkbox.addEventListener('change', () => {
    renderApplication()
})

renderApplication()