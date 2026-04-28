"use client"

import { Player } from "@/types/Player"
import {useEffect, useState} from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function TopScorers() {

    const [players, setPlayer] = useState<Player[]>([])

    useEffect(() => {
        axios.get<Player[]>("http://localhost:8080/api/topScorers")
            .then(response => setPlayer(response.data))
            .catch(error => console.log(error))
    });

    return (
        <Table>
            <TableCaption>Milton Moggers Top Scorers</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-left">Player Number</TableHead>
                    <TableHead className="text-left">First Name</TableHead>
                    <TableHead className="text-left">Last Name</TableHead>
                    <TableHead className="text-left">Player Position</TableHead>
                    <TableHead className="text-right">Goals</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {players.map((player : Player) => {
                    return (
                        <TableRow key={player.playerId}>
                            <TableCell>{player.playerNumber}</TableCell>
                            <TableCell>{player.firstName}</TableCell>
                            <TableCell>{player.lastName}</TableCell>
                            <TableCell>{player.playerPosition}</TableCell>
                            <TableCell className="text-right">{player.goals}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
