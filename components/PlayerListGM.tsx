"use client"

import Player from "@/types/Player";
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
import { Button } from "@/components/ui/button"
import Link from "next/link";

type Props = {
    setId: React.Dispatch<React.SetStateAction<number | undefined>>;
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlayerListGM({setId, setClicked}: Props) {

    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        axios.get<Player[]>("http://localhost:8080/api/players")
            .then(response => setPlayers(response.data))
            .catch(error => console.log(error))
    },[])

    return (
        <div className="rounded-lg p-4">
            <Table>
                <TableCaption>Milton Moggers Roster</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-left">First Name</TableHead>
                        <TableHead className="text-left">Last Name</TableHead>
                        <TableHead className="text-right">Player ID</TableHead>
                        <TableHead className="text-right">Edit Player Stats</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {players.map((player : Player) => {
                        return (
                            <TableRow key={player.playerId}>
                                <TableCell>{player.firstName}</TableCell>
                                <TableCell>{player.lastName}</TableCell>
                                <TableCell className="text-right">{player.playerId}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="link" className="rounded-lg p-0 h-auto" onClick={() => {
                                        setId(player.playerId);
                                        setClicked(true);
                                    }}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}