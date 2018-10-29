const addTask = {
    init(onAdd) {        //init method for initializing the component
        const form = document.getElementByID('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const task = {
                task: elements.task.value,
                duedate: elements.duedate.value
            };
            onAdd(task);
        
            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addTask;