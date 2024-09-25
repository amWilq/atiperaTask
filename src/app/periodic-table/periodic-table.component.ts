import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, } from '@angular/material/dialog';
import { FormControl, FormsModule } from '@angular/forms';
import { delay, of } from 'rxjs';
import { EditDialogComponent } from './dialog/edit-dialog.component';
import { MatSort, } from '@angular/material/sort';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RxState } from '@rx-angular/state';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [MatDialog,RxState],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PeriodicTableComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  filter = new FormControl('');
  filterControl = new FormControl('');

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private state: RxState<{ data: PeriodicElement[] }>, private dialog: MatDialog) {
    this.state.set({ data: [] });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const filterText = filterValue.trim().toLowerCase();

    timer(2000).subscribe(() => {
      this.dataSource.filter = filterText;
    });
  }

  ngOnInit(): void {
    of(ELEMENT_DATA).pipe(delay(2000))
      .subscribe({
        next: data => {
          this.dataSource.data = data;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          console.error('Error loading data');
        }
      });
  }

  edit(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { ...element }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.findIndex(e => e.position === result.position);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription(); 
        }
      }
    });
  }
}

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];