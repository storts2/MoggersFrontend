"use client"

import {useEffect, useState} from "react";
import axios from "axios";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default function UpcomingMatches() {

    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/public/upcomingMatches")
            .then(response => setMatches(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-(--primary) flex-1 p-4 rounded-lg">
            <Table>
                <TableCaption>Milton Moggers Upcoming Matches</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-left">Home Name</TableHead>
                        <TableHead> - </TableHead>
                        <TableHead className="text-right">Away Name</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                        <TableHead className="text-right">Match Date</TableHead>
                        <TableHead className="text-right">Address</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {matches.map((match : Match) => {
                        return (
                            <TableRow key={match.match_id}>
                                <TableCell className="text-left">{match.home_name}</TableCell>
                                <TableCell> - </TableCell>
                                <TableCell className="text-right">{match.away_name}</TableCell>
                                <TableCell className="text-right">{match.status}</TableCell>
                                <TableCell className="text-right">{match.match_date}</TableCell>
                                <TableCell className="text-right">{match.address}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}