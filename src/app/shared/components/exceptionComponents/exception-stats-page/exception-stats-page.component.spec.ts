import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExceptionStatsPageComponent } from './exception-stats-page.component';

describe('ProceduresPageComponent', () => {
    let component: ExceptionStatsPageComponent;
    let fixture: ComponentFixture<ExceptionStatsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExceptionStatsPageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExceptionStatsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
