import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorServie } from "src/app/auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
  providers: [
    ShoppingListService, RecipeService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorServie,
      multi: true
     }
  ]
})
export class CoreModule {

}
