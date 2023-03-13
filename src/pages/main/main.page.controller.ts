import { BaseComponent } from "../../components/base/base.component";
import { MainPageView } from "./main.page.view";
import { NoteDTO } from "../../models/DTOEntities/noteDTO/note.DTO";
import { autowired } from "first-di";
import { NoteService } from "../../services/noteService/note.service";
import { NoteRepository } from "../../repositories/noteRepository/note.repository";

export interface MainPageOptions {
  prop1?: boolean;
}

export class MainPageController<
  P extends MainPageOptions,
  S
> extends BaseComponent<P, S> {
  notes: NoteDTO[] | void = [];
  numberOfNotes = 0;

  readonly view = MainPageView;

  @autowired()
  private readonly noteService: NoteService = new NoteService(
    new NoteRepository()
  );

  constructor(props: P, context: S) {
    super(props, context);
  }

  activate() {
    super.activate();
    // this.add().then();
    this.requestNumberOfNotes().then();
  }

  async add() {
    await localStorage.setItem(
      "notes",
      `[
         {
           "_id":"1",
           "title":"Изучить HTML",
           "todos":[
             {
               "_id":"1",
               "checked":true,
               "text":"Изучить основные теги"
             },
             {
               "_id":"2",
               "checked":false,
               "text":"Изучить атрибуты тегов"
             }
           ]
         },
         {
           "_id":"2",
           "title":"Изучить CSS",
           "todos":[
             {
               "_id":"3",
               "checked":true,
               "text":"Изучить селекторы"
             },
             {
               "_id":"4",
               "checked":true,
               "text":"Изучить блочную модель"
             },
             {
               "_id":"5",
               "checked":true,
               "text":"Изучить основные стили"
             }
           ]
         }
       ]`
    );
  }

  async requestNumberOfNotes(): Promise<void> {
    try {
      this.notes = await this.noteService?.getNotes();
      if (this.notes) {
        this.numberOfNotes = this.notes.length;
      }
      this.forceUpdate();
    } catch (e) {
      console.error(e);
    }
  }
}
