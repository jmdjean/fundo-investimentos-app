import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IInvestment } from '../../../core/interfaces/investment.interface';
import { InvestmentService } from '../../../shared/services/investment/investment.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss'],
})
export class InvestmentDetailsComponent implements OnInit {
  public form!: FormGroup;
  public displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  public displayedColumnsAcoes = ['nome', 'percentual'];
  public investment: any =  {
    nome: '',
    objetivo: '',
    saldoTotal: 0,
    indicadorCarencia: '',
    acoes: []
  };

  public loadingInfo = false;
  private investmentName: string = '';

  constructor(
    private investmentService: InvestmentService,
    private router: Router,
    private activaterRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getInvestmentSelected();
    this.getAllInvestments();
    this.form = this.formBuilder.group({
      acoes: this.formBuilder.array([])
    });
  }

  get acoesControl(): FormArray {
    return this.form.get('acoes') as FormArray;
  }

  public goBackToListOfInvestimentsPage(): void {
    this.router.navigate(['']);
  }

  private getAllInvestments(): void {
    this.loadingInfo = true;
    this.investmentService.getAll().subscribe(
      (res) => {
        this.filterTheSelectedInvestment(res);
      },
      (error) => {
        this.loadingInfo = false;
      }
    );
  }

  private filterTheSelectedInvestment(investments: IInvestment[]): void {
    this.investment = investments.find(i => i.nome === this.investmentName);
    this.buildForm();
    this.loadingInfo = false;
  }

  private buildForm(): void{
  }

  private getInvestmentSelected(): void {
    this.investmentName = this.activaterRoute.snapshot.params['nome'];
  }


}
