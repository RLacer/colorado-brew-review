const newFormHandler = async (event) => {
    event.preventDefault();
  
    const brewery_name = document.querySelector('#brew-name').value.trim();
   
    const description = document.querySelector('#brew-desc').value.trim();
  
    if (brewery_name &&  description) {
      const response = await fetch(`/api/brew`, {
        method: 'POST',
        body: JSON.stringify({ brewery_name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.review-list')
    .addEventListener('click', delButtonHandler);