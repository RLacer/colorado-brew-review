const newFormHandler = async (event) => {
    event.preventDefault();
  
    const brewery_name = document.querySelector('#brewery-name').value.trim();
    const description = document.querySelector('#brewery-city').value.trim();
    const description = document.querySelector('#review-desc').value.trim();
  
    if (brewery_name &&  description && review_desc) {
      const response = await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({ brewery_name, city, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/review/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete review');
      }
    }
  };
  
  document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.review-list')
    .addEventListener('click', delButtonHandler);