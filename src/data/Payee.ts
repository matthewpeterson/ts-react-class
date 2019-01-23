import Category from './Category';
import HasId from './HasId';
import Address from './Address';

export default interface Payee extends HasId {
  id: string;
  payeeName: string;
  address?: Address | string;
  city?: string;
  state?: string;
  zip?: string;
  categoryId: string;
  category?: Category;
  image?: string | null;
  motto?: string | null;
  active: boolean;
}
