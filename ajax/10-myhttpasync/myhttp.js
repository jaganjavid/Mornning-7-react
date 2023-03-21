class MyHttp {

    // Make an HTTP GET Request

    async get(url) {
        const response = await fetch(url);
        const resDate = await response.json();
        return resDate;
    }

    // Create a User
    async post(url, data){
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const resDate = await response.json();

        return resDate;
    }

      // Update a User
      async put(url, data){
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const resDate = await response.json();
        
        return resDate;
    }

      // delete a User
      async delete(url){
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });

        const resDate = await "Resource Deleted";
        
        return resDate;
    }
}

