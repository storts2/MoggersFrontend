"use client"

import {useEffect, useState} from "react";
import Team from "@/types/Team";
import axios from "axios";

export default function TeamStats() {

    const [stats, setStats] = useState<Team>();

    useEffect(() => {
        axios.get("http://localhost:8080/api/public/getTeamStats")
            .then(response => setStats(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-(--primary) flex flex-col p-4 rounded-lg">
            <div className="place-items-center">
                <h1 className="text-xs">Moggers Team Stats</h1>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Wins</p>
                <p className="text-xs">{stats?.wins}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Losses</p>
                <p className="text-xs">{stats?.losses}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Ties</p>
                <p className="text-xs">{stats?.ties}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Points</p>
                <p className="text-xs">{stats?.pts}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Goals For</p>
                <p className="text-xs">{stats?.goalsFor}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Goals Against</p>
                <p className="text-xs">{stats?.goalsAgainst}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Goal Differential</p>
                <p className="text-xs">{stats?.goalDifferential}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Win %</p>
                <p className="text-xs">{stats?.winPercentage}</p>
            </div>
            <div className="flex-1 flex flex-row justify-between place-items-center gap-4">
                <p className="text-xs">Matches Played</p>
                <p className="text-xs">{stats?.matchesPlayed}</p>
            </div>
        </div>
    )
}