SERVICO---------------------------------------------- 

public apagarLivro(livroId:Number):Observable<Number>{
    this._listaLivros= Object.assign([], this._listaLivros);
    this._listaLivros= this._listaLivros.filter((x)=> x.Id !== livroId);
    return of(livroId);
  }
  
  
CHAMADA NO COMPONENTE EDITAR---------------------------------

<button (click)="apagarLivro()" class="btn-delete" mat-button color="primary">Delete</button>

deleteBook(){
    this._store.dispatch(apagarLivroApi({ id: this.livroEditar.Id }));
    this.openSnackBarDelete();
  }
  
ACTION-------------------------------------------------

export const apagarLivroApi= createAction(
    "[API] apagar livro",
    props<{ id:Number }>()
);

export const apagarLivroApiSucesso= createAction(
    "[API] apagar livro sucesso",
    props<{ id:Number }>()
);

EFFECTS---------------------------------------------

deleteBook$= createEffect(()=>
        this._actions$.pipe(
            ofType(act.apagarLivroApi),
            switchMap((action)=>{
                return this._servico
                    .apagarLivro(action.id)
                    .pipe(map((data:Number)=>{
                        return act.apagarLivroApiSucesso({ id: data});
                    }))
            })
        )    
    );
	
REDUCER--------------------------------------------

on(act.apagarLivroApiSucesso, (state, { id })=>{
        let newState= state.filter( x => x.Id !== id);
        return newState;
    })