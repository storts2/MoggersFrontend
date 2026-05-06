"use client"

import PlayerListGM from "@/components/PlayerListGM";
import EditPlayer from "@/components/EditPlayer";
import {useState} from "react";

export default function Page() {

    const [id, setId] = useState<number | undefined>();
    const [clicked, setClicked] = useState<boolean>(false);

    if (!clicked) {
        return (
            <PlayerListGM setId={setId} setClicked={setClicked}/>
        )
    }
    else {
        return (
            <div className="flex flex-row">
                <PlayerListGM setId={setId} setClicked={setClicked}/>
                <EditPlayer id={id}/>
            </div>
        )
    }
}