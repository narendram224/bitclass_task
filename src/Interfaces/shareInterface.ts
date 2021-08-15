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
    active: string
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

  export interface upContentI{
    title:string;
    author:string;
    img: string;
    pay: string;
    rating:string;
    productImage:string;
    follow: boolean;
    id:string;
  }