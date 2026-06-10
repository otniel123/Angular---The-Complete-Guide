import { NgModule } from "@angular/core";
import { ContactList } from "../contact-list/contact-list";
import { ContactStats } from "../contact-stats/contact-stats";
import { NewContact } from "../new-contact/new-contact";
import { SharedModule } from "../sharedModule/shared.module";

@NgModule({
    declarations: [ContactList, ContactStats, NewContact],
    imports: [SharedModule],
    exports: [ContactList, ContactStats]
})
export class ContactModule{}