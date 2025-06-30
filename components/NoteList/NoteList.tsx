import { type NoteList } from "../../lib/api";
import NoteItem from "../../app/notes/[id]/page";
import css from "./NoteList.module.css"


type NoteListProps = {
    items: NoteList
}

export default function NoteList({ items }: NoteListProps) {
    return (
        <ul>
            {items.notes.map((element) => (
                <NoteItem key={element.id} item={element} />
            ))}
        </ul>
    )
}