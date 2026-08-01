import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Drops — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="drops"
      title={
        <>
          MIDNIGHT
          <br />
          <em>DROP.</em>
        </>
      }
      blurb="Limited runs. Once they're gone, they're gone."
    />
  );
}
