export default function Profile({user} :{ user: string}) {
    return (

        <div className="border-2 border-red-600">
            <h1> <strong> user: </strong> {user} </h1>
        </div>
    )
}