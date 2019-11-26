import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[ntsMyTooltip]'
})
export class MyTooltipDirective implements OnInit, OnDestroy {

  ntsMyTooltip: string; // TODO

  private isVisible = false;
  private tooltipEl: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    // TODO: embed template

    // TODO: listen to 'click' event
  }

  ngOnDestroy(): void {
    // TODO: clean up
  }

  private clickHandler = (ev) => {
    console.log('clickHandler', this.ntsMyTooltip, ev);
    // TODO
  };

  private renderTooltip(ev) {
    // TODO render styled tooltip inside getParentEl()
  }

  private removeTooltip() {
    // TODO remove  tooltip from getParentEl()
  }

  private setTooltipStyles(ev) {
    this.renderer.setStyle(this.tooltipEl, 'padding', '0.25em');
    this.renderer.setStyle(this.tooltipEl, 'backgroundColor', '#000');
    this.renderer.setStyle(this.tooltipEl, 'color', '#fff');
    this.renderer.setStyle(this.tooltipEl, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipEl, 'zIndex', 1000);
    this.renderer.setStyle(this.tooltipEl, 'border', '1px solid #000');

    const top = ev.pageY - 30;
    const left = ev.pageX + 20;
    this.renderer.setStyle(this.tooltipEl, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${left}px`);
  }

  private getParentEl() {
    return this.templateRef.elementRef.nativeElement.nextElementSibling;
  }
}
