import { getNotes } from "../../lib/api";





export default async function Notes() {
    const notes = await getNotes()
    console.log("notes", notes)

    return <p>Notes</p>
}

