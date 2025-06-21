import axios from "axios";


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

const request = axios.create({
    baseURL: "https://notehub-public.goit.study/api",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

export const getNotes = async (): Promise<NoteList> => {
    const { data } = await request.get<NoteList>("/notes")
    return data
}