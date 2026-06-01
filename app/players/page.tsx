import PlayerList from "@/components/PlayerList";
import TopScorers from "@/components/TopScorers";
import TopAssisters from "@/components/TopAssisters";
import TopCleanSheets from "@/components/TopCleanSheets";

export default function Page() {
    return (
        <div className="flex gap-4 p-4">
            <PlayerList/>
            <div className="flex-1 flex flex-col gap-4">
                <TopScorers/>
                <TopAssisters/>
                <TopCleanSheets/>
            </div>
        </div>
    )
}