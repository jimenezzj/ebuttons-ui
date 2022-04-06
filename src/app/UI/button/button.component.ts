import { Component, ElementRef, Input, OnInit, Output, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'cls-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @ViewChild('clsBtn') btnEle: ElementRef;
  @ViewChild('clsLink') linkEle: ElementRef;
  @Input() btnType = 'button';
  @Input() styleOpts: {
    isOutline: boolean,
    theme: string
  };
  @Input() innerText = '';
  @Input() events: { [key: string]: (...p: any) => void };
  // @Output()
  private themeOpts: { [k: string]: { [k: string]: string } };

  constructor(private renderer: Renderer2) {
    this.themeOpts = {
      'prim': { backgroundColor: '#1868c3', color: '#fff' },
      'sec': { backgroundColor: '#747474', color: '#fff' },
      'ter': { backgroundColor: '#00ADEE', color: '#fff' }
    };
  }

  ngOnInit(): void {
    this.styleOpts = {
      isOutline: false,
      theme: 'prim',
      ...this.styleOpts
    }
  }

  ngAfterViewInit(): void {
    const { nativeElement: btnEle }: { nativeElement: HTMLButtonElement | HTMLAnchorElement | null } = this.btnEle || this.linkEle;
    if (btnEle && this.events) {
      Object.entries(this.events).forEach(([evName, cb]) => this.renderer.listen(btnEle, evName, cb));
    }
    this.setCssVars();
    // console.log(btnEle);
  }

  getStylesArr(pBtnEle: HTMLElement): string[] {
    let resCssClass = ['cl-app-btn'];
    if (this.styleOpts?.isOutline) resCssClass.push('cl-app-btn--outline');
    return resCssClass;
  }

  setCssVars(crrTheme?: string): void {
    const { nativeElement: crrBtnEle = null }: { nativeElement: HTMLButtonElement | HTMLAnchorElement | null } = this.btnEle || this.linkEle;
    if (crrBtnEle) {
      const crrClrs = this.themeOpts[crrTheme || this.styleOpts.theme];
      const cssVarsObj = { '--cl-plg-btn-bg': crrClrs.backgroundColor, '--cl-plg-btn-tx': crrClrs.color };
      const getStyleAttrWithCssVars = (pCssVar) => JSON.stringify(pCssVar).replace(/\{|\}|"/gi, '').replace(',', ';') + ';';
      if (this.btnType === 'link' && !this.styleOpts.isOutline) {
        this.renderer.setAttribute(crrBtnEle, 'tabindex', '0');
      }
      console.log(cssVarsObj);
      this.renderer.setAttribute(crrBtnEle, 'style',
        (crrBtnEle.getAttribute('style') || '') + getStyleAttrWithCssVars(cssVarsObj));
      // console.log(this.btnEle);
    }
  }

}
