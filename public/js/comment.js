const AddComment = async (event) => {
    event.preventDefault()
    const description = document.querySelector('#project-desc').value.trim();

    if (description) {
        console.log(window.location.pathname.split("/").pop())
        const response = await fetch(`/api/comments/${window.location.pathname.split("/").pop()}`, {
            method: 'POST',
            body: JSON.stringify({ description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};



document
    .querySelector('.save')
    .addEventListener('submit', AddComment);