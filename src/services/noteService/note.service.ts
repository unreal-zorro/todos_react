import { reflection } from "first-di";
import { NoteDTO } from "../../models/DTOEntities/noteDTO/note.DTO";
import { NoteRepository } from "../../repositories/noteRepository/note.repository";

@reflection
export class NoteService {
  private readonly noteRepository: NoteRepository;

  constructor(noteRepository: NoteRepository) {
    this.noteRepository = noteRepository;
  }

  async getNotes(): Promise<NoteDTO[] | void> {
    return await this.noteRepository.requestNotes();
  }

  async getNoteById(id: string): Promise<NoteDTO | void> {
    const notes = await this.noteRepository.requestNotes();
    if (notes && notes?.length) {
      return notes.find((note: NoteDTO) => note._id === id);
    }
  }

  async getNewNote(): Promise<NoteDTO> {
    return await this.noteRepository.requestNewNote();
  }

  async addNote(note: NoteDTO): Promise<boolean> {
    return await this.noteRepository.addNewNote(note);
  }

  async editNote(note: NoteDTO): Promise<boolean> {
    return await this.noteRepository.editExistentNote(note);
  }

  async deleteNote(_id: string): Promise<boolean> {
    return await this.noteRepository.deleteExistentNote(_id);
  }
}
