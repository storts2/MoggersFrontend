import TopAssisters from "@/components/TopAssisters";
import PlayerList from "@/components/PlayerList"
import TopScorers from "@/components/TopScorers"

export default function Page() {
  return (
      <div className="flex gap-4 p-4 h-full">
          <PlayerList/>
          <div className="flex-1 flex flex-col gap-4">
              <TopScorers/>
              <TopAssisters/>
          </div>
      </div>

  )
}
