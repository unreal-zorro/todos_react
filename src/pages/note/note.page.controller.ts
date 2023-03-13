import { BaseComponent } from "../../components/base/base.component";
import { NoteDTO } from "../../models/DTOEntities/noteDTO/note.DTO";
import { NotePageView } from "./note.page.view";
import { autowired } from "first-di";
import { NoteService } from "../../services/noteService/note.service";
import { NoteRepository } from "../../repositories/noteRepository/note.repository";
import { ModalDialogModel } from "../../models/viewModel/modalDialogModel/modalDialog.model";

export interface NotePageOptions {
  param1?: number;
  param2?: string;
}

export class NotePageController<
  P extends NotePageOptions,
  S
> extends BaseComponent<P, S> {
  note: NoteDTO | void = void 0;
  completed = false;
  modalDialog: ModalDialogModel = new ModalDialogModel();

  readonly view = NotePageView;

  @autowired()
  private readonly noteService: NoteService = new NoteService(
    new NoteRepository()
  );

  constructor(props: P, context: S) {
    super(props, context);
  }

  activate() {
    super.activate();
    this.getNote().then();
    this.modalDialog.handleClose = () => {
      this.modalDialog.show = false;
      this.forceUpdate();
      return void 0;
    };
  }

  async getNote(): Promise<void> {
    const idEditMatch = window.location.pathname.match(/\/notes\//);

    if (idEditMatch) {
      const _id = window.location.pathname.slice(7);
      this.requestNote(_id).then();
    }
  }

  async requestNote(_id?: string): Promise<void> {
    try {
      if (_id !== null && _id !== undefined) {
        this.note = await this.noteService?.getNoteById(_id);
        this.completed =
          this.note && this.note?.todos
            ? this.note?.todos?.reduce(
                (complete, todo) => complete && todo.checked,
                true
              )
            : false;
      }
      this.forceUpdate();
    } catch (e) {
      console.error(e);
    }
  }

  handleDelete = () => {
    try {
      if (this.note) {
        this.modalDialog = {
          ...this.modalDialog,
          show: true,
          title: "Подтвердите удаление заметки",
          text: "Вы точно хотите удалить данную заметку?",
          textOkButton: "Удалить",
          textCancelButton: "Нет, не удалять",
          handleSave: () => {
            this.note
              ? this.noteService.deleteNote(this.note?._id).then()
              : undefined;
            this.note = void 0;
            this.forceUpdate();
            return void 0;
          },
          okIsLink: true,
          to: "/notes"
        };
        this.forceUpdate();
      }
    } catch (e) {
      console.error(e);
    }
  };
}
