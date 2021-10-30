import React, {useContext, useState} from 'react';
import '../styles/Create.css'
import CreateForm from "../components/CreateForm";
import Loader from "../components/Loader/Loader";


const Create = () => {

    return (
        <div>
            <CreateForm/>
        </div>

    );
};

export default Create;