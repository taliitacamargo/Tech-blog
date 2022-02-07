const AddComment = async (event) => {
    event.preventDefault()
    const description = document.querySelector('#project-desc').value.trim();

    if (description) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'POST',
            body: JSON.stringify({ description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create comment');
        }
    }
};

document
    .querySelector('.save')
    .addEventListener('submit', AddComment);