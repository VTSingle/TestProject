import * as types from '../../constants/userConst/index';


const userInfoState = {
    list: [],
    modal: false,
    selectCategory: {icon: '', title: '', selectId: 0}
};

const userInfo = (state = userInfoState, action) => {
    switch (action.type) {
        case types.ADDITEM:
            return {
                ...state,
                list: state.list.concat(action.payload.payload),
                selectCategory: {icon: '', title: '', selectId: 0}
            };
        case types.DELETEITEM:
            let objIndexDelete = state.list.findIndex((obj => obj.key === action.payload.payload));
            return {
                ...state,
                list: [...state.list.slice(0, objIndexDelete), ...state.list.slice(objIndexDelete + 1)],
                selectCategory: {icon: '', title: '', selectId: 0}
            };
        case types.EDITITEM:
            let objIndexEdit = state.list.findIndex((obj => obj.key === action.payload.key_transaction));
            return {
                ...state,
                list: [...state.list.slice(0, objIndexEdit), action.payload.payload, ...state.list.slice(objIndexEdit + 1)],
                selectCategory: {icon: '', title: '', selectId: 0}
            };
        case types.UPDATESELECTCATEGORY:
            return {
                ...state,
                selectCategory: action.payload.payload
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
                selectCategory: action.payload.payload
            };
        default:
            return state
    }
};

export default userInfo;