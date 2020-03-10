console.clear();
//actions
const createPolicy =(name, membership) => {
    return { //action
        type:'CREATE_POLICY',
        payload: {
            name: name,
            membership: membership
        }
    }
}
const deletePolicy =(name) => {
    return {
        type:'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}
const createClaim =(name, amountOfMoney) => {
    return {
        type:'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoney: 80
        }
    }
}

//reducers
const claimsHistory = (oldListOfClaims=[], action) =>{
    if(action.type === CREATE_CLAIM){
        //we care about the action
        return [...oldListOfClaims, action.payload]
    }
    //we don't care about the action
    return oldListOfClaims;
}

const accounting = (oldBagOfMoney=100, action) =>{
    if(action.type === CREATE_CLAIM){
        //we care about the action
        return oldBagOfMoney- action.payload.amountOfMoney
    } else if (action.type === CREATE_POLICY){
        return oldBagOfMoney + action.payload.membership
    }
    //we don't care about the action
    return oldBagOfMoney;
}

const policies = (oldPolicies=[], action) =>{
    if(action.type === CREATE_POLICY){
        //we care about the action
        return [...oldPolicies, action.payload.name]
    } else if (action.type === DELETE_POLICY){
        return oldPolicies.filter(i => i === action.payload.name)
    }
    //we don't care about the action
    return oldPolicies;
}

