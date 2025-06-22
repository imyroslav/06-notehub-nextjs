import { getNotes } from "../../lib/api";
import NoteList from "../../components/NoteList/NoteList";


export default async function Notes() {
    const notes = await getNotes()
    console.log("notes", notes)

    return (
        <>
            <h1>Notes</h1>
            <NoteList items={notes} />
        </>
    )
}

