import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`
});

export const todosAPI = {

    getAPITodo() {
    return instance.get(`todos`)
            .then(response => {
                return response.data;
            })
    },

    postAPITodo( userId, id, title, completed) {
        return instance.post(`todos/${id}` , {userId, id, title, completed})
    },

    deleteAPITodo(id) {
       return instance.delete(`todos/${id}`)
        .then(response => {
            return response.data;
        })
    }
}

