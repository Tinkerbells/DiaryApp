import React, {useState} from 'react';
import DiaryList from "../components/DiaryList";

const Diaries = () => {

    return (
        <div>
            <DiaryList createList/>
        </div>
    );
};

export default Diaries;