const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');

const list = document.querySelector('.list');

const generateTamplate = todo => {
    const html = `    <li class="liste">
<span>${todo}</span>
<img class="delete" src="deleteicon.png" >
</li>
`;
    list.innerHTML += html;
}



addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.trim();
    if (todo.length > 0) {
        generateTamplate(todo)
        addForm.reset();
    }
})

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})
const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
}
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})