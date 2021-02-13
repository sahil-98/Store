import {API} from "../../backend";

export const createCategory = (userId, token ,category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method : "POST",
        headers: {
            Accept : "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


//get all categories

export const getCategories = () => {
    return fetch(`${API}/categories` , {
        method: "GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

//Delete a Category /category/:categoryId/:userId

export const deleteCategory = (categoryId ,userId , token ) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept : "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then (response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


//Update a Category  "/category/:categoryId/:userId

export const updateCategory = (categoryId ,userId , token , category) => {
    console.log("GG")
    console.log(category)
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept : "application/json",
            Authorization: `Bearer ${token}`
        },
        body :category
    }).then (response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//GET a Single Category    /category/:categoryId
export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
        method :"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}


//product calls

export const createProduct = (userId , token , product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept : "application/json",
            Authorization: `Bearer ${token}`
        },
        body :product
    }).then (response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


export const getProducts = () => {
    return fetch(`${API}/products` , {
        method: "GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

//delete a product 
export const deleteProduct = (productId,userId , token ) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept : "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then (response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


//get a single product

export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method :"GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}


//update a product

export const updateProduct = (productId ,userId , token , product) => {
    console.log("Hey" , product , productId , userId);
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept : "application/json",
            Authorization: `Bearer ${token}`
        },
        body :product
    }).then (response => {
        return response.json()
    })
    .catch(err => console.log(err))
}



















