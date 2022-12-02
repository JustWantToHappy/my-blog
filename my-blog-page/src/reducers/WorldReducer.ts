import dayjs from "dayjs";
import { WORLD_ACTION_TYPE } from "../typing/contants"
const getCurrentTime = () => {
    var now = dayjs(new Date()).format("YYYY年MM月DD日 hh时mm分 A")
    return now;
}
const WorldReducer = (state: Home.myworld, action: { type: string }) => {
    switch (action.type) {
        case WORLD_ACTION_TYPE.TIME:
            state.sakura.time = getCurrentTime();
            return { ...state };
        default:
            return state;
    }
}
export default WorldReducer;