import { axiosClient } from './axiosClient';

const ProductAPI = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/products/${id}`
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/products`
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/products/${id}`
        return axiosClient.delete(url);
    },
    update(id) {
        const url = `/products/${id.id}`
        return axiosClient.put(url, id);
    }

}
export default ProductAPI;