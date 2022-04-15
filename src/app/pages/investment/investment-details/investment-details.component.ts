import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogInfoComponent } from '../../../core/components/dialog-info/dialog-info.component';
import { IInvestment } from '../../../core/interfaces/investment.interface';
import { IShare } from '../../../core/interfaces/share.interface';
import { NotificationService } from '../../../core/services/common/notification.service';
import { InvestmentService } from '../../../core/services/investiments/investment.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss'],
})
export class InvestmentDetailsComponent implements OnInit {
  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>;
  public acoesDataSource = new MatTableDataSource<IShare>();
  public displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  public displayedColumnsAcoes = [
    'nome',
    'saldoAcumulado',
    'valorResgate',
    'valorValido',
  ];

  public investment!: IInvestment;
  public investmentName: string = '';
  public loadingInfo = false;
  public formDirty = false;
  public amountToWithdraw = 0;

  constructor(
    public investmentService: InvestmentService,
    private router: Router,
    private activaterRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getInvestmentSelected();
    this.getAllInvestments();
  }

  public goBackToListOfInvestimentsPage(): void {
    this.router.navigate(['']);
  }

  public saveForm(): void {
    if (!this.formDirty) {
     return;
    } else if (
      this.investmentService.validateAllValuesToWithdraw(this.investment)
    ) {
      this.showDialogWithdrawSuccess();
    } else {
      this.notificationService.openSnackBar(
        'Os valores a resgatar estão inválidos.'
      );
    }
  }

  public checkAmountValueToWithdraw(acao: IShare): void {
    this.formDirty = true;
    acao.valorValido = !this.investmentService.checkAmountValueToWithdraw(acao);
    this.amountToWithdraw = this.investmentService.getAmountToWithdraw(this.investment);
  }

  showDialogWithdrawSuccess(): void {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      width: '400px',
      data: {
        title: this.investmentName,
        message: 'Resgate efetuado com sucesso!'
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.goBackToListOfInvestimentsPage();
    });
  }

  private getAllInvestments(): void {
    this.loadingInfo = true;
    this.investmentService.getAll().subscribe(
      (res) => {
        this.filterTheSelectedInvestment(res);
      },
      () => {
        this.notificationService.openSnackBar(
          'Não foi possivel carregar as informações do investimento'
        );
        this.loadingInfo = false;
      }
    );
  }

  private filterTheSelectedInvestment(investments: IInvestment[]): void {
    this.investment = investments.find((i) => i.nome === this.investmentName) as IInvestment;
    this.acoesDataSource = this.investment.acoes as any;
    this.loadingInfo = false;
  }

  private getInvestmentSelected(): void {
    this.investmentName = this.activaterRoute.snapshot.params['nome'];
  }
}
