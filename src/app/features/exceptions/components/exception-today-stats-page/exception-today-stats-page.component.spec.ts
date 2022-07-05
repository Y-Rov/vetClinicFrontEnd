import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExceptionTodayStatsPageComponent } from './exception-today-stats-page.component';

describe('ExceptionTodayStatsPageComponent', () => {
    let component: ExceptionTodayStatsPageComponent;
    let fixture: ComponentFixture<ExceptionTodayStatsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExceptionTodayStatsPageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExceptionTodayStatsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
