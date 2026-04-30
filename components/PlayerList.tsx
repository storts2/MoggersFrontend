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
import { Player } from "@/types/Player"
import {useEffect, useState} from "react";
import axios from "axios";

export default function PlayerList() {

    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        axios.get<Player[]>("http://localhost:8080/api/players")
            .then(response => setPlayers(response.data))
            .catch(error => console.log(error))
    },[])

    return (
        <div className="bg-(--primary) flex-1 p-4 rounded-lg">
            <Table>
                <TableCaption>Milton Moggers Roster</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-left">First Name</TableHead>
                        <TableHead className="text-left">Last Name</TableHead>
                        <TableHead className="text-right">Player Number</TableHead>
                        <TableHead className="text-right">Player Position</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {players.map((player : Player) => {
                        return (
                            <TableRow key={player.playerId}>
                                <TableCell>{player.firstName}</TableCell>
                                <TableCell>{player.lastName}</TableCell>
                                <TableCell className="text-right">{player.playerNumber}</TableCell>
                                <TableCell className="text-right">{player.playerPosition}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}