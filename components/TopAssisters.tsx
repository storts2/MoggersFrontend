"use client"

import { Player } from "@/types/Player"
import {useEffect, useState} from "react";
import axios from "axios";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default function TopAssisters() {

    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        axios.get<Player[]>("http://localhost:8080/api/topAssisters")
            .then(response => setPlayers(response.data))
            .catch(error => console.log(error))
    });

    return (
        <div className="bg-(--primary) rounded-lg p-4">
            <Table>
                <TableCaption>Milton Moggers Top Assisters</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-left">First Name</TableHead>
                        <TableHead className="text-left">Last Name</TableHead>
                        <TableHead className="text-right">Player Number</TableHead>
                        <TableHead className="text-right">Player Position</TableHead>
                        <TableHead className="text-right">Assists</TableHead>
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
                                <TableCell className="text-right">{player.assists}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>

    )

}