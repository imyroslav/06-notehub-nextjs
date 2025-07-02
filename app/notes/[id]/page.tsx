import { type NoteItem } from "../../../lib/api";
import css from "../../../components/NoteList/NoteList.module.css"

type NoteItemProps = {
    item: NoteItem
}

export default function NoteDetails({ item }: NoteItemProps) {
    return (
        <>
            {/* <h1>Note Details</h1> */}
            <li className={css.listItem}>
                <p className={css.title}>{item.title}</p>
                <p className={css.content}>{item.content}</p>
            </li>
        </>
        
    )    
}