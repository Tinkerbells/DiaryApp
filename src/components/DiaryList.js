import React, {useContext} from 'react';
import DiaryItem from "./DiaryItem/DiaryItem";
import {AuthContext} from "../context";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader/Loader";

const DiaryList = () => {
    const {auth, firestore} = useContext(AuthContext)
    const [user] = useAuthState(auth)
    const [diaries, loading] = useCollectionData(
        firestore.collection('diaries').orderBy('createdAt')
    )
    if (loading) {
        return <Loader/>
    }
    return (
        <div>
            <div>
                {diaries.map(diary =>
                    <DiaryItem diary={diary} key={diary.uid}/>
                )}
            </div>
        </div>

    );
};

export default DiaryList;