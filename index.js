function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const newElement = document.createElement('div');
        newElement.innerHTML = id;
        document.body.appendChild(newElement);
      })
      .catch(error => {
        const newElement = document.createElement('div');
        newElement.innerHTML = error.message;
        document.body.appendChild(newElement);
      });
  }
  