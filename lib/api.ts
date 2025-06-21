import axios from "axios";

axios.defaults.baseURL = "https://next-docs-apy.onrender.com"

export type NoteItem = {
    id: string
    title: string
    content: string
    categoryId: string
    createdAt: string
    updatedAt: string
}

export type NoteList = {
    notes: NoteItem[]
    total: number

}

export const getNotes = async (): Promise<NoteList> => {
    const { data } = await axios.get<NoteList>("/notes")
    return data
}