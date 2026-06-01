import PlayedMatches from "@/components/PlayedMatches"
import UpcomingMatches from "@/components/UpcomingMatches";
import TeamStats from "@/components/TeamStats";

export default function Page() {
    return (
        <div className="flex gap-4 p-4 min-h-screen">
            <div className="flex-1 flex flex-col gap-4">
                <UpcomingMatches />
                <PlayedMatches />
            </div>
            <TeamStats />
        </div>
    )
}