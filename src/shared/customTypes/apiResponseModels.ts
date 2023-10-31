export interface PaginationListModel<T> {
  results: Array<T>;
  count: number;
  next: string;
  previous: string;
}

