import { BaseComponent } from "../../components/base/base.component";
import { NoteDTO } from "../../models/DTOEntities/noteDTO/note.DTO";
import { autowired, override } from "first-di";
import { NoteService } from "../../services/noteService/note.service";
import { NoteListPageView } from "./noteList.page.view";
import { MockNoteRepository } from "../../repositories/mockNoteRepository/mockNote.repository";
import { NoteRepository } from "../../repositories/noteRepository/note.repository";
import { ModalDialogModel } from "../../models/viewModel/modalDialogModel/modalDialog.model";

if (process.env.NODE_ENV === "test") {
  override(NoteRepository, MockNoteRepository);
}

export interface NoteListPageOptions {
  param1?: number;
  param2?: string;
}

export class NoteListPageController<
  P extends NoteListPageOptions,
  S
> extends BaseComponent<P, S> {
  notes: NoteDTO[] | void = [];
  completed: boolean[] | undefined = [];
  modalDialog: ModalDialogModel = new ModalDialogModel();

  readonly view = NoteListPageView;

  @autowired()
  private readonly noteService: NoteService = new NoteService(
    new NoteRepository()
  );

  constructor(props: P, context: S) {
    super(props, context);
  }

  activate() {
    super.activate();
    this.requestNotes().then();
    this.modalDialog.handleClose = () => {
      this.modalDialog.show = false;
      this.forceUpdate();
      return void 0;
    };
  }

  async requestNotes(): Promise<void> {
    try {
      this.notes = await this.noteService?.getNotes();
      this.completed = this.notes?.map(note =>
        note.todos?.reduce(
          (complete: boolean, todo) => complete && todo.checked,
          true
        )
      );
      this.forceUpdate();
    } catch (e) {
      console.error(e);
    }
  }

  handleDelete = (_id: string) => {
    try {
      if (this.notes) {
        this.modalDialog = {
          ...this.modalDialog,
          show: true,
          title: "Подтвердите удаление заметки",
          text: "Вы точно хотите удалить данную заметку?",
          textOkButton: "Удалить",
          textCancelButton: "Нет, не удалять",
          handleSave: () => {
            const noteIndex = this.notes
              ? this.notes?.findIndex(note => _id === note._id)
              : 0;
            this.notes?.splice(noteIndex, 1);
            this.noteService.deleteNote(_id).then();
            this.modalDialog.show = false;
            this.forceUpdate();
            return void 0;
          },
          okIsLink: false,
          to: ""
        };
      }
      this.forceUpdate();
    } catch (e) {
      console.error(e);
    }
  };
}
