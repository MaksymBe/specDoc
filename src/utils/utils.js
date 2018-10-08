export const createCommonAction = (type, payload) => ({type, payload});
export const actionWithType = (type) => (payload) => ({type, payload});