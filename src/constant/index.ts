export const api = 'http://localhost:2020'
export const token = () => `Bearer ${localStorage.getItem('token')}`
