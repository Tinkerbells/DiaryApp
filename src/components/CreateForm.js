import React, {useState, useContext} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyTextArea from "./UI/TextArea/MyTextArea";
import MyButton from "./UI/Button/MyButton";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase/compat";
import {AuthContext} from "../context";

const CreateForm = () => {
    const {auth, firestore} = useContext(AuthContext)
    const [user] = useAuthState(auth)
    const [diary, setDiary] = useState({name: '', body: ''})
    const addNewDiary = async () => {
        firestore.collection('diaries').add({
            uid: user.uid,
            displayName: user.displayName,
            text: diary.body,
            name: diary.name,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        console.log(diary)
        setDiary({name: '', body: ''})

    }
    return (
        <form>
            <div className="create_area">
                <MyInput
                    type="text"
                    value={diary.name}
                    onChange={e => {
                        setDiary({...diary, name: e.target.value})
                    }}
                    placeholder="Enter the name..."
                />
                <MyTextArea
                    type="text"
                    placeholder="Start typing your thoughts..."
                    value={diary.body}
                    onChange={e => {
                        setDiary({...diary, body: e.target.value})
                    }}
                />
                <MyButton onClick={addNewDiary}>Create</MyButton>
            </div>
        </form>
    );
};

export default CreateForm;