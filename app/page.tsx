import PlayerOfWeek from "@/components/PlayerOfWeek";
import TeamForm from "@/components/TeamForm";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 flex flex-row gap-4 p-4">
                <div className="flex flex-col flex-1 gap-4">
                    <div className="flex-1 bg-(--primary) p-4 rounded-lg flex justify-center items-center">
                        Milton Moggers: Built Different, Built Milton!
                    </div>
                    <div className="flex-1 flex justify-center items-center gap-4">
                        <img src="/images/maslLogo.png" className="w-40"/>
                        <p className="text-3xl">Division 5</p>
                    </div>
                    <div className="flex-1 bg-(--primary) p-4 rounded-lg justify-center items-center">
                        The Milton Moggers are a group of friends from Milton, Ontario who met while working together
                        at Canadian Tire and decided to take our friendship from the workplace to the soccer field.
                        What started as a few coworkers kicking a ball around quickly turned into a team built on
                        friendship, teamwork, and a shared love of the game. We may not be the most skilled team out
                        there, but we make up for it with effort, determination, and plenty of laughs along the way.
                        Every match is an opportunity to improve, compete, and enjoy the game with friends who have each
                        other's backs. At the end of the day, the Milton Moggers are about more than soccer. We're a group
                        of friends making memories, representing our hometown, and proving that you don't need to be
                        professionals to have a great time on the field.
                    </div>
                </div>
                <div className="flex flex-col justify-between bg-(--primary) p-4 gap-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
                        <img src="/images/photo1.jpeg" className="h-auto w-80 rounded-lg" />
                        <img src="/images/photo4.jpeg" className="h-auto w-80 rounded-lg" />
                        <img src="/images/photo6.jpeg" className="h-auto w-80 rounded-lg" />
                        <img src="/images/photo5.jpeg" className="h-auto w-80 rounded-lg" />
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <p className="text-xs text-muted-foreground">Photo Gallery</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-row gap-4 pb-4 pl-4 pr-4">
                <TeamForm/>
                <PlayerOfWeek/>
            </div>
        </div>
    )
}
