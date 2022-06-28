import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesPageComponent} from "./components/articles/articles-page/articles-page.component";
import {ViewArticleComponent} from "./components/articles/view-article/view-article.component";
import {PreviewArticleComponent} from "./components/articles/preview-article/preview-article.component";
import {RolesGuard} from "../../helpers/roles-guard/roles.guard";

const routes: Routes = [
    {
      path: '',
      component: ArticlesPageComponent
    },
    {
      path: ':id',
      component: ViewArticleComponent
    },
    {
      path: 'preview/:id',
      component: PreviewArticleComponent,
      canActivate: [RolesGuard],
      data: {allowedRoles: ['Admin']}
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyBlogRoutingModule { }
