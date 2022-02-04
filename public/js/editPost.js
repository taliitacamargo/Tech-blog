const editBtnHandler = async (event) => {
    event.preventDefault()
    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();

    if (name && description) {
        console.log(window.location.pathname.split("/").pop())
        const response = await fetch(`/api/posts/${window.location.pathname.split("/").pop()}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create project');
        }
    }
};

document
    .querySelector('.save')
    .addEventListener('submit', editBtnHandler);
