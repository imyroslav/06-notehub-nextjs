import axios from "axios";
import { type NoteItem } from "../types/note"




export type GetNotes = {
  notes: NoteItem[];
  totalPages: number;
}

const request = axios.create({
    baseURL: "https://notehub-public.goit.study/api",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

export const getNotes = async (
  page = 1,
  perPage = 12,
  search = ""
): Promise<GetNotes> => {
  const params: Record<string, string | number> = { page, perPage };

  if (search.trim() !== "") {
    params.search = search.trim();
  }

  const { data } = await request.get<GetNotes>("/notes", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
    params,
  });
  // console.log(data)
  return data;
};



export const createNote = async (note: {
  title: string;
  content: string;
  tag: string;
}): Promise<NoteItem> => {
  const { data } = await request.post<NoteItem>("/notes", note, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  return data;
};

export const deleteNote = async (id: number): Promise<NoteItem> => {
  const { data } = await request.delete<NoteItem>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  return data;
};

export const fetchNoteById = async (id: number): Promise<NoteItem> => {
  const { data } = await request.get<NoteItem>(`/notes/${id}`, {
     headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  })
  return data;
}