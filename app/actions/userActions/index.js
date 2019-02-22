import * as types from '../../constants/userConst/index';

export function addItem(data) {
    return {
        type: types.ADDITEM,
        payload: data
    };
}

export function deleteItem(data) {
    return {
        type: types.DELETEITEM,
        payload: data
    };
}

export function editItem(data, key) {
    return {
        type: types.EDITITEM,
        payload: data,
        key_transaction: key
    };
}

export function openModal() {
    return {
        type: types.OPENMODAL
    };
}

export function hideModal(data) {
    return {
        type: types.HIDEMODAL,
        payload: data
    };
}