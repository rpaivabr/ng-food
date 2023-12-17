import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { SearchComponent } from './pages/search/search.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    { path: '', redirectTo: '/entrar', pathMatch: 'full' },
    { path: 'entrar', component: LoginComponent },
    { path: 'produtos', component: ProductsComponent },
    { path: 'busca', component: SearchComponent },
    { path: 'pedidos', component: HistoryComponent },
];
