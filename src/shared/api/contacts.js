import { instance } from "./auth"

export const fetchGetAllContacts = async () => {
    const { data } = await instance.get('/contacts');
    return data;
}

export const fetchAddContact = async (data) => {
    const { data: result } = await instance.post('/contacts', data);
    return result;
}

export const fetchDeleteContact = async (id) => {
    const { data } = await instance.delete(`/contacts/${id}`);
    return data;
}