"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {useEffect, useState} from "react";
import axios from "axios";

export default function PlayerList() {

    type Player = {
        playerId : number,
        firstName : string,
        lastName : string,
        goals : number,
        assists : number,
        playerNumber : number,
        matchesPlayed : number,
        playerPosition : string,
        cleanSheets : number
    }

    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        axios.get<Player[]>("http://localhost:8080/api/players")
            .then(response => setPlayers(response.data))
            .catch(error => console.log(error))
    })

    return (
        <Table>
            <TableCaption>Milton Moggers Player Stats</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-left">Player Number</TableHead>
                    <TableHead className="text-left">First Name</TableHead>
                    <TableHead className="text-left">Last Name</TableHead>
                    <TableHead className="text-left">Goals</TableHead>
                    <TableHead className="text-left">Assists</TableHead>
                    <TableHead className="text-left">Clean Sheets</TableHead>
                    <TableHead className="text-left">Matches Played</TableHead>
                    <TableHead className="text-left">Player Position</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {players.map((player : Player) => {
                    return (
                        <TableRow key={player.playerId}>
                            <TableCell>{player.playerNumber}</TableCell>
                            <TableCell>{player.firstName}</TableCell>
                            <TableCell>{player.lastName}</TableCell>
                            <TableCell>{player.goals}</TableCell>
                            <TableCell>{player.assists}</TableCell>
                            <TableCell>{player.cleanSheets}</TableCell>
                            <TableCell>{player.matchesPlayed}</TableCell>
                            <TableCell>{player.playerPosition}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}