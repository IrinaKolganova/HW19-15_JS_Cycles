// ### Практическое задание 💎
// Создаём приложение «Планировщик задач».
// - В приложении должен быть input для ввода текста задачи и кнопка для её добавления в «Список задач». - ОК
// - Ниже должен быть «Список задач» и кнопка «Очистить список».
// - Когда задач нет, должно быть серое уведомление о том, что задачи отсутствуют, а кнопка «Очистить список» должна быть неактивна. - ОК
// - При добавлении задачи в список, каждая из них должна появляться в списке задач и напротив иметь неактивный чекбокс, а кнопка «Очистить список» должна быть активна.
// - Каждый чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена).
// - При клике на кнопку «Очистить список» все задачи должны удаляться.

const task = document.querySelector('#task');
const addBtn = document.querySelector('#addBtn');
const toDo = document.querySelector('#toDo');
const clearBtn = document.querySelector('#clearBtn');

function addTask(){
    let taskToDo = document.createElement("div");
    let taskText = task.value;
    taskToDo.textContent=taskText;
    toDo.append(taskToDo);
    let listCheckbox = document.createElement("input");
    listCheckbox.setAttribute("type", "checkbox");
    taskToDo.append(listCheckbox);

    if (toDo.innerHTML.length != ""){        
                clearBtn.removeAttribute("disabled");
                 // if (clearBtn.disabled) {
    //     clearBtn.disabled = false;
    // } // Альтернативный вариант активации кнопки "очистить список"
        }
        task.value = '';  //обнуление значения в инпуте
          }
    addBtn.addEventListener('click', addTask);


function clearTasks(){toDo.innerHTML="";}
clearBtn.addEventListener('click', clearTasks);
