import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { changeTitle, changeWithParams  } from "../../store/titleSlice";

function MainPage() {
    const dispatch = useDispatch();

    const title = useSelector(state=>state.titleReducer.title)

    const changeTitleFunc = () => {
        dispatch(changeTitle())
    }

    const changeTitleWithParamsFunc = () => {
        dispatch(changeWithParams("Hello! I am with params"))
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitleFunc}>
                Change Title
            </button>
            <button onClick={changeTitleWithParamsFunc}>Change with params</button>
        </div>
    )
}

export default MainPage;