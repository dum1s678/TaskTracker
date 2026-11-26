const issue = document.getElementById('issue')
const place = document.getElementById('place')
const category = document.getElementById('category')
const addApplication = document.getElementById('addApplication')
const listApplication = document.getElementById('listApplication')
const issueMessage = document.getElementById('issueMessage')
const placeMessage = document.getElementById('placeMessage')
const categoryMessage = document.getElementById('categoryMessage')
const checkboxOpen = document.getElementById('checkboxOpen')
const checkboxClose = document.getElementById('checkboxClose')

const tickets = [
    { title: "Проектор не включается", room: "203", category: "Оборудование", done: false },
    { title: "Не закрывается окно", room: "105", category: "Аудитория", done: false },
    { title: "В коридоре не горит свет", room: "Коридор, 2-ой этаж", category: "Другое", done: true }
]

function renderApplication() {
    listApplication.innerHTML = ''
    issue.value = ''
    place.value = ''
    category.value = "notSelected"

    if (tickets.length === 0) {
        listApplication.append("Заявок пока нет")
    }

    const showOpen = checkboxOpen.checked
    const showClose = checkboxClose.checked

    tickets.forEach((el) => {

        if (!showOpen && !showClose) {
        } else if (showOpen && !showClose && el.done === true) {
            return
        } else if (!showOpen && showClose && el.done === false) {
            return
        }

        const li = document.createElement('li')
        const buttonDelet3 = document.createElement('button')
        const buttonMake = document.createElement('button')
        const wrapper = document.createElement('div')
        wrapper.className = "buttons"
        wrapper.append(buttonMake, buttonDelet3)
        li.className = "li"

        buttonMake.textContent = "Выполнить"
        buttonMake.type = "button"
        buttonMake.className = "buttonMake"

        buttonDelet3.textContent = 'Удалить'
        buttonDelet3.type = "button"
        buttonDelet3.className = "buttonDelet3"

        buttonDelet3.addEventListener('click', () => {
            const index = tickets.indexOf(el)
            if (index !== -1) {
                tickets.splice(index, 1)
                renderApplication()
            }
        })

        if (el.done === false) {
            buttonMake.addEventListener('click', () => {
                el.done = true
                renderApplication()
            })
            li.append(`Причина: ${el.title}, Место: ${el.room}, Категория: ${el.category}, Выполнена: Нет`, wrapper)
        } else {
            li.append(`Причина: ${el.title}, Место: ${el.room}, Категория: ${el.category}, Выполнена: Да`, wrapper)
        }

        listApplication.append(li)
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

checkboxOpen.addEventListener('change', () => {
    if (checkboxOpen.checked) {
        checkboxClose.checked = false
    }
    renderApplication()
})

checkboxClose.addEventListener('change', () => {
    if (checkboxOpen.checked) {
        checkboxClose.checked = false
    }
    renderApplication()
})

renderApplication()