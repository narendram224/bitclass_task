export interface addClassI{
    classes?:string;
}

export interface RootState {
    search: {
        loading: boolean,
    allProduct: [],
    searchTerm: string,
    tempAllArray: [],
    error: string,
    }
  }

  export interface itemI{
      category: string,
      title: string,
      author: string,
      follow: boolean,
      price: string,
      rating: string,
      id: string
  }