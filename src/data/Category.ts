import HasId from './HasId';

export default interface Category extends HasId {
  categoryName: string;
  categoryType: string;
  id: string;
}
