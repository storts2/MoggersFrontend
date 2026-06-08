"use client"

import {useEffect, useState} from "react";
import Player from "@/types/Player";
import axios from "axios";

export default function PlayerOfWeek() {

    const [player, setPlayer] = useState<Player>();

    useEffect(() => {
        axios.get("http://localhost:8080/api/public/playerOfWeek")
            .then(response => setPlayer(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-(--primary) flex flex-col flex-1 gap-4 p-4 rounded-lg justify-center">
            <div className="flex flex-row justify-between">
                <p>{player?.firstName}, {player?.lastName}</p>
                <p>{player?.playerNumber}</p>
            </div>
            <div className="flex justify-center">
                <p className="text-xs text-muted-foreground">Player Of The Week</p>
            </div>
        </div>
    )
}