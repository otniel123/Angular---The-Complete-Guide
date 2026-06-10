import { NgModule } from "@angular/core";
import { Section } from "../section/section";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [Section],
    imports: [FormsModule, CommonModule],
    exports: [Section, FormsModule, CommonModule]
})
export class SharedModule{}