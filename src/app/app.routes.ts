import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { Component } from '@angular/core';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contador', component: ContadorComponent},
    {path: "calculadora", component: CalculadoraComponent},
    {path: "tarefas", component: TarefasComponent}
];
