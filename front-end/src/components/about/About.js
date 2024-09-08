import './About.css'

export default function About(){
return <>
{opening()}
</>
}

function opening() {
    return <div className="opening">
        ShowRoom is a platform for voting on 
    the games you are most excited about!
    < br />
    Made by a single person, this website is designed for those who want to
    express their interest in a game.
    </div>
}