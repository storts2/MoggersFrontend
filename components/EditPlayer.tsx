"use client"

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {useParams} from "next/dist/client/components/navigation";
import { ArrowUp, ArrowDown } from "lucide-react"
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import * as z from "zod";
import {useEffect, useState} from "react";
import axios from "axios";
import Player from "@/types/Player"

type Props = {
    id: number | undefined
}

export default function EditPlayer({id}: Props) {

    const playerSchema = z.object({
        playerId: z.number(),
        firstName: z.string(),
        lastName: z.string(),
        goals: z.number().min(0),
        assists: z.number().min(0),
        playerNumber: z.number(),
        matchesPlayed: z.number().min(0),
        playerPosition: z.string().min(2),
        cleanSheets: z.number().min(0),
    })

    const positions = ["PL", "GK"];

    const [player, setPlayer] = useState<Player | null>(null);

    function incrementGoals() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            goals: player.goals + 1
        }

        setPlayer(updatedPlayer);
    }

    function decrementGoals() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            goals: player.goals - 1
        }

        setPlayer(updatedPlayer);
    }

    function incrementAssists() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            assists: player.assists + 1
        }

        setPlayer(updatedPlayer);
    }

    function decrementAssists() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            assists: player.assists - 1
        }

        setPlayer(updatedPlayer);
    }

    function incrementMatchesPlayed() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            matchesPlayed: player.matchesPlayed + 1
        }

        setPlayer(updatedPlayer);
    }

    function decrementMatchesPlayed() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            matchesPlayed: player.matchesPlayed - 1
        }

        setPlayer(updatedPlayer);
    }

    function incrementCleanSheets() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            cleanSheets: player.cleanSheets + 1
        }

        setPlayer(updatedPlayer);
    }

    function decrementCleanSheets() {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            cleanSheets: player.cleanSheets - 1
        }

        setPlayer(updatedPlayer);
    }

    function updatePosition(value: string | null) {
        if (!player) {
            return
        }

        const updatedPlayer = {
            ...player,
            playerPosition: value ?? ""
        }

        setPlayer(updatedPlayer);
    }

    function updatePlayer() {
        if (!player) {
            console.log("player is null")
            return
        }

        const result = playerSchema.safeParse(player);

        if (!result.success) {
            console.log(result.error)
            return
        }

        axios.put("http://localhost:8080/api/updatePlayer", player)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    function deletePlayer() {

        axios.delete(`http://localhost:8080/api/deletePlayer/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }

    useEffect(() => {
        axios.get<Player>(`http://localhost:8080/api/player/${id}`)
            .then(response => setPlayer(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <Card className="rounded-lg">
            <CardHeader>
                <CardTitle>Player Stats</CardTitle>
                <CardDescription>You can edit player stats here</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div>
                    <Label>Player First Name: {player?.firstName}</Label>
                    <Label>Player Last Name: {player?.lastName}</Label>
                </div>
                <div className="flex justify-between">
                    <Label>Player Goals</Label>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full" onClick={incrementGoals}>
                            <ArrowUp/>
                        </Button>
                        <Label>{player?.goals}</Label>
                        <Button variant="outline" size="icon" className="rounded-full" onClick={decrementGoals}>
                            <ArrowDown/>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Label>Player Assists</Label>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full" onClick={incrementAssists}>
                            <ArrowUp/>
                        </Button>
                        <Label>{player?.assists}</Label>
                        <Button variant="outline" size="icon" className="rounded-full" onClick={decrementAssists}>
                            <ArrowDown/>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Label>Player Clean Sheets</Label>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full" onClick={incrementCleanSheets}>
                            <ArrowUp/>
                        </Button>
                        <Label>{player?.cleanSheets}</Label>
                        <Button variant="outline" size="icon" className="rounded-full" onClick={decrementCleanSheets}>
                            <ArrowDown/>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Label>Player Matches Played</Label>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full" onClick={incrementMatchesPlayed}>
                            <ArrowUp/>
                        </Button>
                        <Label>{player?.matchesPlayed}</Label>
                        <Button variant="outline" size="icon" className="rounded-full" onClick={decrementMatchesPlayed}>
                            <ArrowDown/>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Label>Player Position</Label>
                    <div className="flex">
                        <Combobox items={positions} onValueChange={updatePosition}>
                            <ComboboxInput placeholder={player?.playerPosition} className="rounded-lg"/>
                            <ComboboxContent>
                                <ComboboxList>
                                    {(item) => (
                                        <ComboboxItem key={item} value={item}>
                                            {item}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </div>
                </div>
                <Button variant="outline" className="rounded-lg" onClick={updatePlayer}>Update</Button>
                <Button variant="destructive" className="rounded-lg" onClick={deletePlayer}>Delete Player From Roster</Button>
            </CardContent>
        </Card>
    )
}