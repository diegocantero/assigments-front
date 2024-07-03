import { API_URL } from "../config/config";

export async function ListDB() {
    const response = await fetch(API_URL + '/users');
    if (!response.ok) {
        throw new Error('Error al obtener los datos');
    }
    return response.json();
}

export async function AddDB(item) {
    const response = await fetch(API_URL + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    if (!response.ok) {
        throw new Error('Error al añadir el elemento');
    }
    return response.json();
}

export async function DeleteDB(itemId) {
    const response = await fetch(API_URL + `/users/${itemId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el elemento');
    }
    return response.json();
}