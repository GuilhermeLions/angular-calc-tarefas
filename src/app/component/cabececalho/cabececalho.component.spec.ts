import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabececalhoComponent } from './cabececalho.component';

describe('CabececalhoComponent', () => {
  let component: CabececalhoComponent;
  let fixture: ComponentFixture<CabececalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabececalhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabececalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
