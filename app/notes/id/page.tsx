import { type NoteItem } from "../../../lib/api";

type NoteItemProps = {
    item: NoteItem
}

export default function NoteDetails({ item }: NoteItemProps) {
    return (
        <>
            <h1>Note Details</h1>
            <li>
                {item.title}
                
            </li>
        </>
        
    )    
}