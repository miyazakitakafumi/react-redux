const initialState = {
  flag: true  
};

export default function test(state = initialState, action) {
    switch (action.type) {
        case 'SHOW':
            return Object.assign({}, state, {flag: true});
        case 'HIDE':
            return Object.assign({}, state, {flag: false});
        default:
            return state;
    }
}