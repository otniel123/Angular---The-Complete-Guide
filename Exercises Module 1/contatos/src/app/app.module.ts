import { NgModule } from "@angular/core";
import { App } from "./app";
import { BrowserModule } from "@angular/platform-browser";
import { ContactModule } from "./contacts/contacts.module";
import { Section } from "./section/section";
import { SharedModule } from "./sharedModule/shared.module";

@NgModule({
    declarations: [App],
    imports: [BrowserModule, ContactModule, SharedModule],
    bootstrap: [App]
})
export class AppModule{}