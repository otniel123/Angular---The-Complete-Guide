import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentResults } from "./investment-results/investment-results";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [App, Header, UserInput, InvestmentResults],
    imports: [FormsModule, BrowserModule],
    bootstrap: [App]
})
export class AppModule{}