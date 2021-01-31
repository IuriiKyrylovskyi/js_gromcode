const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: true },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: false },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// =========== add new task ====================

const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');

const addNewTask = () => {
  const newTaskText = inputElem.value;
  if (!newTaskText) {
    return;
  }
  listElem.innerHTML = '';
  const newTaskObj = { text: newTaskText, done: false };
  tasks.push(newTaskObj);
  renderTasks(tasks);
  inputElem.value = '';
  console.log(tasks);
};

createBtnElem.addEventListener('click', addNewTask);

// =============================================================


// const isChecked = event => {
//   const isCheckbox = event.target.classList.contains('list__item-checkbox');
//   if (isCheckbox.checked) {
//     isCheckbox.closest('.list__item').classList.add('list__item_done');
//   }
//   isCheckbox.closest('.list__item').classList.remove('list__item_done');
// };

// const onChangeStatus = () => {
//   const chbEl = Array.from(chboxEls).map(
//     el => {
//       if (!el.checked) {
//         el.closest('.list__item').classList.add('list__item_done');
//       }
//       el.closest('.list__item').classList.remove('list__item_done');
//     },
//     console.log(chbEl, chbEl.closest('.list__item')), // .classList.contains('list__item_done')),
//     // console.log(el.checked, el.closest('.list__item')), // .classList.contains('list__item_done')),
//   );
// };

// listElem.addEventlistener('click', isCheckedBox);