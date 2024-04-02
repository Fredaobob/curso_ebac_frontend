$(document).ready(function() {
    // Carregar tarefas salvas ao inicializar a página
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        const listItem = $(`<li class="list-group-item" style="${task.completed ? 'text-decoration: line-through;' : ''}">${task.name}</li>`);
        $('#task-list').append(listItem);
    });
    

    $('#task-form').submit(function(event) {
        event.preventDefault();
        const taskName = $('#task-input').val().trim();
        if (taskName) {
            const listItem = $(`<li class="list-group-item">${taskName}</li>`);
            $('#task-list').append(listItem);
            $('#task-input').val('');
            // Adicionar a nova tarefa ao array e salvar no LocalStorage
            savedTasks.push({name: taskName, completed: false});
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
        }
    });

    $('#task-list').on('click', 'li', function() {
        const taskIndex = $('#task-list li').index(this);
        // Alternar o estado de conclusão da tarefa
        savedTasks[taskIndex].completed = !savedTasks[taskIndex].completed;
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
        // Aplicar ou remover o efeito de linha sobre o texto
        if ($(this).css('text-decoration').includes('line-through')) {
            $(this).css('text-decoration', 'none');
        } else {
            $(this).css('text-decoration', 'line-through');
        }
    });
});

$(document).ready(function() {
    // Código existente para carregar e manipular tarefas...

    $('#reset-tasks').click(function() {
        // Limpar as tarefas do LocalStorage
        localStorage.removeItem('tasks');
        // Limpar a lista de tarefas na interface do usuário
        $('#task-list').empty();
    });
});

