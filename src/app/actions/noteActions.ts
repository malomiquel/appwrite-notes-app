import { databases } from "@/utils/appwrite"
import { ID } from "appwrite"

export const addNote = async (content: string): Promise<Note> => {
  const newNote = { content: content }

  const response = await databases.createDocument(
    "notesApp",
    process.env.NEXT_PUBLIC_COLLECTION_ID!,
    ID.unique(),
    newNote
  )

  const note = {
    $id: response.$id,
    $createdAt: response.$createdAt,
    content: response.content
  }

  return note
}

export const getNotes = async (): Promise<Note[]> => {
  const response = await databases.listDocuments(
    "notesApp",
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  )

  const notes: Note[] = response.documents.map((note) => ({
    $id: note.$id,
    $createdAt: note.$createdAt,
    content: note.content
  }))

  return notes
}

export const deleteNote = async (noteId: string): Promise<void> => {
  await databases.deleteDocument(
    "notesApp",
    process.env.NEXT_PUBLIC_COLLECTION_ID!,
    noteId
  )
}