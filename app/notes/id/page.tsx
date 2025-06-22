import { type NoteItem } from "../../../lib/api";

type NoteItemProps = {
    item: NoteItem
}

export default function NoteItem({ item }: NoteItemProps) {
    return (
        <>
            <p>NOTES PAGE</p>
        <li>{item.title}</li>
        </>
        
    )    
}