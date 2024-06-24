import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, OnInit, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService implements OnInit {
    private renderer: Renderer2;

    private readonly STORAGE_KEY = 'cafecitoTheme';

    public get theme() {
        let themeName = localStorage.getItem(this.STORAGE_KEY);
        return themeName && themeName !== '' ? themeName : 'lightTheme';
    }

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private rendererFactory: RendererFactory2,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    ngOnInit(): void {
        this.renderer.addClass(this.document.body, this.theme);
    }

    public setTheme(theme: string) {
        this.renderer.removeClass(this.document.body, this.theme)
        localStorage.setItem(this.STORAGE_KEY, theme);
        this.renderer.addClass(this.document.body, this.theme)
    }

}