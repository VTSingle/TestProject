import * as types from '../../constants/userConst/index';

const userInfoState = {
    list: [],
    modal: false,
    selectCategory: {icon: '', title: '', selectId: 0}
};

const userInfo = (state = userInfoState, {type, payload}) => {
    switch (type) {
        case types.ADDITEM:
            return {
                ...state,
                list: [...state.list, payload.payload],
                selectCategory: {icon: '', title: '', selectId: 0}
            };
        case types.DELETEITEM:
            const objIndexDelete = state.list.findIndex((obj => obj.key === payload.payload));
            return {
                ...state,
                list: [...state.list.slice(0, objIndexDelete), ...state.list.slice(objIndexDelete + 1)],
                selectCategory: {icon: '', title: '', selectId: 0}
            };
        case types.EDITITEM:
            const objIndexEdit = state.list.findIndex((obj => obj.key === payload.key_transaction));
            return {
                ...state,
                list: [...state.list.slice(0, objIndexEdit), payload.payload, ...state.list.slice(objIndexEdit + 1)],
                selectCategory: {icon: '', title: '', selectId: 0}
            };
        case types.UPDATELIST:
            return {
                ...state,
                list: payload.payload
            };
        case types.UPDATESELECTCATEGORY:
            return {
                ...state,
                selectCategory: payload.payload
            };
        case types.OPENMODAL:
            return {
                ...state,
                modal: true
            };
        case types.HIDEMODAL:
            return {
                ...state,
                modal: false,
                selectCategory: payload.payload
            };
        default:
            return state
    }
};

export default userInfo;