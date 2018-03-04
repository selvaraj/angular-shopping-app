import { Input, Directive, TemplateRef, ViewContainerRef, HostBinding, HostListener } from "@angular/core";


@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
 @HostBinding('class.open') isOpen = false;



  @HostListener('click') ontoggle() {
    this.isOpen = !this.isOpen;
  }
}
