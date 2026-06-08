"use client"

import {useEffect, useState} from "react";
import axios from "axios";

export default function TeamForm() {

    const [form, setForm] = useState<String[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/public/getForm")
            .then(response => setForm(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-(--primary) flex flex-col flex-1 gap-4 p-4 rounded-lg">
            <div className="flex flex-row justify-between">
                <p>{form[0]}</p>
                <p>{form[1]}</p>
                <p>{form[2]}</p>
                <p>{form[3]}</p>
                <p>{form[4]}</p>
            </div>
            <div className="flex justify-center">
                <p className="text-xs text-muted-foreground">Team Form</p>
            </div>
        </div>
    )
}