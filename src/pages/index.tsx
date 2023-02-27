import { Title } from './styles';
import { useLogic } from './logic';
import ItemList from '@/components/ItemList';

export default function Home() {
  const { productList } = useLogic();

  return (
    <>
      <main>
        <Title>List View</Title>
        <ItemList productList={productList} />
      </main>
    </>
  );
}
